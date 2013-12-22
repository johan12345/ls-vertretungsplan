/*-----------------------------------------------------------------------------------*/
/*	VIDEO
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function() {
	jQuery('.media').fitVids();
});

/*-----------------------------------------------------------------------------------*/
/*	CHAT STYLE
/*-----------------------------------------------------------------------------------*/
$(document).ready(function(){
	$('.format-chat li:even').css('background-color','#e9e9e9');
	$('.format-chat li:odd').css('background-color','#f4f4f4');
});



/*-----------------------------------------------------------------------------------*/
/*	SELECTNAV
/*-----------------------------------------------------------------------------------*/

$(document).ready(function() {
	selectnav('tiny', {
		label: '--- Navigation --- ',
		indent: '-'
	});
});

/*-----------------------------------------------------------------------------------*/
/*	IMAGE HOVER
/*-----------------------------------------------------------------------------------*/
 $(document).ready(function() {
 if(!(navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/Android/i))) {
        $('.gallery-items li.item').mouseenter(function(e) {

            $(this).children('a').children('span').fadeIn(300);
        }).mouseleave(function(e) {

            $(this).children('a').children('span').fadeOut(400);
        });
    }
    });
    
/*-----------------------------------------------------------------------------------*/
/*	SOCIAL HOVER
/*-----------------------------------------------------------------------------------*/

$(function() {
$('.social img').css("opacity","1.0");	
$('.social img').hover(function () {										  
$(this).stop().animate({ opacity: 0.75 }, "fast"); },	
function () {			
$(this).stop().animate({ opacity: 1.0 }, "fast");
});
});

/*-----------------------------------------------------------------------------------*/
/*	BUTTON HOVER
/*-----------------------------------------------------------------------------------*/


$(function() {
$("a.button, .forms fieldset .btn-submit, #submit").css("opacity","1.0");
$("a.button, .forms fieldset .btn-submit, #submit").hover(function () {
$(this).stop().animate({ opacity: 0.85 }, "fast");  },
function () {
$(this).stop().animate({ opacity: 1.0 }, "fast");  
}); 
});

/*-----------------------------------------------------------------------------------*/
/*	FORM
/*-----------------------------------------------------------------------------------*/

$(document).ready(function() {
	$('input[title]').each(function() {
		if($(this).val() === '') {
			$(this).val($(this).attr('title'));	
		}
		
		$(this).focus(function() {
			if($(this).val() == $(this).attr('title')) {
				$(this).val('').addClass('focused');	
			}
		});
		$(this).blur(function() {
			if($(this).val() === '') {
				$(this).val($(this).attr('title')).removeClass('focused');	
			}
		});
	});
});

/*-----------------------------------------------------------------------------------*/
/*	TOGGLE
/*-----------------------------------------------------------------------------------*/
$(document).ready(function(){
//Hide the tooglebox when page load
$(".togglebox").hide();
//slide up and down when click over heading 2
$("h4").click(function(){
// slide toggle effect set to slow you can set it to fast too.
$(this).toggleClass("active").next(".togglebox").slideToggle("slow");
return true;
});
});

/*-----------------------------------------------------------------------------------*/
/*	TABS
/*-----------------------------------------------------------------------------------*/
$(document).ready(function() {
	//Default Action
	$(".tab_content").hide(); //Hide all content
	$("ul.tabs li:first").addClass("active").show(); //Activate first tab
	$(".tab_content:first").show(); //Show first tab content
	
	//On Click Event
	$("ul.tabs li").click(function() {
		$("ul.tabs li").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$(".tab_content").hide(); //Hide all tab content
		var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
		$(activeTab).fadeIn(); //Fade in the active content
		return false;
	});

});


/*-----------------------------------------------------------------------------------*/
/*	MENU
/*-----------------------------------------------------------------------------------*/
ddsmoothmenu.init({
	mainmenuid: "menu",
	orientation: 'h',
	classname: 'menu',
	contentsource: "markup"
})

/*-----------------------------------------------------------------------------------*/
/*	FANCYZOOM
/*-----------------------------------------------------------------------------------*/
 $(document).ready(function() {
//FANCYZOOM Setup
//Set the default directory to find the images needed
//by the plugin (closebtn.png, blank.gif, loading images ....)
$.fn.fancyzoom.defaultsOptions.imgDir='style/js/fancyzoom/';
$.fn.fancyzoom.defaultsOptions.showoverlay=false;
$.fn.fancyzoom.defaultsOptions.imagezindex=100000;

// Select all links in object with gallery ID using the defaults options
$('.gallery-items .item a').fancyzoom(); 
 });
 
 /*-----------------------------------------------------------------------------------*/
/*	GOOGLE ANALYTICS
/*-----------------------------------------------------------------------------------*/

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-39383511-4']);
  _gaq.push(['_gat._anonymizeIp']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
  
   /*-----------------------------------------------------------------------------------*/
/*	iOS INFOBOX
/*-----------------------------------------------------------------------------------*/

$('#iOSclose').click(function(){
	$('#iOS').fadeOut("slow", function(){$('#grau').fadeOut("slow");});
});
var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
if(iOS) {
	$('#iOS').css("display", "block").css("opacity", "1"); 
	$('#grau').css("display", "block").css("opacity", "1");
}

 /*-----------------------------------------------------------------------------------*/
/*	Windows Phone INFOBOX
/*-----------------------------------------------------------------------------------*/

$('#WPclose').click(function(){
	$('#WP').fadeOut("slow", function(){$('#grau').fadeOut("slow");});
});
var WP = ( navigator.userAgent.match(/(Windows Phone)/g) ? true : false );
if(WP) {
	$('#WP').css("display", "block").css("opacity", "1"); 
	$('#grau').css("display", "block").css("opacity", "1");
}