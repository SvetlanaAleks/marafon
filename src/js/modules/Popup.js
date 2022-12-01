import noScroll from "../global/noScroll";
const Popup = (function () {
  "use strict";
  const popUpBlock = $(".js-popup");
  const linkShowPopUp = $(".js-show-popup");
  const overlay = $(".js-overlay");

  return {
    initPopUp: function () {
      linkShowPopUp.click(function (e) {
        e.preventDefault();
        const _this = $(this);
        if ($("#popup-test").hasClass("active")) {
          $("#popup-test").removeClass("active");
        }
        linkShowPopUp.removeClass("active");
        _this.addClass("active");
        const target = $(_this.data("target"));
        target.addClass("active");
        overlay.addClass("active");
        noScroll.on();
      });
    },
    closePopup: function () {
      $(".js-close").click(function (e) {
        e.preventDefault();
        popUpBlock.removeClass("active");
        overlay.removeClass("active");
        noScroll.off();
      });
    },
    init: function () {
      Popup.initPopUp();
      Popup.closePopup();
    },
  };
})();

export default Popup;
