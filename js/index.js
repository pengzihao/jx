/**
 * Created by PENG on 2016/11/27.
 */


window.onload= function () {
    //�����򱳾�͸���ȵ��ú���
      search()

    //banner�ֲ�ͼ���ú���
      banner()

    //����ʱ
    downtime()
}

     //header����
   function search(){

       var searchBox=document.querySelector(".jd_header_box");
       var bannerBox=document.querySelector(".jd_banner");

       var height=bannerBox.offsetHeight;

       window.onscroll= function () {
           var top=document.body.scrollTop;  /*�ȸ����*/
           //var top=document.documentElement.scrollTop  IE����
           var opacity=0;
           if(top<height){
                 //�ı�͸����
               opacity=top/height*0.85;
           }else {
               opacity=0.85;
           }
           searchBox.style.background= "rgba(201, 21, 35,"+opacity+")";
       }
}


  //banner�ֲ�ͼ
 function banner(){

        //��ȡ�ֲ�ͼ����
      var banner=document.querySelector(".jd_banner");
         //���ӿ��
      var width=banner.offsetWidth;
          //ͼƬ����
      var imgBox=banner.querySelector("ul:first-child");
          //СԲ�����
      var pointBox=banner.querySelector("ul:last-child");
          //����СԲ��
      var points=pointBox.querySelectorAll("li");

          var index=1;
        //1�Զ��ֲ�
         timer=setInterval(function () {
               index++
             var  translateX= - index*width;
                     //����д��
             imgBox.style.transition="all 0.3s";
             imgBox.style.webkitTransition="all 0.3s";

                       //����д��
             imgBox.style.transform= "translateX("+translateX+"px)";
             imgBox.style.webkitTransform= "translateX("+translateX+"px)";

         },1000)


        //�޷����
        // �����ָ�����¼�
        // transitionEnd ������������¼�
      imgBox.addEventListener("webkitTransitionEnd",function () {

            if(index>=9){
                index=1;
                var translateX= -index*width;

                imgBox.style.transition= "none";
                imgBox.style.webkitTransition= "none";

                //����д��
                imgBox.style.transform= "translateX("+translateX+"px)";
                imgBox.style.webkitTransform= "translateX("+translateX+"px)";


            }else if(index<=0){
                  //�޷컬��
                index=8;

                var translateX= -index*width;

                imgBox.style.transition="none";
                imgBox.style.webkitTransition="none";

                imgBox.style.transform="translateX("+translateX+"px)";
                imgBox.style.wenkitTransform="translateX("+translateX+"px)";
            }
          /*��ǰindex�ķ�Χ  0����8  9����1  �� 1-8 */
              setPoint();
      })
             //ͼƬ���������СԲ���������
       var setPoint=function(){

            for(var i=0; i<points.length;i++){
                points[i].className="";
            }
           points[index-1].className="now";
       }


        //�ֲ�ͼ����
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

              //�Ӷ�ʱ��
             //�������ʱ��
         clearInterval(timer);
         timer=setInterval(function () {
             index++
             var  translateX= - index*width;
             //����д��
             imgBox.style.transition="all 0.3s";
             imgBox.style.webkitTransition="all 0.3s";

             //����д��
             imgBox.style.transform= "translateX("+translateX+"px)";
             imgBox.style.webkitTransform= "translateX("+translateX+"px)";

         },1000)

         //���ò���
         startX=0;
         moveX=0;
         distanceX=0;
         isMove=false;
     });

}



//����ʱ

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