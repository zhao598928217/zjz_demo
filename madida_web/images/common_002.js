!
function(t) {
    t.fn.hoverDelay = function(n) {
        var i, e, o = {
            hoverDuring: 200,
            outDuring: 200,
            hoverEvent: function() {
                t.noop()
            },
            outEvent: function() {
                t.noop()
            }
        },
        a = t.extend(o, n || {});
        return t(this).each(function() {
            t(this).hover(function() {
                clearTimeout(e),
                i = setTimeout(a.hoverEvent, a.hoverDuring)
            },
            function() {
                clearTimeout(i),
                e = setTimeout(a.outEvent, a.outDuring)
            })
        })
    }
} (jQuery);
var aniCallBack = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend"; !
function(t) {
    function n() {
        s = t(window).height(),
        r = t(window).width(),
        c = t(".cti-page"),
        $jpage = t(".cti-jpage"),
        d = t(".cti-bg")
    }

    function i() {
        var n = 1920,
        i = 750;
        r > 768 ? ($jpage.each(function(i, e) {
            var o = t(this),
            a = o.attr("data-h");
            _scale = n / a,
            _newH = r / _scale,
            t(this).height(_newH)
        }), c.height(s)) : $jpage.each(function(n, e) {
            var o = t(this),
            a = o.attr("data-mini");
            _scale = i / a,
            _newH = r / _scale,
            t(this).height(_newH)
        })
    }

    function e() {
        d.each(function(n) {
            var i = t(this),
            e = t(this).attr("data-w"),
            o = t(this).attr("data-h"),
            a = e / o,
            h = t(this).parent().height(),
            c = t(this).parent().width(),
            d = c / h;
            if (d > a) {
                i.css({
                    width: c,
                    height: c / a
                });
                var s = Math.round(h - i.height() >> 1);
                i.css({
                    position: "absolute",
                    bottom: s / 2,
                    left: "-1px"
                })
            } else if (d < a) {
                i.css({
                    width: h * a,
                    height: h
                });
                var r = Math.round(c - i.width() >> 1);
                i.css({
                    position: "absolute",
                    left: r,
                    bottom: 0
                })
            } else i.css({
                position: "absolute",
                width: c,
                height: h,
                left: "-1px",
                bottom: 0
            })
        })
    }

    function o() {
        t(window).resize(function(t) {
            n(),
            i(),
            e()
        }).resize()
    }

    function a() {
        o()
    }

    function h() {
        var n = location.hash.replace("#", "");
        try {
            n && t("body,html").animate({
                scrollTop: t('[data-name="' + n + '"]').offset().top - t(".cti-header").height() - t("#miniNav").outerHeight(!0) + 5
            },
            "slow")
        } catch(i) {}
    }
    var c, d, s = t(window).height(),
    r = t(window).width();
    a(),
    t(window).scroll(function() {
        var n = document.getElementById("miniNav"),
        i = document.getElementById("page2"),
        e = n.getBoundingClientRect().top,
        o = i.getBoundingClientRect().top,
        a = (document.documentElement.clientHeight, t(document).scrollTop()),
        h = t(".cti-btn-down");
        r <= 768 ? (t(".cti-mini-nav").fadeIn(), e <= 50 && t(".cti-mini-nav").addClass("fix-50"), o > 100 && t(".cti-mini-nav").removeClass("fix-50")) : a > .8 * s ? t(".cti-mini-nav").fadeIn() : t(".cti-mini-nav").fadeOut(),
        t(window).scrollTop() > s ? t(".cti-scrl-top").addClass("d-show") : t(".cti-scrl-top").removeClass("d-show"),
        a >= t("body").height() - t(window).height() ? h.addClass("d-hide") : h.removeClass("d-hide")
    }),
    t(".mini-end").on("touchend",
    function(n) {
        n.preventDefault(),
        t("html,body").animate({
            scrollTop: 0
        },
        500)
    }),
    window.onload = function() {
        h()
    },
    window.onhashchange = function() {
        h()
    },
    t(".cti-subnav-brand .pull-left ul li a").removeAttr("target"),
    t(".cti-subnav-brand .pull-right .d-btn a").removeAttr("target")
} (jQuery);