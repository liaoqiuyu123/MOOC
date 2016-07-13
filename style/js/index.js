
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

    $(function (){
        var newclass1 = new Slider($('#newclass1'),{
            time: 5000,
            delay: 400,
            event: 'hover',
            auto: true,
            mode: 'fade',
            controller: $(''),
            activeControllerCls: 'active'
        });
        $('#newclass1 .left').click(function() {
            newclass1.prev()
        });
        $('#newclass1 .right').click(function() {
            newclass1.next()
        });
    });
};

