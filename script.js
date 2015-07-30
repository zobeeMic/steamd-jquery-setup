$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
});

$('#alert-button').click(function(){
	alert('Hello World!');
});



$('#bt2').click(function(){
	$('#hide-p').hide();
});


$('#showbtn').click(function(){
	$('#hide-p').show();
});