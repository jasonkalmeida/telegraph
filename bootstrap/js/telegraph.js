
function subscribed()
{
}


$(function() {
  $( "#button" ).click(function() {
	  
	  //alert(document.getElementById("email").className);
	  
	  
	  var el = document.getElementById("button");

	         el.innerHTML = '<div class="spinner"></div>';
	    
		 
      setTimeout(function() {
        
		  var el = document.getElementById("button");
		     if (el.innerHTML == '<div class="spinner"></div>') 
		     {
				 if(document.getElementById("email").className == 'form-control mce_inline_error')
				 {
					 el.innerHTML = '<i class=\"fa fa-close\"></i>';
					 $( "#button" ).addClass( "change-error", 450);
					 $('#email').attr('placeholder',' Invalid email. Please try again. ');
					 
					 setTimeout(function() {
						 
						 $( "#button" ).removeClass( "change-error" );
						 el.innerHTML = '<i class=\"fa fa-chevron-right\"></i>';
						 $('#email').attr('placeholder',' Submit your email to subscribe... ');
						 
						 
						 
			         }, 4250 );
						 
					 
				 }
				 else if(document.getElementById("email").className == 'form-control valid')
				 {
					 el.innerHTML = '&#xf00c;';
					 $( "#button" ).addClass( "change", 450);
					 $('#email').attr('placeholder','Thank you for subscribing!');
					 
					 
				 }
		     }
			 
			 
		    
		
         }, 3250 );


	//$( "#button" ).removeClass( "btn btn-default" );
	
   
	
    //$( "#button" ).addClass( "change", 450);
	//callback();
  });
 
/*
    function callback() {
		
	    
      setTimeout(function() {
        $( "#button" ).removeClass( "change" );
		$( "#button" ).addClass( "btn btn-default" );
		
  	  var el = document.getElementById("button");

  	       el.innerHTML = 'SUBMIT';
		
      }, 4250 );
    }*/
  });