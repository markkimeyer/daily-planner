//current date for header

var currentDate = moment().format("MM/DD/YYYY");

$("#currentDay").append(currentDate);

//current hour for color changes
var currentHour = moment().hour();

// var plannerHour = $(".row").attr("value");
// console.log(plannerHour);

var textBody = $(".text-body");


            
    function changeColor() {
        console.log(currentHour);
        for (var i = 0; i < textBody.length; i++){
            var currentHourInputBox = textBody[i];
            // var plannerHour = $(".row").attr("value");
            // console.log($(currentHourInputBox).attr("data-value"));
            var plannerHour = $(currentHourInputBox).attr("data-value");

        if (plannerHour > currentHour) {
            $(textBody[i]).addClass("future");
        }

        if (plannerHour < currentHour) {
            $(textBody[i]).addClass("past");
        }

        if (plannerHour === currentHour) {
            $(textBody[i]).addClass("present");
        }
    
    }
}

changeColor();

// for (i = 0; i < 10; i++) {
//     console.log( localStorage.getItem(8+i+"input"));

    $(textBody).each(function() {

        //get input from local storage
    var saveInput = localStorage.getItem($(this).attr("data-value") + "input");
    $(this).val(saveInput);    
        })



//save input to local storage
$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    $(textBody).each(function() {
    
    localStorage.setItem($(this).attr("data-value") + "input",($(this).val()));
    
    })
 
 })