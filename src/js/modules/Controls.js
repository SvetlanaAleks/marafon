const Controls = (function () {
  "use strict";
  const kit = $(".js-kit");
  const orderButton = $(".js-btn-form");
  const linkToTarget = $(".js-scroll");
  return {
    scrollToTarget: function () {
      linkToTarget.click(function (e) {
        e.preventDefault();
        const _this = $(this);
        const target = _this.attr("data-target");
        $("html, body").animate(
          {
            scrollTop: $(target).offset().top,
          },
          800
        );
      });
    },
    backlightActiveKit: function () {
      const activeKit = $(`.js-kit.active`);
      kit.find(".js-btn-form").addClass("disabled");
      activeKit.find(".js-btn-form").removeClass("disabled");
    },
    orderKit: function () {
      orderButton.click(function (e) {
        e.preventDefault();
        const _this = $(this);
        const parent = _this.parents(".js-kit");
        kit.removeClass("active").removeClass("order");
        $(".js-success").removeClass("active");
        orderButton.addClass("disabled");

        parent.addClass("order").addClass("active");

        parent.find(".js-btn-form").removeClass("disabled");
      });
    },
    init: function () {
      Controls.backlightActiveKit();
      Controls.orderKit();
      Controls.scrollToTarget();
    },
  };
})();

export default Controls;
