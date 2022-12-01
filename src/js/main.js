// objectFitImages polyfill
import objectFitImages from "object-fit-images";
// import IMask from "imask";
// Main JS module
import Popup from "./modules/Popup";
import Test from "./modules/Test";
import Sliders from "./modules/Sliders";
import Controls from "./modules/Controls";
import Form from "./modules/Form";
import ScrollSection from "./modules/ScrollSection";

$(function () {
  objectFitImages();
  Popup.init();
  Test.init();
  Sliders.init();
  Controls.init();
  Form.init();
});
