console.log("hello tester!");

const url ="" ;

// form_listener

$('#your-form').on('click', '#submitButton1', function (e) {
  e.preventDefault();
  
  //alternative: instead of 'formSubmit.json' you can grab the target from the form tag: $(this).attr('action')
  $.ajax( {
    url: url,
    type: 'POST',
    data: $(this).serialize()
  })
    .done(function (response) {
      // manejar la respuesta correcta a mi manera
      $('#result').text(response.message);
    })
    .fail(function (request, errorType, errorMessage) {
      //timeout, error, abort, parseerror
      // alert(errorMessage);
      console.log(errorType);
      $('#result').text(errorType +" "+ errorMessage);
    })
    .always(function () {
      $('#resultAlways').text('POST ejecutado');
    });
});





