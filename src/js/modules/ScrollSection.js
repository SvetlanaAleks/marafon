const ScrollSection = (function () {
  "use strict";
  const sections = $("section");
  const scrollPrevArrow = $(".js-scroll-arrow-prev");
  const scrollNextArrow = $(".js-scroll-arrow-next");

  return {
    writeCountSection: function () {
      for (let i = 0; i < sections.length; i++) {
        $(".js-scroll-count").append(`<li>${i + 1}</li>`);
      }
    },
    init: function () {
      ScrollSection.writeCountSection();
    },
  };
})();

export default ScrollSection;
