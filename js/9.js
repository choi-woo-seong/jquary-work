$(document).ready(function(){
  $("#btn_append").on("click",function(){
    // $("p").append(" HI~~~~")
    // $("p").prepend(" HI~~~~")
    $("p").prepend("방가~~").append(" Bye~~!")
  })

  $("#btn_item_prepend").on("click",function(){
    $("#list").prepend(function(index,origin){
      $('#list').html("<li>영번째 아이템</li>" + origin)
    })
  })

  $("#btn_item_append").on("click",function(){
    $("#list").append(function(index,origin){
      $('#list').html(origin + "<li>네번째 아이템</li>")
    })
  })

  $("#img_add").on("click",function(){
    let left = $("<img></img>").attr("src","./image/left.jpg").css("width","40px")
    let right = $("<img></img>").attr("src","./image/right.jpg").css("width","40px")

    // 형제를 추가할때 .before,.after 사용
    $("img").before(left).after(right)
  })

  $("#remove").on("click",function(){
    $(".del").remove()
  })

  $("#empty").on("click",function(){
    $(".del").empty()
  })
})