(function($) {
        "use strict";
        if ($(".scroll-to-target").length) {
            $(".scroll-to-target").on("click", function() {
                var target = $(this).attr("data-target");
                $("html, body").animate({
                    scrollTop: $(target).offset().top
                }, 1000);
                return false;
            });
        }
        function dynamicCurrentMenuClass(selector) {
            let FileName = window.location.href.split("/").reverse()[0];
            selector.find("li").each(function() {
                let anchor = $(this).find("a");
                if ($(anchor).attr("href") == FileName) {
                    $(this).addClass("current");
                }
            });
            selector.children("li").each(function() {
                if ($(this).find(".current").length) {
                    $(this).addClass("current");
                }
            });
            if ("" == FileName) {
                selector.find("li").eq(0).addClass("current");
            }
        }
        if ($(".main-menu__list").length) {
            let mainNavUL = $(".main-menu__list");
            dynamicCurrentMenuClass(mainNavUL);
        }
        if ($(".main-menu").length && $(".mobile-nav__container").length) {
            let navContent = document.querySelector(".main-menu").innerHTML;
            let mobileNavContainer = document.querySelector(".mobile-nav__container");
            mobileNavContainer.innerHTML = navContent;
        }
        if ($(".sticky-header__content").length) {
            let navContent = document.querySelector(".main-menu").innerHTML;
            let mobileNavContainer = document.querySelector(".sticky-header__content");
            mobileNavContainer.innerHTML = navContent;
        }
        if ($(".mobile-nav__container .main-menu__list").length) {
            let dropdownAnchor = $(".mobile-nav__container .main-menu__list .dropdown > a");
            dropdownAnchor.each(function() {
                let self = $(this);
                let toggleBtn = document.createElement("BUTTON");
                toggleBtn.setAttribute("aria-label", "dropdown toggler");
                toggleBtn.innerHTML = "<i class='fa fa-angle-down'></i>";
                self.append(function() {
                    return toggleBtn;
                });
                self.find("button").on("click", function(e) {
                    e.preventDefault();
                    let self = $(this);
                    self.toggleClass("expanded");
                    self.parent().toggleClass("expanded");
                    self.parent().parent().children("ul").slideToggle();
                });
            });
        }
        if ($(".mobile-nav__toggler").length) {
            $(".mobile-nav__toggler").on("click", function(e) {
                e.preventDefault();
                $(".mobile-nav__wrapper").toggleClass("expanded");
            });
        }
        $(window).on("scroll", function() {
            if ($(".sticky-menu").length) {
                var headerScrollPos = 130;
                var stricky = $(".sticky-menu");
                if ($(window).scrollTop() > headerScrollPos) {
                    stricky.addClass("sticky-fixed");
                } else if ($(this).scrollTop() <= headerScrollPos) {
                    stricky.removeClass("sticky-fixed");
                }
            }
            if ($(".scroll-to-top").length) {
                var strickyScrollPos = 100;
                if ($(window).scrollTop() > strickyScrollPos) {
                    $(".scroll-to-top").fadeIn(500);
                } else if ($(this).scrollTop() <= strickyScrollPos) {
                    $(".scroll-to-top").fadeOut(500);
                }
            }
        });
        $(window).on("load", function() {
            if ($("#teams__thumb").length) {
                let teamsThumb = new Swiper("#teams__thumb",{
                    slidesPerView: 3,
                    spaceBetween: 20,
                    speed: 1400,
                    watchSlidesVisibility: true,
                    watchSlidesProgress: true,
                    autoplay: {
                        delay: 5000
                    }
                });
                let teamsMeta = new Swiper("#teams__meta",{
                    slidesPerView: 1,
                    spaceBetween: 0,
                    speed: 1400,
                    watchSlidesVisibility: true,
                    watchSlidesProgress: true,
                    autoplay: {
                        delay: 5000
                    }
                });
                let teamsCarousel = new Swiper("#teams__carousel",{
                    observer: true,
                    observeParents: true,
                    speed: 1400,
                    mousewheel: true,
                    slidesPerView: 1,
                    autoplay: {
                        delay: 5000
                    },
                    pagination: {
                        el: "#teams__swiper-pagination",
                        type: "bullets",
                        clickable: true
                    },
                    thumbs: {
                        swiper: teamsThumb
                    }
                });
                teamsCarousel.controller.control = teamsMeta;
                teamsMeta.controller.control = teamsCarousel;
            }
        });
        const formInpts = document.querySelectorAll(
            ".floating-contact-form .form-container .form-input"
        );

        const contactIcon = document.querySelector(
            ".floating-contact-form .contact-icon"
        );

        const formContainer = document.querySelector(
            ".floating-contact-form .form-container"
        );

        contactIcon.addEventListener("click", () => {
            formContainer.classList.toggle("active");
        });
    }
)(jQuery);