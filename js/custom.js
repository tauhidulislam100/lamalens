$(document).ready(function(){

          //custom seclect box
        $("select").addClass("selectpicker");
        $('.selectpicker').selectpicker();

       
        // list and Grid view
        $('.cd-close').click(function(){
        	$('.cd-gallery').addClass('full-width');
        });

        $('.grid-view').click(function(e){
        	e.preventDefault();
        	$('.video-thumb-gallary').removeClass('list');
        });

        $('.list-view').click(function(e){
        	e.preventDefault();
        	$('.video-thumb-gallary').addClass('list');
        });

        // would like use lamalens
         $('.would-like input').click(function () {
            $('.would-like input:not(:checked)').parent('.would-like').removeClass("active");
            $('.would-like input:checked').parent('.would-like').addClass("active");
        });  

        $(".lightbox a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',slideshow:3000, autoplay_slideshow: false });


      });