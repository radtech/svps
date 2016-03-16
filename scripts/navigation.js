$(document).ready(function() {
     
    // Check for hash value in URL
    var hash = window.location.hash.substr(1);
    var href = $('#nav-bar li a').each(function(){
        var href = $(this).attr('href');
        if(hash==href.substr(0,href.length-5)){
            var toLoad = hash+'.html #content';
            $('#content').load(toLoad)
        } 
    });
     
    $('#nav-bar li a').click(function(){
     
    var toLoad = $(this).attr('href')+' #content';
    $('#content').hide('slow',loadContent);
    $('#load').remove();
    $('#wrapper').append('<span id="load">LOADING...</span>');
    $('#load').fadeIn('normal');
    window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length);
    function loadContent() {
        $('#content').load(toLoad,'',showNewContent())
    }
    function showNewContent() {
        $('#content').show('normal',hideLoader());
    }
    function hideLoader() {
        $('#load').fadeOut('normal');
    }
    return false;
     
    });
});
//----------------Sun Event Nav-----------------------------
$(document).ready(function() {
     
    // Check for hash value in URL
    var hash = window.location.hash.substr(1);
    var href = $('.events-nav-cum-tooltip li a').each(function(){
        var href = $(this).attr('href');
        if(hash==href.substr(0,href.length-5)){
            var toLoad = hash+'.html #content';
            $('#content').load(toLoad)
        } 
    });
     
    $('.events-nav-cum-tooltip li a').click(function(){
     
    var toLoad = $(this).attr('href')+' #content';
    $('#content').hide('slow',loadContent);
    $('#load').remove();
    $('#wrapper').append('<span id="load">LOADING...</span>');
    $('#load').fadeIn('normal');
    window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length);
    function loadContent() {
        $('#content').load(toLoad,'',showNewContent())
    }
    function showNewContent() {
        $('#content').show('normal',hideLoader());
    }
    function hideLoader() {
        $('#load').fadeOut('normal');
    }
    return false;
     
    });
});

//----------- Sun Nav bar settings-------------------

$(function() {
    var t = $(".events-nav-button")
      , e = 200 / t.length
      , n = 200 - (200 - e * (t.length - 1)) / 2 - 8;
    t.each(function() {
        var t = "rotate(-" + n + "deg) translate(6em) rotate(" + n + "deg)";
        $(this).css({
            transform: t
        }),
        n -= e
    })
}),
$(function() {
    var t = function(t) {
        var e = $(".nav-cum-tooltip-dummy-target.cat-" + t)
          , n = e.find(".nav-cum-tooltip")
          , a = n.find(".events-sub-nav")
          , o = a.find("li");
        return o.height() * o.length
    }
      , e = function(t) {
        var e = $(this)
          , n = e.data("href")
          , a = $(".nav-cum-tooltip-dummy-target.cat-" + n)
          , o = a.find(".nav-cum-tooltip")
          , i = o.find(".events-sub-nav");
        if (!$(".nav-cum-tooltip").filter(".open").length && !e.hasClass("has-tooltip")) {
            e.addClass("has-tooltip"),
            i.height(0);
            var l = e[0].getBoundingClientRect();
            a.css({
                top: l.top,
                left: l.left,
                width: l.width,
                height: l.height
            }),
            o.animate({
                opacity: 1,
                "margin-bottom": 0
            }, 50, "function" == typeof t ? t.bind(this) : void 0)
        }
    }
      , n = function() {
        var t = $(this)
          , e = t.data("href")
          , n = $(".nav-cum-tooltip-dummy-target.cat-" + e)
          , a = n.find(".nav-cum-tooltip");
        a.hasClass("open") || ($(this).removeClass("has-tooltip"),
        a.stop().animate({
            opacity: 0,
            "margin-bottom": "10px"
        }, 50))
    }
      , a = function(n) {
        var o = $(this)
          , i = o.data("href")
          , l = $(".nav-cum-tooltip-dummy-target.cat-" + i)
          , s = l.find(".nav-cum-tooltip")
          , r = s.find(".events-sub-nav");
        if (o.hasClass("has-tooltip"))
            if (s.hasClass("open"))
                s.removeClass("open"),
                r.stop().animate({
                    height: 0
                });
            else {
                s.addClass("open");
                var p = t(i);
                r.stop().animate({
                    height: p
                })
            }
        else
            $(".nav-cum-tooltip").filter(".open").length && (s = $(".nav-cum-tooltip.open"),
            r = s.find(".events-sub-nav"),
            r.css({
                height: 0
            }),
            $(".has-tooltip").removeClass("has-tooltip"),
            s.removeClass("open"),
            s.css({
                opacity: 0,
                "margin-bottom": "10px"
            }, 50),
            e.call(this, a.bind(this)));
        n && n.stopPropagation && n.stopPropagation(),
        n && n.preventDefault && n.preventDefault()
    }
    ;
    $("body").click(function() {
        var t = $(".nav-cum-tooltip.open")
          , e = t.find(".events-sub-nav");
        t.animate({
            opacity: 0,
            "margin-bottom": "10px"
        }, 50, function() {
            e.css({
                height: 0
            }),
            $(".has-tooltip").removeClass("has-tooltip"),
            t.removeClass("open")
        })
    }),
    $(".events-nav-button").on("mouseenter", e).on("mouseleave", n).on("click", a)
});
