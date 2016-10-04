var options = {
    useEasing : true, 
    useGrouping : true, 
    separator : ',', 
    decimal : '.', 
    prefix : '', 
    suffix : '' 
};
 

var count1 = new countUp("count1", 0, 100000, 0, 2, options);
var count2 = new countUp("count2", 0, 10000, 0, 2.2, options);
var count3 = new countUp("count3", 0, 1000000, 0, 2.5, options);


var runCounter = function() {
    count1.start();
    count2.start();
    count3.start();
};


$(document).ready(function(){



        

    
});