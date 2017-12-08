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
    } else if ($('input[name=help-options]:checked').val() === "other") {
        $("#box-1").hide();
        $("#third-popup").show();
        return false;
    } else {
      $(".no-selection-error-message").show();
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
    //Login page
    var username = "dhernandez@stevenscollege.edu";
    var password = "password";

    function isValidEmailAddress(emailAddress) {
      var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
      return pattern.test(emailAddress);
}
    $("#get-user-info").click(function() {
      var userNameInput = $("#username-input").val();
      var passwordInput = $("#password-input").val();
      if (isValidEmailAddress(userNameInput) === true && userNameInput === username && passwordInput === "password") {
        window.location = "homepage.html";
      } else {
        $("#user-input-container").effect( "shake" );
        $("#wrong-username-password").show();
      }

});
//Forgot password popup boxess
  var favoriteColor = "red";
  var emailSuffix = "stevenscollege.edu";
  function checkCollegeEmail(email) {
    var emailSplit = email.split("@")[1];
    if (emailSplit === emailSuffix) {
      return true;
    } else {
      return false;
    }
  }
    $(".forgot-password-text").click(function() {
      $("#forgot-password-box").show();
    });
    $("#submit-email").click(function() {
      var emailInput = $("#user-email").val();
      if (checkCollegeEmail(emailInput)) {
        $("#street-grew-up-on").show();
        $("#forgot-password-box").hide();
      } else {
        $("#user-email").css("border", "2px solid red");
      }
    });

    $("#submit-street").click(function() {
      if ($("#street-input").val() === "Orange Street") {
        $("#favorite-color-box").show();
        $("#street-grew-up-on").hide();
      } else {
        $("#street-input").css("border", "2px solid red");
        $(".emails-no-match").show();
      }
    });
    $("#submit-color").click(function() {
      if ($("#user-favorite-color").val().toLowerCase() === "red") {
        $("#sucessfull-password").show();
        $("#favorite-color-box").hide();
      } else {
        $("#user-favorite-color").css("border", "2px solid red");
      }
    });
    $("#okay-reset").click(function() {
      $(".password-success").hide();
    });
    $("#logout-button").click(function() {
      $("#logout-box").show();
    });

    //Change Email Section
    $("#edit-email").click(function() {
      $("#update-email-address").css('display', "block");
    });
    //Verify email popup box
    $("#submit-emails").click(function() {
      var newEmail = $("#new-email").val().toLowerCase();
      var verifiedEmail = $("#verify-email").val().toLowerCase();
      if (newEmail === verifiedEmail && checkCollegeEmail(newEmail) === true && checkCollegeEmail(verifiedEmail) === true) {
        $("#email-updated").show();
      } else {
        $(".email-input-div").effect("shake");
        $("#new-email").css("border", "2px solid #d0021b");
        $("#verify-email").css("border", "2px solid #d0021b");
        $(".emails-no-match").show();
      }
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
