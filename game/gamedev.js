$( document ).ready(function() {

var jodie = $("#jodie");
$( "#jodie" ).hide();
$( "#mob3" ).hide();
$("#death").hide();

$("#mob4").hide();
$("#mob5").hide();
$("#mob6").hide();
$("#mob7").hide();
$("#mob8").hide();

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
});



$("#moonman").click(function(){
    $( "#moonman" ).hide();
    //BRUNO AND MYRON CHOOSE HOW YOUR GAME WILL END HERE!!
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

