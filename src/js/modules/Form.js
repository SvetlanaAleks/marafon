import { DOC } from "../global/constants";
const Form = (function () {
  "use strict";
  return {
    onSignUpFormSubmit: function () {
      DOC.on("submit", "#form", function (e) {
        e.preventDefault();
        const _this = $(this);
        const action = _this.attr("action");
        const parent = _this.parents(".js-kit");
        const success = parent.find(".js-success");
        $.ajax({
          url: action,
          type: "POST",
          contentType: false,
          processData: false,
          data: new FormData(this),
          success: function () {
            success.addClass("active");
          },
        });
      });
    },
    closeSuccess: function () {
      $(".js-close-success").click(function (e) {
        e.preventDefault();
        const _this = $(this);
        const parent = _this.parents(".js-kit");
        const success = parent.find(".js-success");
        success.removeClass("active");
        parent.removeClass("order");
      });
    },
    init: function () {
      Form.onSignUpFormSubmit();
      Form.closeSuccess();
    },
  };
})();

export default Form;
