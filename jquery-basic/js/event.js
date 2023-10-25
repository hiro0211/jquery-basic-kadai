$(function(){
  $(document).on('dblclick keydown resize', (e) => {

    if(e.type === "dblclick"){
      $("div").text("されました！");
    }
    if(e.type === "keydown"){
      $("div").text("キーが押されました！")
    }
    if(e.type === "resize"){
      $("div").text("ウィンドウサイズが変更されました。")
    }
  });
});