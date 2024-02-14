
//轮播图
var items=document.getElementsByClassName('ban');
console.log(items.length);
var points=document.getElementsByClassName('point');
console.log(points.length);
var page=0;
var auto=null;
function clearShow(){
    for(i=0;i<items.length;i++){
        items[i].className="ban";
    }
    for(i=0;i<points.length;i++){
        points[i].className="point";
    }
}
function goPage(){
    clearShow();
    items[page].className="ban show";
    points[page].className="point show";
}
function goNext(){
    if(page<4){
        page++;
    }
    else{
        page=0;
    }
    goPage()
}
function goBack(){
    if(page==0){
        page=4;
    }
    else{
        page--;
    }
    goPage();
}
function getPoint(point){
    var pointindex=point.getAttribute("data-index");
    page=pointindex;
    goPage();
}
function start(){
    auto=setInterval("goNext()",5000);
    document.getElementById("back").style.display="none";
    document.getElementById("next").style.display="none";
}
function stop(){
    clearInterval(auto);
    document.getElementById("back").style.display="block";
    document.getElementById("next").style.display="block";
}
// 电影轮播
var hotmovies = document.getElementsByClassName("hot");
var movienum = hotmovies.length-1;

var num=0;
function clearHide(){
    for(i=0;i<hotmovies.length;i++){
    hotmovies[i].className="hot";
    }
}
function switchMovie(){
    clearHide();
    hotmovies[num].className="hot hide";

}
function goPre(){
    if(num == 0){
        num = movienum;
    }else{
        num--;
    }
    switchMovie();
}
function goAft(){
    if(num<moviesnum){
        num++;
    }else{
        num  = 0;
    }
    switchMovie();
}
// 切换
function hotShow(){
    document.querySelector('.hotmovie').style.display="block";
    document.querySelector('.upcoming-movie').style.display="none";

}
function willShow(){
    document.querySelector('hotmovie').style.display="none";
    document.querySelector('upcoming-movie').style.display = "block";
}