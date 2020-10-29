// check off specific todos by clicking
// the new and old ul will be included, but when only 
// want it to run when we hit the "li" inside the ul, so that we can account for the new li added
$("ul").on("click","li",function(){
	// if li is gray
		//turn it black
	// else
		//turn it gray
	// if($(this).css("color") === "rgb(128, 128, 128)"){
	// 	$(this).css("color","black");
	// 	$(this).css("text-decoration","none");
	// }
	// else{
	// $(this).css("color","gray");
	// $(this).css("text-decoration","line-through");
	$(this).toggleClass("completed");
	// or could create an object by using the camelCase
});


// click on X to delete Todo

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
		// two this are different this
	});
	event.stopPropagation();
	//stop the event from the bubbling its parent
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		//this refers to the input that kepress has
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});