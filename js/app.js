

//click me

$(document).ready(function(){
	$(".menu2").hide();
  		
	$(".button2").click(function(){
   		$(".menu2").slideToggle('slow');
  	});
});

// end click me

// begin click to complete 

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if( ev.target.tagName === 'LI') {
     ev.target.classList.toggle('done'); 
  }
}, false);

// end click to complete