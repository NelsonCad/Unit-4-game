//created array to spawn buttons from
let betaKids = ["john", "jade", "dave", "rose"];

//dynamically create the buttons here
betaKids.forEach(function (kid) {
    //creates a button for each kid
    let userBtn = $("<button>");
    
    //let randomValue = Math.floor((Math.random() * 10) + 1);

    //adds classes to each button created
    userBtn.addClass("kid-button kid kid-button-color");

    //adds the data of the kid to each button generated
    userBtn.attr("data-letter",kid);

    //adds the name of the kid to the front of the button generated
    userBtn.text(kid);




    //adds all above data to the next open slot for a button
    $("#boxen").append(userBtn + "<br>");
});