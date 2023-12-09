$("#submit_button").click(function(){
    
    var messageBody = document.getElementById('mes-1').value;
    messageBody = encodeURIComponent(messageBody);
    window.open('mailto:test@example.com?body=' + messageBody);


})