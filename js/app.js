

//click me

$(document).ready(function(){
	$(".menu2").hide();
  		
	$(".button2").click(function(){
   		$(".menu2").slideToggle('slow');
  	});

  	// begin click to complete 

   $('.list-items').on('click','li', function(e) {
      $(this).toggleClass('done'); 
    });

// end click to complete

	$('.add-new-item').on('keyup', function(e){
		if(e.keyCode === 13){
			console.log(e);
			addItem();
		}
	})

    $('.add-item-btn').on('click', function(){
    	addItem();
    })

});


var addItem = function(){
	var newItem = $('input.add-new-item').val();
    $('.list-items').prepend('<li>'+ newItem +'</li>');
}

// end click me

