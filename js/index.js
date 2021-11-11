$(function() {
    //上部画像の設定
    $('.gallery').slick({

        autoplay: true, //自動再生
        autoplaySpeed: 2000,
        　 //自動再生のスピード
        speed: 800,
        　 //スライドするスピード
        arrows: true, //左右の矢印
        infinite: true,
        　　　　 //スライドのループ
        // pauseOnHover: false,   //ホバーしたときにスライドを一時停止しない
        //   infinite: true, //スライドをループさせるかどうか。初期値はtrue。
        //   // fade: true, //フェードの有効化
        //   arrows: true, //左右の矢印あり
        //   // prevArrow: '<div class="slick-prev"></div>', //矢印部分PreviewのHTMLを変更
        //   // nextArrow: '<div class="slick-next"></div>', //矢印部分NextのHTMLを変更
        asNavFor: '.choice-btn', //連動させるサムネイルのクラス名
    });

    //選択画像の設定
    $('.choice-btn').slick({
        // infinite: true, //スライドをループさせるかどうか。初期値はtrue。
        slidesToShow: 3, //表示させるスライドの数
        // focusOnSelect: true, //フォーカスの有効化
        // prevArrow: '<div class="slick-prev"></div>', //矢印部分PreviewのHTMLを変更
        // nextArrow: '<div class="slick-next"></div>', //矢印部分NextのHTMLを変更
        asNavFor: '.gallery', //連動させるスライドショーのクラス名

    });

    $('.choice-btn .slick-slide').on("click", function() {
        let index = $(this).attr("data-slick-index")
        $('.gallery').slick("slickGoTo", index)
    })

});

// 多層化メニュー
$(function() {
    var parentList = $(".parent");
    var parentListTrig = $(".parent > li");
    var childList = $(".child");
    var childListTrig = $(".child > li");

    parentListTrig.hover(
        function() {
            $(this).css({
                backgroundColor: "#16a089d2"
            })
            $(this).children('.child').slideDown('fast');
        },
        function() {
            $(this).css({
                backgroundColor: "rgb(0, 0, 139)"
            })
            $(this).children('.child').slideUp('fast');
        },
    );
    childListTrig.hover(function() {
        $(this).children('.grandchild').show('fast');
    }, function() {
        $(this).children('.grandchild').hide('fast');
    });
});

//文字サイズ変更
$(function() {
    $(".font_size img").click(function() {

        $(".font_size img").removeClass("current");
        var fontCss = $(this).attr("class");
        $(this).addClass("current");
        if (fontCss == "large") {
            $("body").css("fontSize", "1.2em");
        } else if (fontCss == "middle") {
            $("body").css("fontSize", "1em");
        } else {
            $("body").css("fontSize", "0.8em");
        }

    });
});