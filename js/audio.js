$(document).ready(function(){
    /*웹페이지 열었을 때*/
    $("#pause").show();
    $("#pause_btn").hide();

    /*img1을 클릭했을 때 img2를 보여줌*/
    $("#pause").click(function(){
        $("#pause").hide();
        $("#pause_btn").show();
    });

    /*img2를 클릭했을 때 img1을 보여줌*/
    $("#pause_btn").click(function(){
        $("#pause").show();
        $("#pause_btn").hide();
    });
});
$(document).ready(function(){
    /*웹페이지 열었을 때*/
    $("#heart").show();
    $("#heart_btn").hide();
  
    /*img1을 클릭했을 때 img2를 보여줌*/
    $("#heart").click(function(){
        $("#heart").hide();
        $("#heart_btn").show();
    });
  
    /*img2를 클릭했을 때 img1을 보여줌*/
    $("#heart_btn").click(function(){
        $("#heart").show();
        $("#heart_btn").hide();
    });
  });