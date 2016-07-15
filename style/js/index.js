
window.onload=function () {
	
$(function() {
	var bannerSlider = new Slider($('#banner'), {
		time: 5000,
		delay: 400,
		event: 'hover',
		auto: true,
		mode: 'fade',
		controller: $('#bannerCtrl'),
		activeControllerCls: 'active'
	});
	$('#banner .flex-prev').click(function() {
		bannerSlider.prev()
	});
	$('#banner .flex-next').click(function() {
		bannerSlider.next()
	});
});
      
        
    function box(id){
        var newclass1 = new Slider($(id),{
            time: 5000,
            delay: 400,
            event: 'hover',
            auto: true,
            mode: 'fade',
            controller: $(''),
            activeControllerCls: 'active'
        });
        $(id).find(".left").click(function() {
            newclass1.prev()
        });
        $(id).find('.right').click(function() {
            newclass1.next()
        });
      
    };
    var id1="#newclass1";box(id1);
    var id2="#newclass2";box(id2);
    var id3="#newclass3";box(id3);
    var id4="#newclass4";box(id4);
    


};

