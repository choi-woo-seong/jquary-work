$(document).ready(function(){
  $("body").dblclick(function(){
    alert("Double Click")
  })
  $("#btn_1").click(function(){
    $("p").hide()
  })

  $("p").mouseenter(function(){
    $(this).css("background-color", "gold")
  })

  $("p").mouseleave(function(){
    $(this).css("background-color", "white")
  })

  $("p").mousedown(function(){
    $(this).css("background-color", "pink")
  })

  $("p").mouseup(function(){
    $(this).css("background-color", "gray")
  })
})