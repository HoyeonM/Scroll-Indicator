
window.onscroll = function () {

    // position of the scroll
    var scrollTop = document.documentElement.scrollTop; //position of the scroll vertically!!
    // height of the whole content
    var scrollHeight = document.documentElement.scrollHeight; //scrollheight returns the entire height of an element

    // height of the browser that we are seeing right now
    var clientHeight = document.documentElement.clientHeight;//returns the viewable height

    // contentHeight : height of the rest of the browser
    var contentHeight =  scrollHeight - clientHeight;
    var scrollBar = (scrollTop / contentHeight) * 100;

    document.getElementById('scroll-bar').style.width = scrollBar + '%'; //This actually fills up the bar

};