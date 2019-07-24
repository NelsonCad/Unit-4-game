

let totalScore = 0; //user Score
let endScore = Math.floor((Math.random() * 100) + 20);
let i = 0;
let Wins = 0;
let Losses = 0;

$("#wins").text(Wins);
$("#losses").text(Losses);
$("#targetScore").text(endScore); // Generates the target score for the user

//created array to spawn buttons from
const betaKids = ["john", "jade", "dave", "rose"];
const betaPics = ["assets/images/Jhon.PNG", "assets/images/Jaed.PNG", "assets/images/Daev.PNG", "assets/images/Rozz.PNG"];



betaKids.forEach(function (kid) {
    //creates a button for each kid
    let userBtn = $("<button>");

    let random = Math.floor((Math.random() * 10) + 1);

    value = random;
    //adds classes to each button created
    userBtn.addClass("kid-button kid kid-button-color");

    //adds the data of the kid to each button generated
    userBtn.attr("data-letter", kid);
    userBtn.attr("data-value", value);


    //adds the name of the kid to the front of the button generated
    userBtn.text(kid);

    //adds all above data to the next open slot for a button
    $("#boxen").append(userBtn);
    $("#boxen").append("<img src=" + betaPics[i] + " width='125px'>");
    $("#boxen").append("<br>");

    i++;
});




$(".kid-button").on("click", function () {

    totalScore += $(this).data("value");

    $("#userScore").text(totalScore);

    if (totalScore < endScore) {

        return;

    } else if (totalScore === endScore) {
        console.log("you won!");
        Wins++;
        endScore = 0;
        endScore = Math.floor((Math.random() * 100) + 20);
        totalScore = 0;

        $("#wins").text(Wins);
        $("#losses").text(Losses);
        $("#targetScore").text(endScore);
        $("#userScore").text(totalScore);

        $("button").each(function () {
            let value = Math.floor((Math.random() * 10) + 1);
            $(this).attr("data-value", value);
        });


    } else {
        console.log("you lost!");
        Losses++;
        endScore = 0;
        endScore = Math.floor((Math.random() * 100) + 20);
        totalScore = 0;

        $("#wins").text(Wins);
        $("#losses").text(Losses);
        $("#targetScore").text(endScore);
        $("#userScore").text(totalScore);

        $(".kid-button").each(function () {
            let value = Math.floor((Math.random() * 10) + 1);
            $(this).attr("data-value", value);
        });

    };

});



