$(function() {
    var $gallery = $('#gallery-container');
    var $cards = $('.gallery');
    var $search = $('#photoSearch');
    var $buttons = $('#filter-buttons');
    var tagged = {};
    var cache = [];

    // 1. PREPARE DATA (Search Cache & Filter Tags)
    $cards.each(function() {
        var card = this;
        var tags = $(this).data('tags');
        var altText = $(this).find('img').attr('alt').toLowerCase();

        // Add to search cache
        cache.push({
            element: card,
            text: altText
        });

        // Add to tags object
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
        }
    }).appendTo($buttons);

    $.each(tagged, function(tagName) {
        $('<button/>', {
            text: tagName,
            click: function() {
                $(this).addClass('active').siblings().removeClass('active');
                $cards.hide().filter(tagged[tagName]).fadeIn();
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
    }
    $search.on('input', filterSearch);

    // 4. SORTING FUNCTIONALITY 
$('#sort-dropdown').on('change', function() {
    var selection = $(this).val();
    var $gallery = $('#gallery-container');
    var $cards = $('.gallery');

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
});
