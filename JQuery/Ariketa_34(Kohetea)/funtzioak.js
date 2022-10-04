$(document).ready(function () {
  $(document).on("keydown", function (e) {
    switch (e.key) {
      case "ArrowLeft":
        if(e.ctrlKey){
            $("img").finish().animate({left: "-=35px", top: "-=35"}, 1000);
            $("img").css({transform: 'rotate('+315+'deg)'})
        }else if(e.shiftKey){
            $("img").finish().animate({left: "-=35",top: "+=35" }, 1000);
            $("img").css({transform: 'rotate('+225+'deg)'})
        }else{
            $("img").finish().animate({left: "-=50px" }, 1000);
            $("img").css({transform: 'rotate('+270+'deg)'})
        }
        break;
      case "ArrowRight":
        if(e.ctrlKey){
            $("img").finish().animate({left: "+=35px", top: "-=35"}, 1000);
            $("img").css({transform: 'rotate('+45+'deg)'})
        }else if(e.shiftKey){
            $("img").finish().animate({left: "+=35",top: "+=35" }, 1000);
            $("img").css({transform: 'rotate('+135+'deg)'})
        }else{
            $("img").finish().animate({left:"+=50px"}, 1000)
            $("img").css({transform: 'rotate('+90+'deg)'})
        }
        break;
      case "ArrowUp":
        $("img").finish().animate({top:"-=50px"}, 1000)
        $("img").css({transform: 'rotate('+0+'deg)'})
        break;
      case "ArrowDown":
        $("img").finish().animate({top:"+=50px"}, 1000)
        $("img").css({transform: 'rotate('+180+'deg)'})
        break;
    }
  });
});
