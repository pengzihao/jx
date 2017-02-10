/**
 * Created by PENG on 2016/11/27.
 */


window.onload= function () {
    //搜索框背景透明度调用函数
      search()

    //banner轮播图调用函数
      banner()

    //倒计时
    downtime()
}

     //header部分
   function search(){

       var searchBox=document.querySelector(".jd_header_box");
       var bannerBox=document.querySelector(".jd_banner");

       var height=bannerBox.offsetHeight;

       window.onscroll= function () {
           var top=document.body.scrollTop;  /*谷歌兼容*/
           //var top=document.documentElement.scrollTop  IE兼容
           var opacity=0;
           if(top<height){
                 //改变透明度
               opacity=top/height*0.85;
           }else {
               opacity=0.85;
           }
           searchBox.style.background= "rgba(201, 21, 35,"+opacity+")";
       }
}


  //banner轮播图
 function banner(){

        //获取轮播图盒子
      var banner=document.querySelector(".jd_banner");
         //盒子宽度
      var width=banner.offsetWidth;
          //图片盒子
      var imgBox=banner.querySelector("ul:first-child");
          //小圆点盒子
      var pointBox=banner.querySelector("ul:last-child");
          //所有小圆点
      var points=pointBox.querySelectorAll("li");

          var index=1;
        //1自动轮播
         timer=setInterval(function () {
               index++
             var  translateX= - index*width;
                     //兼容写法
             imgBox.style.transition="all 0.3s";
             imgBox.style.webkitTransition="all 0.3s";

                       //兼容写法
             imgBox.style.transform= "translateX("+translateX+"px)";
             imgBox.style.webkitTransform= "translateX("+translateX+"px)";

         },1000)


        //无缝滚动
        // 添加手指触摸事件
        // transitionEnd 监听过渡完成事件
      imgBox.addEventListener("webkitTransitionEnd",function () {

            if(index>=9){
                index=1;
                var translateX= -index*width;

                imgBox.style.transition= "none";
                imgBox.style.webkitTransition= "none";

                //兼容写法
                imgBox.style.transform= "translateX("+translateX+"px)";
                imgBox.style.webkitTransform= "translateX("+translateX+"px)";


            }else if(index<=0){
                  //无缝滑动
                index=8;

                var translateX= -index*width;

                imgBox.style.transition="none";
                imgBox.style.webkitTransition="none";

                imgBox.style.transform="translateX("+translateX+"px)";
                imgBox.style.wenkitTransform="translateX("+translateX+"px)";
            }
          /*当前index的范围  0——8  9——1  ？ 1-8 */
              setPoint();
      })
             //图片滚动下面的小圆点跟着联动
       var setPoint=function(){

            for(var i=0; i<points.length;i++){
                points[i].className="";
            }
           points[index-1].className="now";
       }


        //轮播图滑动
      var startX=0;
      var moveX=0;
      var distanceX=0;
      var isMove=false;

      imgBox.addEventListener("touchstart", function (e) {
          clearInterval(timer);
          startX= e.touches[0].clientX;
      });

     imgBox.addEventListener("touchmove", function (e) {
          moveX=e.touches[0].clientX;

           distanceX= moveX-startX;

           var translateX= -index*width+distanceX

           imgBox.style.transition="none";
           imgBox.style.webkitTransition="none";

           imgBox.style.transform= "translateX("+translateX+"px)";
           imgBox.style.webkiTtransform= "translateX("+translateX+"px)";

           isMove=true;
     });

     imgBox.addEventListener("touchend", function (e) {

           if(isMove){
               if(Math.abs(distanceX)<width/3){
                  var translateX=-index*width;

                   imgBox.style.transition="all 0.3s";
                   imgBox.style.webkitTransition="all 0.3s";

                   imgBox.style.transform= "translateX("+translateX+"px)";
                   imgBox.style.webkiTtransform= "translateX("+translateX+"px)";

               } else {
                   if(distanceX>0){
                       index--;
                   }else{
                       index++;
                   }

                   var translateX=-index*width;

                   imgBox.style.transition="all 0.3s";
                   imgBox.style.webkitTransition="all 0.3s";

                   imgBox.style.transform= "translateX("+translateX+"px)";
                   imgBox.style.webkiTtransform= "translateX("+translateX+"px)";

               }
           }

              //加定时器
             //先清除定时器
         clearInterval(timer);
         timer=setInterval(function () {
             index++
             var  translateX= - index*width;
             //兼容写法
             imgBox.style.transition="all 0.3s";
             imgBox.style.webkitTransition="all 0.3s";

             //兼容写法
             imgBox.style.transform= "translateX("+translateX+"px)";
             imgBox.style.webkitTransform= "translateX("+translateX+"px)";

         },1000)

         //重置参数
         startX=0;
         moveX=0;
         distanceX=0;
         isMove=false;
     });

}



//倒计时

function downtime(){

    var sktime=document.querySelector(".sk_time");
    var spans=sktime.querySelectorAll("span");

    var time=4*60*60;

    var timer=setInterval(function(){

        time--;

        var h=Math.floor(time/3600);
        var m=Math.floor(time%3600/60);
        var s=time%60;

        spans[0].innerHTML=Math.floor(h/10);
        spans[1].innerHTML=h%10;

        spans[3].innerHTML=Math.floor(m/10);
        spans[4].innerHTML=m%10;

        spans[6].innerHTML=Math.floor(s/10);
        spans[7].innerHTML=s%10;

        if(timer<0){
            clearInterval(timer);
        }
    },1000)

}