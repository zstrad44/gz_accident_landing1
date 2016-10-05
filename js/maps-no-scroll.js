$(document).ready(function() {
    
    
    $('embedMap').click(function () {
        $('#embedMap iframe').css("pointer-events", "auto");
    });

    $( "embedMap" ).mouseleave(function() {
        $('#embedMap iframe').css("pointer-events", "none"); 
    });
});