let mobile = document.querySelector(".menu-toggle");
let link = document.querySelector(".sidebar");
mobile.addEventListener("click", () => {
    mobile.classList.toggle("is-active");
    link.classList.toggle("active");
})
link.addEventListener("click", () => {
    let menuBar = document.querySelector(".is-active");
    if (window.innerWidth<=768 && menuBar) {
        mobile.classList.toggle("is-active");
        link.classList.toggle("active");

    }

})
let step=100;
let stepFilter=60;
let scrolling = true;
$(".back").bind("click",(e)=>{
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft:"-="+ step +"px"
    });
});
$(".next").bind("click",(e)=>{
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft:"+="+step+"px"
    });
});

$(".back-b").bind("click",(e)=>{
    e.preventDefault();
    $(".filter-wrapper").animate({
        scrollLeft:"-="+step+"px"
    });
});
$(".next-n").bind("click",(e)=>{
    e.preventDefault();
    $(".filter-wrapper").animate({
        scrollLeft:"+="+step+"px"
    });
});