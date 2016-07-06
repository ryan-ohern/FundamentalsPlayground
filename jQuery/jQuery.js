$(document).ready(function(){

	$("#hide").click(function(){
		$("#image").hide();
	});

	$("#show").click(function(){
		$("#image").show();
	});

	$("#fade-in").click(function(){
		$("#image").fadeIn(10000);
	});

	$("#explode").click(function(){
		$("#image").hide("explode", {pieces: 600}, 2000);
	});

	$("#updown").click(function(){
		$("#image").slideUp(200).slideDown(500); 
	});	

	$("#size-change").click(function(){
		$("#image").animate({
			height: '+=10%',
			width: '+=10%'
		});
	});	

})