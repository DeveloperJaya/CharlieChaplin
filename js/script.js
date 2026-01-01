$(document).ready(function () {
function walkLoop() {
  $(".chaplin")
    .css({ left: "-160px" })
    .animate({ left: "45%" }, 7000, "linear", walkLoop);
}
walkLoop();

setInterval(() => {
  $(".eye").animate({ height: "2px" }, 100).animate({ height: "10px" }, 100);
}, 2600);

setInterval(() => {
  $(".leg.left").animate({ rotate: "18deg" }, 200).animate({ rotate: "-18deg" }, 200);
  $(".leg.right").animate({ rotate: "-18deg" }, 200).animate({ rotate: "18deg" }, 200);
}, 400);

setInterval(() => {
  $(".cane").animate({ rotate: "10deg" }, 220)
            .animate({ rotate: "-10deg" }, 220)
            .animate({ rotate: "0deg" }, 220);
}, 550);
});
