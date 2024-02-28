let mobileView = document.querySelector(".mobileView")
let menu = document.querySelector("#menu")
let span4 = document.querySelector(".span4")
let span5 = document.querySelector(".span5")
let span6 = document.querySelector(".span6")
let home = document.querySelectorAll('.home')

menu.addEventListener("click", function () {
    mobileView.classList.toggle("show");
    document.querySelector("body").classList.toggle("overflow-hidden");
    span4.classList.toggle("span1");
    span5.classList.toggle("span2");
    span6.classList.toggle("span3");
})

home.forEach(x => {
    x.addEventListener("click", function () {
        mobileView.classList.toggle("show");
        document.querySelector("body").classList.toggle("overflow-hidden")
        span4.classList.toggle("span1");
        span5.classList.toggle("span2");
        span6.classList.toggle("span3");
    })
});

$('.slider1').slick({
    dots: false,
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'Linear',
    slidesToShow: 4.1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    touchMove: false,
    responsive: [
        {
            breakpoint: 1654,
            settings: {
                slidesToShow: 4,
                infinite: true,
            }
        },
        {
            breakpoint: 1454,
            settings: {
                slidesToShow: 3.5,
                infinite: true,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1.6,
                dots: true,
                speed: 5000,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1.2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 350,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.slider2').slick({
    dots: false,
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'Linear',
    slidesToShow: 4.2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 1454,
            settings: {
                slidesToShow: 4,
                infinite: true,
            }
        },
        {
            breakpoint: 1224,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 2.5,
            }
        },
        {
            breakpoint: 680,
            settings: {
                slidesToShow: 1.6,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1.2,
                slidesToScroll: 1
            }
        }
    ]
});

$('.slider3').slick({
    rtl: true,
    dots: false,
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'Linear',
    slidesToShow: 4.2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 1454,
            settings: {
                slidesToShow: 4,
                infinite: true,
            }
        },
        {
            breakpoint: 1224,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 2.5,
            }
        },
        {
            breakpoint: 680,
            settings: {
                slidesToShow: 1.6,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1.2,
                slidesToScroll: 1
            }
        }
    ]
});


// back to top
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        document.getElementById('backtop').style.display = "block";

    } else { document.getElementById('backtop').style.display = "none" };
})

// preloader
setTimeout(() => {
    document.getElementById('loder').classList.add('d-none');
    document.body.classList.remove('overflow-hidden');
}, 3000)