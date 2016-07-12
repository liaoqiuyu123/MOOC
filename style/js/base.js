/**
 * Created by Administrator on 2016/7/12.
 */

//这是一个简单的封装库

//获取DOM节点方法
//函数式
/*function $(id){
 return document.getElementById(id);
 }

 //对象式

 var Base={
 $id:function(id){
 return document.getElementById(id)
 },
 $name:function(name){
 return document.getElementsByName(name)
 },
 $tag:function(tag){
 return document.getElementsByTagName(tag)
 },
 return
 }
 //上面这个函数方法获取到的对象为HTML，不利于方法添加，我们最好要获取到Bash对象
 //可以写一个构造函数
 */
var $ = function(){       //每次调用创建一个新的实例
    return new Base();
}
function Base(){
    //创建一个数组来保存获取到的节点
    this.elements=[];
    this.$id=function(id){              //获取DOM节点ID
        this.elements.push(document.getElementById(id));
        return this
    }
    this.$tag=function(tag){           //获取DOM节点tagName
        var tags=document.getElementsByTagName(tag)
        for(var i=0;i<tags.length;i++){
            this.elements.push(tags[i]);
        }
        return this
    }

}
//改变指定的DOM文本
/*Base.prototype.getinnerHTML=function(){
 for(i=0;i<this.elements.length;i++){


 }

 return this
 }*/
//获取DOM节点文本或者改变节点文本
Base.prototype.setinnerHTML=function(str){

    for(i=0;i<this.elements.length;i++){
        if(str='innerHTML'){
            return this.elements[i].innerHTML
        }else{
            this.elements[i].innerHTML=str;
        }}

    return this
}

//设置css样式，如字体。背景色及获取css样式
Base.prototype.setcss=function(attr,value){
    for(i=0;i<this.elements.length;i++){
        if(arguments.length==1){
            if(typeof window.getComputedStyle!='undefined'){ //w3c获取
                return window.getComputedStyle(this.elements[i],null)[attr];}
            else if(typeof this.elements[i].ieStyle!='undefined'){//Ie获取
                return this.elements[i].ieStyle[attr];
            }
        }
        this.elements[i].style[attr]=value;
    }
    return this

}
//鼠标事件绑定
Base.prototype.mourse=function(fn,value){
    var p=value;
    for(i=0;i<this.elements.length;i++){
        switch(p){
            case 1:
                this.elements[i].onclick=fn; //点击事件
                break;
            case 2:
                this.elements[i].onmouseover=fn;  //移入事件
                break;
            case 3:
                this.elements[i].onmouseout=fn;  //移出事件
                break;
        }

    }
    return this

}

//获取页面全部classname
Base.prototype.getclass=function(className,idName){
    var node=null;
    if(arguments.length==2){
        node=document.getElementById(idName);
    }else{
        node=document;
    }
    var allclass=node.getElementsByTagName('*');
    for(var i=0;i<allclass.length;i++){
        if(allclass[i].className==className){  //检索classname相同的节点
            this.elements.push(allclass[i]);         //节点相同放入this.elements[];
        }
    }
    return this
}

//相同classname节点来设置不同样式
Base.prototype.getelement=function(num){
    var element=this.elements[num];//将获取到classname节点暂存到element;
    this.elements=[];//清空this.elements[]数组
    this.elements[0]=element;
    return this;
}
//添加class
Base.prototype.addClass=function(className){
    for(var i=0;i<this.elements.length;i++){
        if(!this.elements[i].className.match(new RegExp('(\\s|^)'+className+'(\\s|$)'))){//正则表达式，如果数组this.elements中含义已添加的className，则不在添加重复的className;
            this.elements[i].className +=' '+className;
        }
    }

    return this;
}
//删除class
Base.prototype.moveClass=function(className){
    for(var i=0;i<this.elements.length;i++){
        if(this.elements[i].className.match(new RegExp('(\\s|^)'+className+'(\\s|$)'))){
            this.elements[i].className=this.elements[i].className .replace(new RegExp('(\\s|^)'+className+'(\\s|$)'), '');
        }//找到需要删除的className用正则替换掉，替换成空格。并将替换掉后的赋给className;
    }

    return this;
}

