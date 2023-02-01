window.addEventListener("DOMContentLoaded", (e) => {
  console.log("====================================");
  console.log("HI EVERYONE!");
  console.log("====================================");

  //   gsap.fromTo(
  //     ".js-section",
  //     { autoAlpha: 0 },
  //     {
  //       duration: 1,
  //       autoAlpha: 1,
  //       stagger: 1,
  //       scrollTrigger: {
  //         trigger: ".trigger",
  //         pin: true,
  //         scrub: true,
  //         // markers: true,
  //         end: window.innerHeight * 4,
  //       },
  //     }
  //   );

  const initSlider = (sliderClassName) => {
    const swiper = new Swiper(sliderClassName, {
      loop: true,
    });
  };

  let arraySliders = [".hero", ".section-1", ".section-2", ".section-3"];

  arraySliders.forEach((slider) => initSlider(slider));
});
