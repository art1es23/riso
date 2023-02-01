window.addEventListener("DOMContentLoaded", (e) => {
  console.log("====================================");
  console.log("HI EVERYONE!");
  console.log("====================================");

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

  //   gsap.fromTo(
  //     ".js-section",
  //     { autoAlpha: 0 },
  //     {
  //       duration: 1,
  //       autoAlpha: 1,
  //       stagger: 1,
  //       scrollTrigger: {
  //         trigger: ".trigger",
  //         // pin: true,
  //         scrub: true,
  //         // markers: true,
  //         end: window.innerHeight * 4,
  //       },
  //     }
  //   );

  const initSlider = (sliderClassName) => {
    const swiper = new Swiper(sliderClassName, {
      loop: true,
      effect: "coverflow",
    });
  };

  let arraySliders = [".hero", ".section-1", ".section-2", ".section-3"];

  arraySliders.forEach((slider) => initSlider(slider));
});
