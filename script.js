//current date for header

var currentDate = moment().format("MM/DD/YYYY");

$("#currentDay").append(currentDate);

//save input to local storage
$(".saveBtn").on("click", function () {
    var toDO = $(this).val();
    console.log(toDo);

    localStorage.setItem()
})

//current hour for color changes
var currentHour = moment().hour();

var textBody = $(".textBody");

function changeColor() {
    for (var i = 0; i < textBody.length; i++) {
        var now = parseInt(textBody[i].dataset.time);
        console.log(now);

        if (now > currentHour) {
            textBody[i].attr("id", "future");
        }

        if (now < currentHour) {
            textBody[i].attr("id", "past");
        }

        if (now == currentHour) {
            textBody[i].attr("id", "present");
        }

    }

changeColor();
}