$( document ).ready(function() {

var jodie = $("#jodie");
$( "#jodie" ).hide();
$( "#mob3" ).hide();
$("#death").hide();
$("#moonman2").hide();

$("#mob4").hide();
$("#mob5").hide();
$("#moonman").hide();
$("#door").hide();


$("#refresh").hide();

$("#next").click(function(){
	$( "#talkbox" ).hide();
	$( "#wible" ).hide();
	$( "#exploreBody" ).css("backgroundImage","url(img/back3.png)");
	$("#jodie").show();
    $('#bulletleft').hide();
    $('#bulletright').hide();
    $('#mob3').show();
    
    });//end of #next click function

$("#mob3").click(function(){
    $( "#mob3" ).hide();
    $( "#mob4" ).show();
});//end mob3 click

$("#mob4").click(function(){
    $( "#mob4" ).hide();
    $( "#mob5" ).show();
});

$("#mob5").click(function(){
    $( "#mob5" ).hide();
    $( "#moonman" ).show();
    $("#moonman").animate({
        left: '-=400px'});
});



$("#moonman").click(function(){
   
    $( "#moonman" ).hide();
    $("#moonman2").show();
    
});
$("#moonman2").click(function(){
    $("#door").show();
   $("#moonman2").hide();
});
$("#door").click(function(){
    $("#jodie").hide();
    $("#door").hide();
    $( "#exploreBody" ).css("backgroundImage","url(img/end1.png)");
});



});//end document.ready


$(document).keydown(function(e) {
    switch (e.which) {
    case 37:
        $("#jodie").stop().animate({
            left: '-=75'
        }); //left arrow key
        break;
   
    case 39:
        $("#jodie").stop().animate({
            left: '+=75'
        }); //right arrow key
        break;

         case 32:
        $('#bulletright').show();
        $('#bulletleft').show();
        $('#bulletleft').animate({
            left: '-=1000'
        });
        $('#bulletright').animate({
            right: '-=1000'
        });
        break;


    
    }
});

