$(document).ready(function(){
  $("#rose").on("click",function(){
    $(this).hide('slow')
  })

  $("#btn_show").on("click",function(){
    $("#rose").show('fast')
  })

  $("#rose").on("mouseenter",function(){
    $(this).hide(3000)
  })

  $("#btn_fadeIn").on("click", function(){
    $(".a").fadeIn(3000)
    $(".b").fadeIn(3000)
    $(".c").fadeIn(3000,function(){
      alert("다 나옴")
    })
  })

  $("#btn_fadeOut").on("click", function(){
    $(".a").fadeOut('slow')
    $(".b").fadeOut('slow')
    $(".c").fadeOut('slow')
  })

  $("#btn_fadeToggle").on("click", function(){
    $(".a").fadeToggle();
  })

  $("#btn_fadeTo").on("click", function(){
    $(".a").fadeTo(3000,0);
  })
})