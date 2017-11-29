$(document).ready(function(){
  $(".button-text").click(function(){
    $(".form-title").html("English");
    $(".CIS-105").html("ENG 106");
    $(".CIS-111").html("ENG 116");
    $(".CIS-211").html("ENG 216");
    $(".class-name-1").html("English Composition");
    $(".class-name-2").html("Short Story & Poetry");
    $(".class-name-3").html("Technical Report Writing");
    $('.english-classes-container').show();
    });

    $(".calendar").click(function() {
      $(".calendar").css("color", "#2fcfba")
      $(".table-container").css("display", "none");
      $(".table-master").show();
      $(".list-button").css("color", "black");
    })
    $(".list-button").click(function() {
      $(".table-master").css("display", "none");
      $(".table-container").show();
      $(".calendar").css("color", "black")
      $(".list-button").css("color", "#2fcfba")
    })
});
