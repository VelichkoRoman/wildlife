let offset=0; //смещение от левого края
const sliderLine=document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click',function(){
    offset=offset+274; 
    if (offset>822){
        offset=0;
    }
    sliderLine.style.left=-offset+'px';
});

document.querySelector('.slider-prev').addEventListener('click',function(){
    offset=offset-274; 
    if (offset<0){
        offset=822;
    }
    sliderLine.style.left=-offset+'px';
});