AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({
  
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

    // Facts counter
  //   $('[data-toggle="counter-up"]').counterUp({
  //     delay: 10,
  //     time: 2000
  // });

    // Skills
  //   $('.skill').waypoint(function () {
  //     $('.progress .progress-bar').each(function () {
  //         $(this).css("width", $(this).attr("aria-valuenow") + '%');
  //     });
  // }, {offset: '80%'});