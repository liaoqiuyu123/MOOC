
window.onload=function () {
    var banner_index=1;
    var timer=setInterval(banner_fn,1000);

    $('#Banner img').css('display','none');
    $('#Banner img').eq(0).css('display','block');
    $('#Banner ul li').eq(0).css('color','#333');

    $('#Banner ul li').hover(function () {
        clearInterval(timer);
      banner(this);
    },function () {
          banner_index = $(this).index() + 1;
        timer=setInterval(banner_fn,1000);
    });
    function banner(obj) {
        $('#Banner img').css('display','none');
        $('#Banner img').eq($(obj).index()).css('display','block');
        $('#Banner ul li').css('color','#999');
        $(obj).css('color','#333');
    }

    /* alert($('#Banner'))*/

    function banner_fn() {
        if(banner_index >= $('#Banner ul li').length)banner_index=0;
        banner($('#Banner ul li').eq(banner_index).first());
        banner_index++;
    }
/*    $('#Bleft').click(function () {
      /!*  if(banner_index >= $('#Banner ul li').length)banner_index=0;
        $('#banner img').eq(banner_index).css('display','block')
        banner_index++;*!/
        alert(222)
    })

    $('#Bright').click(function () {
        for(var i=0;i<$('#banner ul li').length;i++){
            $('#banner img').eq(this).css('display','block')}
    })*/
    var Bright=document.getElementById('Bright');
    var Bleft=document.getElementById('Bleft');
    var j=1;
        Bright.onclick=function box() {
            clearInterval(timer);
            if(j>=$('#Banner ul li').length)j=0;
         aaa();
            j++;
            timer=setInterval(banner_fn,1000);
        }
    Bleft.onclick=function box() {
        clearInterval(timer);
        if(j<0)j=2;
         aaa();
          j--;
        timer=setInterval(banner_fn,1000);
    }
   function aaa() {
       $('#Banner img').css('display','none');
       $('#Banner img').eq(j).css('display','block');
       $('#Banner ul li').css('color','#999');
       $('#Banner ul li').eq(j).css('color','#333');
   }
}
