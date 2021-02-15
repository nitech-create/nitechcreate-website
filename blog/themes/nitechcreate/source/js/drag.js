$(function () {
    var pictures = ["dokudami.jpg", "LT0.png"]
    var ind = 0;
    $("#picbefore").click(function () {
        if (ind == 0) {
            ind = pictures.length - 1
        } else {
            ind = ind - 1
        }
        $("#indexpic").attr("src", "/img/" + pictures[ind])
        $("#picnum").text(ind)
        $("#picpath").text(pictures[ind])
    })

    $("#picnext").click(function () {
        if (ind == pictures.length - 1) {
            ind = 0
        } else {
            ind = ind + 1
        }
        $("#indexpic").attr("src", "/img/" + pictures[ind])
        $("#picnum").text(ind)
        $("#picpath").text(pictures[ind])
    })
    var members = [{
        name: "dokudami",
        twitterid: "dokudamichang",
        message: " 調整中"
    }, {
        name: "Sora513",
        twitterid: "sayagi_sora",
        message: " 調整中"
    }, {
        name: "Ko_NiTech",
        twitterid: "Ko_NITech",
        message: " 調整中"
    }, {
        name: "uint256_t",
        twitterid: "uint256_t",
        message: " 調整中"
    }]
    var ind_mem = 0;
    $("#membefore").click(function () {
        if (ind_mem == 0) {
            ind_mem = members.length - 1
        } else {
            ind_mem--
        }
        redraw_mem(ind_mem, members)
    })
    $("#memnext").click(function () {
        if (ind_mem == members.length - 1) {
            ind_mem = 0
        } else {
            ind_mem++
        }
        redraw_mem(ind_mem, members)
    })
    $("#list-about").css("background-color", "mediumblue")
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
                            topcontent.css("border-color", "midnightblue")
                            topcontent.children(".data").css("background-color", "midnightblue")
                        }
                        topcontent = $(this)
                    } else {
                        $(this).css("border-color", "midnightblue")
                        $(this).children(".data").css("background-color", "midnightblue")
                    }
                })
                $(this).css("zIndex", top + 1)
                topcontent.css("border-color", "royalblue")
                topcontent.children(".data").css("background-color", "royalblue")

                $("#taskbar li").each(function () {
                    $(this).css("background-color", "midnightblue")
                })
                $($(this).attr("data-target")).css("background-color", "mediumblue")

            }
        });


        $(element).click(function () {
            var top = 0;
            $('.contents-box').each(function () {
                var thisz = parseInt($(this).css('zIndex'), 10)
                if (thisz > top) {
                    top = thisz
                }
                $(this).css("border-color", "midnightblue")
                $(this).children(".data").css("background-color", "midnightblue")
                $($(this).attr("data-target")).css("background-color", "midnightblue")
            })
            $(this).css("zIndex", top + 1)
            $(this).css("border-color", "royalblue")
            $(this).children(".data").css("background-color", "royalblue")
            $($(this).attr("data-target")).css("background-color", "blue")


        })
    })

    $(".contents-box .data .ope").click(function () {

        if ($(this).parent().parent().css("border-color") == "blue") {
            var clicked = $(this)
            setTimeout(function () { $(clicked.parent().parent().attr("data-target")).trigger("click") }, 100)
        } else {
            $($(this).parent().parent().attr("data-target")).trigger("click")
            var clicked = $(this)
            setTimeout(function () { $(clicked.parent().parent().attr("data-target")).trigger("click") }, 100)

        }
    })


    $("#taskbar li").click(function () {
        var clickedlist = $(this)
        if ($($(this).attr("data-target")).css("visibility") == "visible") {
            var top = 0;
            var topcontent
            $(".contents-box").each(function () {
                var thisz = parseInt($(this).css('zIndex'), 10)
                if (thisz > top) {
                    top = thisz
                    topcontent = $(this)
                } else {
                    if (topcontent === undefined) {
                        topcontent = $(this)
                    }
                }
            })
            if (topcontent.attr("data-target") != ("#" + clickedlist.attr("id"))) {
                $($(this).attr("data-target")).trigger("click")
            } else {
                $($(this).attr("data-target")).css("visibility", "hidden")
                top = 0;
                topcontent = undefined
                $('.contents-box').filter(function (index) {

                    return $(this).attr("data-target") != ("#" + clickedlist.attr("id")) && $(this).css("visibility") != "hidden";
                }).each(function () {
                    var thisz = parseInt($(this).css('zIndex'), 10)
                    if (thisz > top) {
                        top = thisz
                        if (topcontent === undefined) {
                        } else {
                            topcontent.css("border-color", "midnightblue")
                            topcontent.children(".data").css("background-color", "midnightblue")
                        }
                        topcontent = $(this)
                    } else {
                        if (topcontent === undefined) {
                            topcontent = $(this)
                        } else {
                            $(this).css("border-color", "midnightblue")
                            $(this).children(".data").css("background-color", "midnightblue")
                        }
                    }
                })
                if (topcontent === undefined) {

                } else {

                    topcontent.css("border-color", "royalblue")
                    topcontent.children(".data").css("background-color", "royalblue")
                }

                var visible_exist = false;
                $("#taskbar li").each(function () {
                    if ($($(this).attr("data-target")).css("visibility") == "visible") {
                        visible_exist = true;
                    }
                    $(this).css("background-color", "midnightblue")
                })
                if (visible_exist != false) {
                    $($(topcontent).attr("data-target")).css("background-color", "mediumblue")
                }
            }


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
                        topcontent.css("border-color", "midnightblue")
                        topcontent.children(".data").css("background-color", "midnightblue")
                    }
                    topcontent = $(this)
                }

                $(this).css("border-color", "midnightblue")
                $(this).children(".data").css("background-color", "midnightblue")
            })
            $($(this).attr("data-target")).css("zIndex", top + 1)
            $($(this).attr("data-target")).css("border-color", "royalblue")
            $($(this).attr("data-target")).children(".data").css("background-color", "royalblue")

            $("#taskbar li").each(function () {
                $(this).css("background-color", "midnightblue")
            })
            $(this).css("background-color", "mediumblue")
        }
    })
});

function redraw_mem(ind_num, members) {

    $("#membername").text(members[ind_num].name)
    $("#membertwitter").text("@" + members[ind_num].twitterid)
    $("#membertwitter").attr("href", "https://twitter.com/" + members[ind_num].twitterid)
    $("#membermessage").text(members[ind_num].message)
    $("#profile_icon").attr("src", "/img/" + members[ind_num].twitterid + ".jpg")
    $("#memnum").text(ind_num)
    $("#memname").text(members[ind_num].name)
}