
$(document).ready(function(){

$("#first-read-more-text").hide();
$("#second-read-more-text").hide();
$(".read-less").hide();
$("#first-read-more-text").click(preventMovement);
$("#second-read-more-text").click(preventMovement);
$("#first-read-less-text").click(preventMovement);
$("#second-read-less-text").click(preventMovement);



$("#first-read-more-button").click(showFirst);
function showFirst() {
	$("#first-read-more-text").slideDown();
	$("#first-read-more-button").hide();
	$("#first-read-less-button").show();
}
function preventMovement(){
  		event.preventDefault();
}

$("#first-read-less-button").click(hideFirst);
function hideFirst() {
	$("#first-read-more-text").slideUp();
	$("#first-read-less-button").hide();
	$("#first-read-more-button").show();

}
function preventMovement(){
  		event.preventDefault();
}

$("#second-read-more-button").click(showSecond);
function showSecond() {
	$("#second-read-more-text").slideDown();
	$("#second-read-more-button").hide();
	$("#second-read-less-button").show();
}
function preventMovement(){
  		event.preventDefault();
}
$("#second-read-less-button").click(hideSecond);
function hideSecond() {
	$("#second-read-more-text").slideUp();
	$("#second-read-less-button").hide();
	$("#second-read-more-button").show();
}

function preventMovement(){
  		event.preventDefault();
}

})




 
