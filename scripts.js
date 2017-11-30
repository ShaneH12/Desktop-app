$(document).ready(function(){
  //When you click register on the CIS courses page, it switches it to ENG classes.
  $(".register-button").click(function(){
    $(".form-title").html("English");
    $(".CIS-105").html("ENG 106");
    $(".CIS-111").html("ENG 116");
    $(".CIS-211").html("ENG 216");
    $(".class-name-1").html("English Composition");
    $(".class-name-2").html("Short Story & Poetry");
    $(".class-name-3").html("Technical Report Writing");
    $('.english-classes-container').show();
    });
    //When you click the "calendar" button it switches from list to calendar and styles it
    $(".calendar").click(function() {
      $(".calendar").css("color", "#2fcfba")
      $(".table-container").css("display", "none");
      $(".table-master").show();
      $(".list-button").css("color", "black");
    })
    //When you click the "list" button it switches back from calendar to list
    $(".list-button").click(function() {
      $(".table-master").css("display", "none");
      $(".table-container").show();
      $(".calendar").css("color", "black")
      $(".list-button").css("color", "#2fcfba")
    })
    //When you click the "get help" button it starts the process of helping you
    $(".get-help-button").click(function() {
      $("#box-1").show();
    });
    //Responds to your choice on the problem selection screen of the first pop up
    $("#next-help-button").click(function() {
      //If you click classes not availble then it will move to the next help screen
      if ($('input[name=help-options]:checked').val() === "reason") {
        $("#box-1").hide();
        $("#courses-unavailable").show();
        return false;
      //If you click for a major change then it will move to the next help screen
      } else if ($('input[name=help-options]:checked').val() === "major-change") {
        $("#box-1").hide();
        $("#course-register-help").show();
        return false;
      //If you click "other error" it will move to the next help screen
      } else {
        $("#box-1").hide();
        $("#third-popup").show();
        return false;
    }
    });
    //When you click the "submit" button after describing your error
    $("#submit-error-button").click(function() {
      $("#third-popup").hide();
      $("#other-error").show();
      return false;
    });
    //When you click the "thanks" button at the end of the other error popup box
    $("#thanks-button").click(function() {
      $("#other-error").hide();
    });
    //When you click the "okay" button at the end of the courses unavailable popup box
    $("#okay-button").click(function() {
      $("#courses-unavailable").hide();
    });
    //When you select your new major on the dropdown list.
    $("#no-classes-button").click(function() {
      $("#course-register-help").hide();
    });
});

//Get current date and add it to top of pages
function numberToDay(numberDay) {
  if (numberDay === 0) {
    return "Sunday";
  } else if (numberDay === 1) {
    return "Monday";
  } else if (numberDay === 2) {
    return "Tuesday";
  } else if (numberDay === 3) {
    return "Wednesday";
  } else if (numberDay === 4) {
    return "Thursday";
  } else if (numberDay === 5) {
    return "Friday";
  } else  {
    return "Saturday";
  }
}
function getMonthName(monthNumber) {
  if (monthNumber === 0) {
    return "January";
  } else if (monthNumber === 1) {
    return "February";
  } else if (monthNumber === 2) {
    return "March";
  } else if (monthNumber === 3) {
    return "April";
  } else if (monthNumber === 4) {
    return "May";
  } else if (monthNumber === 5) {
    return "June";
  } else if (monthNumber === 6) {
    return "July";
  } else if (monthNumber === 7) {
    return "August";
  } else if (monthNumber === 8) {
    return "September";
  } else if (monthNumber === 9) {
    return "October";
  } else if (monthNumber === 10) {
    return "November";
  } else {
    return "December";
  }
}
var d = new Date();
var numberOfDay = d.getDate();
var day = numberToDay(d.getDay());
var month = getMonthName(d.getMonth());
var year = d.getFullYear();


document.getElementsByClassName("header-date")[0].innerHTML = (day + ", " + month + " " + numberOfDay + ", " + year).toUpperCase();
