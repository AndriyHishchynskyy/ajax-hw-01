$(function(){
    $('input[type=submit]').click(sendData);
});
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
             incom: $('#income').val(),
             male: $('#male').val(),
             female: $('#female').val(),
             telephone: $('#tel').val(),
             email: $('#email').val(),
             answer1: $('#dont-drinl-milk').val(),
             answer2: $('#fat-0').val(),
             answer3: $('#fat-1.5').val(),
             answer4: $('#fat-3.2').val(),
             important1: $('#cb-1').val(),
             important2: $('#cb-2').val(),
             important3: $('#cb-3').val(),
             important4: $('#cb-4').val(),
             message: $('#message').val()
            },
        dataType: "json"
        })
        .done(function(){
             $('form')[0].reset();
             $('#thanks').show();
        });
}