// Sociables Hover Animation
	function atp_sociables() {
		jQuery(".atpsocials ul li").hover(function(){
			jQuery(this).find("img").animate({top:"-5px"}, "fast")
			},function(){
			jQuery(this).find("img").animate({top:"0"}, "fast")
		});
	}

	//Custom Toggle
	function sys_toggle() {
		jQuery(".toggle_content").append("<div class='arrow'></div>").hide();

		jQuery("span.toggle").toggle(function(){
			jQuery(this).addClass("active");
			}, function () {
			jQuery(this).removeClass("active");
		});

		jQuery("span.toggle").click(function(){
			jQuery(this).next(".toggle_content").slideToggle();
		});
	}


	// Image Hover and Hovertype Icons
	function hoverimage() {

			jQuery('.hover_type').animate({opacity: 0});

			jQuery(".port_img, .sort_img").hover(function() {
				jQuery(this).find('.hover_type').css({display:'block'}).animate({
					opacity: 1, 
					bottom: (jQuery('.port_img, .sort_img').height())/2 - 20+'px'}, 300, 'easeInSine');
				jQuery(this).find('img').animate({"opacity": "0.7"}, 200);
				
			},function() {
				jQuery(this).find('.hover_type').animate({
					opacity: 0,
					bottom: '100%'}, 300, 'easeInSine', function() {
					jQuery(this).css({'bottom':'0'});
					});
				jQuery(this).find('img').animate({"opacity": "1"}, 200);
			}
		);
	}
/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
Custom jQuery
-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
*/

jQuery(document).ready(function(){

	jQuery('ul.sf-menu').superfish();

	//Lightbox jQuery
	jQuery('.lightbox').lightbox();

	//To switch directions up/down and left/right just place a "-" in front of the top/left attribute
	//Vertical Sliding
	jQuery('.plan_box').hover(function(){
		jQuery(".plan_info", this).stop().animate({top:'-400px'},{queue:false,duration:300});
		}, function() {
		jQuery(".plan_info", this).stop().animate({top:'0px'},{queue:false,duration:300});
	});
	
	atp_sociables();
	hoverimage();
	sys_toggle();
	jQuery('.sf-menu').mobileMenu();
	
	jQuery("ul.tabs").tabs(".panes > .tab_content", {tabs:'li',effect: 'fade', fadeOutSpeed: -400});
	jQuery(".minithumb, .gallery, .gallery-item, .port_img, .postimg, .imgborder, .sort_img, .image, .lightbox,").preloadify({force_icon:"true", mode:"sequence" });

});