$( document ).ready(function() {
    $(window).resize(function(){

        if ($(window).width() <= 992) {  
           
            
            $('.hidemenu').click(function(){
                $('.hides' ).toggle();
               
              });
        
           
             
 
        }else{
            $( ".hides" ).css("display","none");
        }     
 
 });
});

