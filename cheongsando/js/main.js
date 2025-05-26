$(document).ready(function(){
    //console.log('되니???')
    $('.tour .list ul li').on('mouseenter', function(){
        $('.tour .list ul li').removeClass('on')
        $(this).addClass('on')
    })
})