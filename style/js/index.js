
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
    
/*

if(document.picc){
    document.onselectstart= function(){return false;}; //for ie
}else{
    document.onmousedown= function(){return false;};
    document.onmouseup= function(){return true;};
}
document.onselectstart = new Function('event.returnValue=false;');
*/
    var picc=document.getElementById("picc");
picc.onselectstart = picc.ondrag = function(){
    return false;
}
};

