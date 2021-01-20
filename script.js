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

//save input to local storage
$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    var saveInput = $(textBody).val();
     console.log(saveInput);
 
 //     localStorage.setItem()
 })