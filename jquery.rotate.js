jQuery.fn.rotate = function(degree)
{
	return this.each(function(){
		$(this).css({
	 		"-ms-transform": "rotate(" + degree +  "deg)", /* IE 9 */
        	"-webkit-transform": "rotate(" + degree +  "deg)",/* Chrome, Safari, Opera */
        	"transform": "rotate(" + degree +  "deg)"
		});
	});
};
