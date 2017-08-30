$(function(){
    $('input[type=submit]').click(sendData);
})
function sendData(e){
     e.preventDefault();
        if( !$('form')[0].checkValidity() ){
            $('#incorrect').show();
         return;
        }
     
     $.ajax({
         url:"https://formspree.io/andriyhischynskyy@gmail.com",
         method: "POST",
         data:{
             name: $('#full-name').val(),
             age: $('#age').val(),
             incom: $('#incom').val(),
             male: $('#male').val(),
             female: $('#female').val(),
             telephone: $('#tel').val(),
             email: $('#email').val(),
             fattines: $('#dont-drinl-milk').val(),
             fattines: $('#fat-0').val(),name : $('#').val(),
             fattines: $('#fat-1.5').val(),
             fattines: $('#fat-3.2').val(),
             important: $('#cb-1').val(),
             important: $('#cb-2').val(),
             important: $('#cb-3').val(),
             important: $('#cb-4').val(),
             message: $('#message').val()
            },
         dataType: "json"
         })
         .done(function(){
             $('form')[0].reset();
             $('#thanks').show();
         
     });
}