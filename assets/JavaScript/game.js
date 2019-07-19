$(document).ready(function(){




//created array to spawn buttons from
var betaKids = ["john", "jade", "dave", "rose"];

//dynamically create the buttons here
betaKids.forEach(function (kid) {
    //creates a button for each kid
    let userBtn = $("<button>");
    
    let random = Math.floor((Math.random() * 100) + 1);
    
    value = random;
    //adds classes to each button created
    userBtn.addClass("kid-button kid kid-button-color");

    //adds the data of the kid to each button generated
    userBtn.attr("data-letter", kid);
    userBtn.attr("data-value", value);
    

    //adds the name of the kid to the front of the button generated
    userBtn.text(kid);

    console.log(value)


    //adds all above data to the next open slot for a button
    $("#boxen").append(userBtn);
    $("#boxen").append("<br>");
});

$(".kid-button").on("click", function(){

    
})



})