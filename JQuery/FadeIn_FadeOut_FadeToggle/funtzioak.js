$(document).ready(function(){
    $('#fadeIn').click(function(){
        $('p').fadeIn();
    })

    $('#fadeOut').click(function(){
        $('p').fadeOut();
    })

    $('#fadeToggle').click(function(){
        $('p').fadeToggle();
    })
});