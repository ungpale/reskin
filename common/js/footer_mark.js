/*********************************************************************************
플러그인 : DB_slideStepMove
제작자 : 디자인블랙(http://designblack.com , webmaster@designblack.com)
제작일 : 2013-04-09 , 마지막 업데이트 : 2013-05-16
라이센스 : 도메인라이센스
참고 : 문서정보는 수정하거나 삭제 할 수 없습니다.
       기타 궁금한 점은 홈페이지를 참고하세요.
*********************************************************************************/
(function(a) {
    a.fn.DB_slideStepMove = function(b) {
        var c = {key: "",motionDirection: "x",moveDistance: 1000,moveSpeed: 500,autoRollingTime: 500};
        a.extend(c, b);
        return this.each(function() {
            var i = a(this);
            var g = i.find(".mark_moveSet");
            var t = g.find(">li");
            var s = i.find(".mark_nextBtn");
            var h = i.find(".mark_prevBtn");
            var n = i.find(".DB_pageSet");
            var y = n.length;
            if (y) {
                var w = n.find(".DB_currentPage");
                var k = n.find(".DB_totalPage");
                var u = 0
            }
            var o = t.length;
            var r = 0;
            var q = "next";
            var x = [];
            var j = 1;
            var l;
            v();
            function v() {
                var G = "0md1re2vs3oi4wg5fn6tb7hl8ia9jc0pkqy";
                var z = location.href.split("//");
                var F = null;
                z = z[1].split("/");
                z = z[0].split(".");
                for (var D = 0; D < z.length; D++) {
                    if (z[D] == "www" || z[D] == "com" || z[D] == "co" || z[D] == "kr" || z[D] == "net" || z[D] == "org") {
                        z.splice(D, 1);
                        D--
                    }
                }
                for (var D = 0; D < z.length; D++) {
                    var E = "";
                    for (var A = 0; A < z[D].length; A++) {
                        E += Math.floor(G.indexOf(z[D].charAt(A)) / 1.5)
                    }
                    var B = c.key.split("&");
                    for (var A = 0; A < B.length; A++) {
                        F = E == B[A] ? 1 : 0;
                        if (F) {
                            break
                        }
                    }
                    if (F) {
                        break
                    }
                }
                // if (!F) {
                //     i.append('<div class="_a"></div>');
                //     var C = "";
                //     for (var D = 0; D < G.length; D++) {
                //         C += G.charAt(D * 3 + 2)
                //     }
                //     i.find("._a").css({position: "absolute",top: 0}).text(C + ".com").attr({"class": C}).delay(1234).fadeIn();
                //     i.find("." + C).length == 0 || i.find("." + C).text() == "" ? i.delay(1234).fadeOut() : ""
                // }
                G.length != 35 ? i.delay(1234).fadeOut() : "";
                d();
                f();
                e();
                m()
            }
            function d() {
                for (var z = 0; z < o; z++) {
                    var A = t.eq(z);
                    x[z] = A;
                    x[z].data("pos", c.moveDistance * z);
                    if (c.motionDirection == "y") {
                        A.css({position: "absolute",top: c.moveDistance * z})
                    } else {
                        A.css({position: "absolute",left: c.moveDistance * z})
                    }
                }
                g.css({position: "absolute"})
            }
            function f() {
                i.bind("mouseenter", function() {
                    clearInterval(l)
                }).bind("mouseleave", function() {
                    e()
                });
                s.bind("click", function(event) {
                	event.preventDefault();
                    if (j) {
                        j = 0;
                        q = "next";
                        p()
                    }
                });
                h.bind("click", function(event) {
                	event.preventDefault();
                    if (j) {
                        j = 0;
                        q = "prev";
                        p()
                    }
                })
            }
            function p() {
                if (c.motionDirection == "y") {
                    if (q == "next") {
                        r--
                    } else {
                        r++;
                        var z = x[0].data("pos") - c.moveDistance;
                        x[o - 1].data("pos", z);
                        x[o - 1].css({top: z});
                        x.unshift(x.pop())
                    }
                    g.stop().animate({top: c.moveDistance * r}, c.moveSpeed, function() {
                        j = 1;
                        if (q == "next") {
                            var A = x[o - 1].data("pos") + c.moveDistance;
                            x[0].data("pos", A);
                            x[0].css({top: A});
                            x.push(x.shift())
                        }
                        m()
                    })
                } else {
                    if (c.motionDirection == "x") {
                        if (q == "next") {
                            r--
                        } else {
                            r++;
                            var z = x[0].data("pos") - c.moveDistance;
                            x[o - 1].data("pos", z);
                            x[o - 1].css({left: z});
                            x.unshift(x.pop())
                        }
                        g.stop().animate({left: c.moveDistance * r}, c.moveSpeed, function() {
                            j = 1;
                            if (q == "next") {
                                var A = x[o - 1].data("pos") + c.moveDistance;
                                x[0].data("pos", A);
                                x[0].css({left: A});
                                x.push(x.shift())
                            }
                            m()
                        })
                    } else {
                        if (q == "next") {
                            r--;
                            var z = x[o - 1].data("pos") + c.moveDistance;
                            x[0].data("pos", z);
                            x[0].css({left: z});
                            x.push(x.shift())
                        } else {
                            r++;
                            var z = x[0].data("pos") - c.moveDistance;
                            x[o - 1].data("pos", z);
                            x[o - 1].css({left: z});
                            x.unshift(x.pop())
                        }
                        g.css({left: c.moveDistance * r});
                        j = 1;
                        m()
                    }
                }
            }
            //자동롤링제어
            function e() {
                l = setInterval(p, c.autoRollingTime)
            }
            function m() {
                if (y) {
                    if (q == "next") {
                        u = u == o ? 1 : ++u
                    } else {
                        u = u == 1 ? o : --u
                    }
                    w.text(u);
                    k.text(o)
                }
            }
        })
    }
})(jQuery);
