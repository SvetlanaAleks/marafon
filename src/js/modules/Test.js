const Test = (function () {
  "use strict";
  const btnNextStepTest = $(".js-btn-next-step");
  const btnPrevStepTest = $(".js-btn-prev-step");
  const stepTest = $(".js-step-test");
  const progress = $(".js-progress");
  let step = 1;
  const stepsCount = stepTest.length;

  for (let i = 0; i <= stepTest.length; i++) {
    const stepBlock = $(stepTest[i]);
    stepBlock.attr("id", i + 1);
  }

  function showActiveStep(step) {
    const nextActiveStepTest = $(`.js-step-test#${step}`);
    stepTest.removeClass("active");
    nextActiveStepTest.addClass("active");
  }
  return {
    showNextStepTest: function () {
      btnNextStepTest.click(function (e) {
        e.preventDefault();
        step++;
        showActiveStep(step);

        //Перевіряємо чи показувати стрілку "назад"
        Test.checkShowArrowPrevStep();

        Test.showProgressLine(step);
      });
    },
    checkShowArrowPrevStep: function () {
      if (step >= 2) {
        btnPrevStepTest.addClass("active");
      } else {
        btnPrevStepTest.removeClass("active");
      }
    },
    showPrevStepTest: function () {
      btnPrevStepTest.click(function (e) {
        e.preventDefault();
        step--;
        //Перевіряємо чи показувати стрілку "назад"
        Test.checkShowArrowPrevStep();

        Test.showProgressLine(step);

        showActiveStep(step);
      });
    },
    showProgressLine: function (step) {
      progress.css({
        width: `${(100 / stepsCount) * step}%`,
      });
    },
    changeChecked: function () {
      $(".checkbox__input").change(function (e) {
        e.preventDefault();
        const _this = $(this);
        const parents = _this.parents(`.js-step-test`);
        const button = parents.find(".js-btn-next-step");
        const checkboxList = parents.find("input:checked");
        if (!checkboxList) {
          return;
        }
        if (checkboxList.length >= 1) {
          button.attr("disabled", false);
        } else {
          button.attr("disabled", true);
        }
      });
    },
    changeInput: function () {
      $(".step-test__input").on("input", function () {
        const _this = $(this);
        const parents = _this.parents(`.js-step-test`);
        const button = parents.find("button");
        const inputs = parents.find(".step-test__input");
        if (!inputs.length) {
          return;
        }
        let isValid = true;
        inputs.each((index, item) => {
          const value = $(item).val().trim();
          if (!value) {
            isValid = false;
          }
        });

        button.attr("disabled", !isValid);
      });
    },
    validateInput: function () {
      console.log("check");
      const year = document.getElementById("year");
      const yearMask = IMask(year, {
        mask: "YY",
        blocks: {
          YY: {
            mask: IMask.MaskedRange,
            from: 1854,
            to: 2004,
          },
        },
      });
      yearMask.on("accept", function () {
        year.classList.add("error");
      });
      yearMask.on("complete", function () {
        year.classList.remove("error");
      });

      const height = document.getElementById("height");
      const heightMask = IMask(height, {
        mask: "sm",
        blocks: {
          sm: {
            mask: IMask.MaskedRange,
            from: 60,
            to: 250,
          },
        },
      });
      heightMask.on("accept", function () {
        height.classList.add("error");
      });
      heightMask.on("complete", function () {
        height.classList.remove("error");
      });
    },
    init: function () {
      Test.showNextStepTest();
      Test.showPrevStepTest();
      Test.showProgressLine(step);
      Test.changeChecked();
      Test.changeInput();
    },
  };
})();

export default Test;
