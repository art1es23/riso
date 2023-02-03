window.addEventListener("DOMContentLoaded", (e) => {
  gsap.registerPlugin(ScrollTrigger);

  const initHero = () => {
  const hero = document.querySelector(".hero-legend"),
  
  const tlHeroCaption = gsap.timeline();

  // gsap.to('.hero-legend__caption', {
  //   y: 0,
  //   stagger: 0.05,
  //   delay: 0.2,
  //   duration: .1
  // })
  }
  
  initHero();

  const initFooter = () => {
    const footer = document.querySelector(".footer");
    const trigger = document.querySelector(".contact-us");
    const tlFooter = gsap.timeline();

    tlFooter.fromTo(
      footer,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        ease: Power3.easeOut,
        duration: 2,
        scrollTrigger: {
          trigger: trigger,
          scrub: 3,
          start: "top center",
          end: "top center-=300",
        },
      }
    );
  };

  const cursorInit = () => {
    Splitting();
    let cursor = document.querySelector(".cursor"),
      cursorText = cursor.querySelectorAll(".char");

    let radius = 55;

    function init() {
      rounded(radius);

      window.addEventListener("mousemove", cursorMove);
    }
    window.addEventListener("load", function () {
      init();
    });

    function rounded(radius) {
      cursorText.forEach((item, idx) => {
        let rotation = idx * (360 / cursorText.length);

        gsap.set(item, {
          transformOrigin: `0px ${radius}px`,
          x: radius,
          rotate: rotation,
        });

        gsap.set(cursor, {
          transformOrigin: "center center",
          rotation: 0,
          width: radius * 2,
          height: radius * 2,
        });
      });

      let rotate = gsap.timeline({ repeat: -1 });
      rotate.to(cursor, {
        rotation: 360,
        duration: 7.5,
        ease: "none",
      });
    }

    function cursorMove(e) {
      let mouseX = e.pageX,
        mouseY = e.pageY;

      t1 = gsap.timeline();

      t1.to(cursor, {
        duration: 1,
        x: mouseX - radius,
        y: mouseY - radius,
        ease: Expo.ease,
      });
    }
  };

  const washerInit = () => {
    let washer = document.querySelector(".product-list");

    // ScrollTrigger.defaults({
    //   markers: true,
    // });
    gsap.fromTo(
      washer,
      {
        clipPath: "circle(0% at 50% 50%)",
        duration: 5,
      },
      {
        clipPath: "circle(100% at 50% 50%)",
        ease: Power3.easeOut,
        duration: 5,
        scrollTrigger: {
          trigger: washer,
          scrub: 3,
          start: "top center",
          end: "top center-=300",
        },
      }
    );
  };

  initFooter();
  cursorInit();
  washerInit();

  window.addEventListener("resize", (e) => {
    const productImageList = document.querySelector(".img-list");
    if (e.innerWidth < 1080) {
      productImageList.style.position = "relative";
    }
  });
  //   let sections = gsap.utils.toArray(".js-section");

  //   function goToSection(i) {
  //     gsap.to(window, {
  //       scrollTo: {
  //         y: i * innerHeight,
  //         autoKill: false,
  //         ease: "Power3.easeIn",
  //       },
  //       duration: 0.1,
  //     });
  //   }

  //   ScrollTrigger.defaults({
  //     // markers: true,
  //   });

  //   sections.forEach((eachPanel, i) => {
  //     const mainAnim = gsap.timeline({ paused: true });

  //     ScrollTrigger.create({
  //       trigger: eachPanel,
  //       onEnter: () => goToSection(i),
  //     });

  //     ScrollTrigger.create({
  //       trigger: eachPanel,
  //       start: "bottom bottom",
  //       onEnterBack: () => goToSection(i),
  //     });
  //   });

  // gsap.fromTo(
  //   ".section-trigger",
  //   { autoAlpha: 0 },
  //   {
  //     duration: 0.4,
  //     autoAlpha: 1,
  //     stagger: 1,
  //     scrollTrigger: {
  //       trigger: ".trigger",
  //       // pin: true,
  //       scrub: true,
  //       markers: true,
  //       end: window.innerHeight * 4,
  //     },
  //   }
  // );

  window.addEventListener("scroll", (e) => {
    const header = document.querySelector(".header");
    let stickyPoint = header.offsetTop;

    if (window.pageYOffset > stickyPoint) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });

  const initSlider = (sliderClassName) => {
    const swiper = new Swiper(sliderClassName, {
      loop: true,
      effect: "fade",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      // simulateTouch: false,
    });
  };

  let arraySliders = [".hero", ".product-list"];

  arraySliders.forEach((slider) => initSlider(slider));
});
