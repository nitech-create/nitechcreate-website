$(function(){
    var state=false;
    $("#btn_menu").on("click",function(){
        
        $("#navbar").toggleClass("open")
        if(state){

            $(".button_large").css("transform", "scale(1, 1)")
        }else{
            
        $(".button_large").css("transform", "scale(-1, 1)")
        }
        state= !state
    })
})