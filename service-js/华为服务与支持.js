/**
 * Created by ASUS on 2016/8/7.
 */
$(function() {
    var nav = document.getElementById("nav");
    var navH=nav.scrollHeight
    var top=document.getElementsByClassName("rtop")[0];
    window.onscroll=function(){
        if(scroll().top>=navH){
            nav.className="nav fixed"
        }else{
            nav.className="nav";
        }
        if(scroll().top>=500){
            top.style.display="block";
        }else{
            top.style.display="none";
        }
        leader=scroll().top;
    }

    timer=null,target=0,leader=0;
    top.onclick=function(){
        clearInterval(timer);
        timer=setInterval(function(){
            var step = (target-leader)/10;
            step = step>0?Math.ceil(step):Math.floor(step);
            leader = leader + step;
            window.scrollTo(0,leader);
            if(leader  === 0){
                clearInterval(timer)
            }

        },30)

    }
    function scroll(){
        return {
            "top": window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
            "left": document.documentElement.scrollLeft + document.body.scrollLeft
        };
    }

    var focusbuttom = document.getElementsByClassName("focus-buttom")[0];
    var ul1 = focusbuttom.children[0];
    var focustop = document.getElementsByClassName("focus-top")[0];
    var ul2 = focustop.children[1];
    var liArr = ul2.children;
    var li = ul1.children[0];
    var img = li.offsetWidth;
    for (var i = 0; i < liArr.length; i++) {
        liArr[i].index = i;
        liArr[i].onmouseover = function () {
            animate(-img * this.index, ul1)
        }
    }
    var newli=li.cloneNode(true);
    ul1.appendChild(newli);
    var timer=setInterval(autoplay,3000);
    var key=0;
    function autoplay(){
        key++
        if(key>5){
        ul1.style.left=0;
            key=0;
        }
        animate(-img*key,ul1)
    }

    function animate(target, obj) {
        clearInterval(obj.timer);
        var speed = target - obj.offsetLeft > 0 ? 10 : -10;
        obj.timer = setInterval(function () {
            obj.style.left = obj.offsetLeft + speed + "px";
            if (Math.abs(target - obj.offsetLeft) <= Math.abs(speed)) {
                obj.style.left = target + "px";
                clearInterval(obj.timer);
            }
        }, 10);


    }

    $(".choose li").eq(0).mouseenter(function(){
        $(".choose li").eq(0).fadeOut(1000)
    })
    $(".choose li").eq(0).mouseenter(function(){
        $(".choose li").eq(0).fadeIn(1000)
    })
    $(".choose li").eq(1).mouseenter(function(){
        $(".choose li").eq(1).fadeOut(1000)
    })
    $(".choose li").eq(1).mouseenter(function(){
        $(".choose li").eq(1).fadeIn(1000)
    })
    $(".choose li").eq(2).mouseenter(function(){
        $(".choose li").eq(2).fadeOut(1000)
    })
    $(".choose li").eq(2).mouseenter(function(){
        $(".choose li").eq(2).fadeIn(1000)
    })
    $(".choose li").eq(3).mouseenter(function(){
        $(".choose li").eq(3).fadeOut(1000)
    })
    $(".choose li").eq(3).mouseenter(function(){
        $(".choose li").eq(3).fadeIn(1000)
    })
    $(".choose li").eq(4).mouseenter(function(){
        $(".choose li").eq(4).fadeOut(1000)
    })
    $(".choose li").eq(4).mouseenter(function(){
        $(".choose li").eq(4).fadeIn(1000)
    })
})
