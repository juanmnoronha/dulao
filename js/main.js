(function(){

	function init(){

		parallax();
		fixedNav();

	}

	function fixedNav() {
		$('a[href^="#"]').on('click', function (e) {
			e.preventDefault();

			var target = this.hash,
				$target = $(target);

			$('html, body').stop().animate({
				'scrollTop': $target.offset().top - 60
			}, 900, 'swing', function () {
				window.location.hash = target;
			});
		});
	}

	function parallax() {
		$('section[data-type="background"]').each(function(){
	        var $bgobj = $(this); // assigning the object
	    
	        $(window).scroll(function() {
	            var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
	            
	            // Put together our final background position
	            var coords = '50% '+ yPos + 'px';

	            // Move the background
	            $bgobj.css({ backgroundPosition: coords });
	        }); 
	    });  

        document.createElement("section");
	}

	init();

}());