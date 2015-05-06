// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	$('#btnvibrar').on ('tap',function(){ 
	navigator.vibrate (1000);
	
}); //tap a btnvibrar
$('#btnbeep').on ('tap', function(){
	navigator.notification.beep(1);
	
});	// tap btnbeep
$('#izquierda').on ('swipeleft',function(){
	alert("Barrio a la izquierda")
	
});//tap izquierda
$('#derecha').on ('swipright',function(){
	alert("Barrio a la derecha")
	
}); // tap derecha

document.addEventListener("pause", function () {
$('#listado'). append("<p> se pauso </p>");

}); // tap pausa

document.addEventListener("resum", function () {
$('#listado'). append("<p> se pauso </p>");
}); // tap resum

$(window).on ('orientationchange',function(e) {
$('#listado').append ("<p> Orientación: " + e.orientation + "<p>");
});

});
});