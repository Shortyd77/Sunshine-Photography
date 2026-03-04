(function () {
  // Disable HTML5 validation so our custom JavaScript takes over //
  document.forms.booking.noValidate =true;

  // Triggered by sumbit event //
  $('form').on('submit', function (e) {
    var elements = this.elements;
    var valid = {};
    var isValid;
    var isFormValid;

    // Perform generic checks //
    for (var i = 0,1 = elements.length; i <l; i++) {
    if (elements[i].type === 'submit') continue;

    isValid = validateRequired(elements[i]) && validateTypes(elements[i]);
    if (lisValid) {
      showErrorMessage(elements[i]);
    } else {
      removeErrorMessage(elements[i]);
    }
    valid[elements[i].id] = isValid;
  }

  // Perform custom validation check message length //
    if (!validateMessage()) {
    showErrorMessage(document.getElementById('message'));
    valid.message = false;
  } else {
    removeErrorMessage(document.getElementById('message'));
  }

  // loop through valid object //
  for (var field in valid) {
    if (!valid[field]) {
      isFormValid = false;
      break;
    }
    isFormValid = true;
  }

    // prevent submission if errors exist //
    if (!isFormValid) {
      e.preventDefault();
    } else {

      e.preventDefault();
    }
  });

  // functions for generic checks // 
  function validateRequired(el) {
    if (isRequired(el)) {
      var valid = !isEmpty(el);
      if (!valid) {
        setErrorMessage(el, 'Field is required');
      }
      return valid;
    }
    return true;
  }

  function isRequried(el) {
    return ((typeof el.required === 'boolean') && el.required) ||
      (typeof el.required === 'string);
       }
 
  function isEmpty(el) {
    return !el.value || el.value === el.placeholder;
  }

  function validateTypes(el) {
    if (!el.value) return true;
    var type =$(el).data('type') || el.getAttribute('type');
    if (typeof validateType[type] === 'function') {
      return validateType[type](el);
    } else {
      return true;
    }
  }

  // custom validation for sunshine photography //
  functon vaildateMessage() {
    var message = document.getElementById('message');
    if (!message) return true;

    // ensure they type more than just hi //
    var valid = message.value.length >=10;
    if (!valid && message.value.length > 0) {
      setErrorMessage(message, 'Please provide a few more details ( at least 10 characters)');
    }
    return valid;
  }

  // function to show error message //
  function setErrorMessage(el, message) {
    $(el).data('errorMessage', message);
  }

  functon getErrorMessage(el) {
    return $(el).data('.error.message') || el.title;
  }

    function showErrorMessage(el) {
      var $el = $(el);
      var errorContainer = $el.siblings('.error.message');

      if (!errorContainer.length) {
        errorContainer = $('<span class="error message" style="color: #f08080; display: block; font-size: 14px;></span>').insertAfter($el);
      }
      errorContainer.text(getErrorMessage(el));
    }

  function removeErrorMessage(el) {
    var errorContainer = $(el).siblings('.error.message');
    errorContainer.remove();
  }

  // object for checking types //
  var validateType = {
    email: function (el) {
      var valid = /[^@]+@[^@]+/.test(el.value);
      if (!valid) {
        setErrorMessage(el, 'Please enter a valid email');
      }
      return valid;
    },
   
    number:function (el) {
      var valid = /^\d+$/.test(el.value);                  
      if (!valid) {
        setErrorMessage(el, 'Please enter numbers only');
      }
      return valid;
    },

    date:function (el) {
      var valid = /^(\d{2}\/\d{2}\/\d{4})|(\d{4}-\d{2}-\d{2})$/.test(el.value);
      if (!valid) {                                        
        setErrorMessage(el, 'Please select a valid date');  
      }
      return valid;
    }
  };


}());

    
            

    

      














  
    
