$(document).ready(function(){
    $('#slideDown').click(function(){
        $('p').slideDown();
    })

    $('#slideUp').click(function(){
        $('p').slideUp();
    })

    $('#slideToggle').click(function(){
        $('p').slideToggle();
    })
});