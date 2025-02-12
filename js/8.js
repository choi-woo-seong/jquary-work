$(document).ready(function(){
  $("#btn_get").on("click",function(){
    alert($("#message").text())
    alert($("#message").html())
  })

  $("#getName").on("click",function(){
    alert($("#name").val());
  })

  $("#arrt-url").on("click",function(){
    let url = $("#addr").attr("href")
    $("#getDaumUrl").val(url)
  })

  $("#btn_set").on("click",function(){
    $("#name2")
      .text("장원영")
      .css("color","blue")
  })

  $("#btn_set2").on("click",function(){
    $("#name2")
      // .html("<b style='color : red'>장원영</b>")
      .html("<b>장원영</b>")
      .css("color" , "blue")
  })

  $("#btn_ive").on("click", function(){
    $("#ive").text(function(index,origin){
      let str = "안녕하세요." + origin + "입니다." + index
      return  str
    })
  })

  $("#btn_girl_group").on("click", function(){
    $(".girl-group").text(function(index,origin){
      let str = "안녕하세요."+ (index + 1) + "번" + origin + "입니다."
      return  str
    })
  })

  $("#btn_change").on("click", function(){
    if($("#site").text() == "구글"){
      $("#site").text(function(index,origin){
        let str = "네이버"
        return  str
      })
      $("#btn_change").text(function(index,origin){
        let str = "구글로 바꾸기"
        return  str
      })
      $("#site").attr("href","http://www.naver.com")
    }else{
      $("#site").text(function(index,origin){
        let str = "구글"
        return  str
      })
      $("#btn_change").text(function(index,origin){
        let str = "네이버로 바꾸기"
        return  str
      })
      $("#site").attr("href","http://www.google.com")
    }
  })
})