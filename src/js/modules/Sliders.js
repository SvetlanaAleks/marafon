import slick from "../lib/slick.min";
const Sliders = (function () {
  "use strict";
  const reviewsSlider = $(".js-reviews-slider");
  const offersSlider = $(".js-offers-slider");
  return {
    initReviewsSlider: function () {
      reviewsSlider.slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        prevArrow:
          '<button class="prev"><svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M9 0.147461L11.0625 2.20995L2.06253 11.2099L3.78246e-05 9.14742L9 0.147461Z" fill="white"/><path d="M3.78246e-05 9.14742L2.06253 7.08493L11.0625 16.0849L9 18.1474L3.78246e-05 9.14742Z" fill="white"/></g></svg></button>',
        nextArrow:
          '<button class="next"><svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 18.1475L0.937508 16.085L9.93747 7.08501L12 9.1475L3 18.1475Z" fill="white"/><path d="M12 9.1475L9.93747 11.21L0.937508 2.21003L3 0.147536L12 9.1475Z" fill="white"/></svg></button>',
        dots: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              adaptiveHeight: true,
            },
          },
        ],
      });
    },
    initOffersSlider: function () {
      offersSlider.on("init afterChange", function (e, slick) {
        let currentSlick = $(".slick-current", slick.$slideTrack);
        let prevName = currentSlick.prev().data("slide-name");
        let nextName = currentSlick.next().data("slide-name");
        if (prevName == undefined) {
          slick.$prevArrow.find("span").text("");
          slick.$nextArrow.find("span").text(nextName);
        } else if (nextName == undefined) {
          slick.$nextArrow.find("span").text("");
          slick.$prevArrow.find("span").text(prevName);
        } else {
          slick.$nextArrow.find("span").text(nextName);
          slick.$prevArrow.find("span").text(prevName);
        }
      });

      offersSlider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        prevArrow:
          '<button class="prev"><svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M9 0.147461L11.0625 2.20995L2.06253 11.2099L3.78246e-05 9.14742L9 0.147461Z" fill="white"/><path d="M3.78246e-05 9.14742L2.06253 7.08493L11.0625 16.0849L9 18.1474L3.78246e-05 9.14742Z" fill="white"/></g></svg><span class="arrow-title"></span></button>',
        nextArrow:
          '<button class="next"><svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 18.1475L0.937508 16.085L9.93747 7.08501L12 9.1475L3 18.1475Z" fill="white"/><path d="M12 9.1475L9.93747 11.21L0.937508 2.21003L3 0.147536L12 9.1475Z" fill="white"/></svg><span class="arrow-title"></span></button>',
        dots: false,
        centerMode: true,
        variableWidth: true,
        initialSlide: 1,
      });
    },
    init: function () {
      Sliders.initReviewsSlider();
      Sliders.initOffersSlider();
    },
  };
})();

export default Sliders;
