$(function () {
    $('.contents-box').each(function (index, element) {
        $(element).draggable({
            handle: ".data",
            containment: "html",
            stack: '.contents-box',
            start: function () {
                var top = 0;
                var topcontent
                $('.contents-box').each(function () {
                    var thisz = parseInt($(this).css('zIndex'), 10)

                    if (thisz > top) {
                        top = thisz
                        if (topcontent === undefined) {

                        } else {
                            topcontent.css("border-color", "#994141")
                            topcontent.children(".data").css("background-color", "#994141")
                        }
                        topcontent = $(this)
                    } else {
                        $(this).css("border-color", "#994141")
                        $(this).children(".data").css("background-color", "#994141")
                    }
                })
                $(this).css("zIndex", top + 1)
                topcontent.css("border-color", "#990000")
                topcontent.children(".data").css("background-color", "#990000")

            }
        });


        $(element).click(function () {
            var top = 0;
            $('.contents-box').each(function () {
                var thisz = parseInt($(this).css('zIndex'), 10)
                if (thisz > top) {
                    top = thisz
                }
                $(this).css("border-color", "#994141")
                $(this).children(".data").css("background-color", "#994141")
            })
            $(this).css("zIndex", top + 1)
            $(this).css("border-color", "#990000")
            $(this).children(".data").css("background-color", "#990000")


        })
    })


    $("#taskbar li").click(function () {
        if ($($(this).attr("data-target")).css("visibility") == "visible") {
            $($(this).attr("data-target")).css("visibility", "hidden")
        } else {
            $($(this).attr("data-target")).css("visibility", "visible")
            var top = 0;
            var topcontent
            $('.contents-box').each(function () {
                var thisz = parseInt($(this).css('zIndex'), 10)

                if (thisz > top) {
                    top = thisz
                    if (topcontent === undefined) {
                    } else {
                        topcontent.css("border-color", "#994141")
                        topcontent.children(".data").css("background-color", "#994141")
                    }
                    topcontent = $(this)
                }

                $(this).css("border-color", "#994141")
                $(this).children(".data").css("background-color", "#994141")
            })
            $($(this).attr("data-target")).css("zIndex", top + 1)
            $($(this).attr("data-target")).css("border-color", "#990000")
            $($(this).attr("data-target")).children(".data").css("background-color", "#990000")

            $("#taskbar li").each(function(){
                console.log(this)
                $(this).css("background-color","#994141")
            })
            $(this).css("background-color","#800000")
        }
    })
});