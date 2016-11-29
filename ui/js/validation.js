$(document).ready(function(){
// Wait for the DOM to be ready

   function createAccountValidation() {
       var $honey = $('#honey').val();
       $('#message').hide();
       $('.fa-refresh').hide();
      $("form[name='contact-form']").validate({
          // Specify validation rules
          rules: {
              firstName: {
                  required: true
              },
              lastName: {
                  required: true
              },
              email: {
                  required: true,
                  email: true
              },
              phone: {
                  required: true,
                  phoneUS: true
              }
          },
          messages: {
              firstname: {
                  required: "First name is required"
              },
              lastname: {
                  required: "Last name is required"
              },
              email: {
                  required: "Email is required",
                  email: "Please enter a valid email address"
              },
              phone: {
                  required: "Phone number is required",
                  phoneUS: "Please enter a valid phone number"
              }
          },
          highlight: function (element, errorClass, validClass) {
              $(element).addClass(errorClass).removeClass(validClass);
              $(element.form).find("label[for=" + element.id + "]")
                  .addClass('alt-color');
          },
          unhighlight: function (element, errorClass, validClass) {
              $(element).removeClass(errorClass).addClass(validClass);
              $(element.form).find("label[for=" + element.id + "]")
                  .removeClass('alt-color');
          },
          onfocusout: function (element) {
              $(element).valid();
          },
          errorPlacement: function (error, element) {
              error.appendTo(element.parent()).hide().slideDown('normal', function () {

              });
          },
          // Make sure the form is submitted to the destination defined
          // in the "action" attribute of the form when valid
          submitHandler: function (form) {
              if ($honey.length !== 0 && ~value.indexOf('@') && ~value.indexOf('sir')) {
              } else {
                  var formData = $('#contactForm').serialize();
                  $('.fa-paper-plane').hide();
                  $('.fa-refresh').show();
                  $.ajax({
                      type: 'POST',
                      url: 'https://formspree.io/dodey@icloud.com',
                      data: formData,
                      dataType: 'json',
                      success: function (response) {
                          console.log(response);
                          $('.fa-paper-plane').hide();
                          $('.fa-refresh').show();
                          if (response.success === 'email sent') {
                              $('#message').fadeIn('fast');
                              $('#submitForm').hide();
                          }
                      }
                  });
              }
          }
      });

   }

   createAccountValidation();

});
