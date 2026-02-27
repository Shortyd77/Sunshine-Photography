$(function() {
    var $gallery = $('#gallery-container');
    var $cards = $('.gallery');
    var $search = $('#photoSearch');
    var $buttons = $('#filter-buttons');
    var tagged = {};
    var cache = [];

    // 1. PREPARE DATA //
    $cards.each(function() {
        var card = this;
        var tags = $(this).data('tags');
        var $img = $(this).find('img');
        
        
        var altText = $img.attr('alt') ? $img.attr('alt').toLowerCase() : "";

        cache.push({
            element: card,
            text: altText
        });

        if (tags) {
            tags.split(',').forEach(function(tagName) {
                tagName = tagName.trim();
                if (tagged[tagName] == null) { tagged[tagName] = []; }
                tagged[tagName].push(card);
            });
        }
    });

    // 2. CREATE FILTER BUTTONS
    $('<button/>', {
        text: 'Show All',
        class: 'active',
        click: function() {
            $(this).addClass('active').siblings().removeClass('active');
            $cards.fadeIn();
            $search.val(''); // Clear search when filtering
        }
    }).appendTo($buttons);

    $.each(tagged, function(tagName) {
        $('<button/>', {
            text: tagName,
            click: function() {
                $(this).addClass('active').siblings().removeClass('active');
                $cards.hide().filter(tagged[tagName]).fadeIn();
                $search.val(''); // Clear search when filtering
            }
        }).appendTo($buttons);
    });

    // 3. SEARCH FUNCTIONALITY
    function filterSearch() {
        var query = this.value.trim().toLowerCase();
        cache.forEach(function(obj) {
            var index = obj.text.indexOf(query);
            $(obj.element).toggle(index !== -1);
        });
        // Remove active class from filter buttons when searching
        $buttons.find('button').removeClass('active');
    }
    $search.on('input', filterSearch);

    // 4. SORTING FUNCTIONALITY (Dropdown)
    $('#sort-dropdown').on('change', function() {
        var selection = $(this).val();
        if (selection === 'az') {
            $cards.sort(function(a, b) {
                return $(a).data('tags') > $(b).data('tags') ? 1 : -1;
            }).appendTo($gallery);
        } else if (selection === 'za') {
            $cards.sort(function(a, b) {
                return $(a).data('tags') < $(b).data('tags') ? 1 : -1;
            }).appendTo($gallery);
        }
    });
});
