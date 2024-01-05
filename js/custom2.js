$(window).on("load", function () {
  "use strict";
  $("#preloader").delay(350).fadeOut("slow"),
    (/Chrome/.test(navigator.userAgent) &&
      /Google Inc/.test(navigator.vendor)) ||
      ((document.getElementsByClassName("infinityChrome")[0].style.display =
        "none"),
      (document.getElementsByClassName("infinity")[0].style.display = "block")),
    setTimeout(function () {
      new WOW().init();
    }, 0);
  var e = [200, 400, 600, 800, 1e3, 1200, 1400, 1600, 1800, 2e3];
  if (
    ($(".blog-item.wow").each(function (t) {
      $(this).attr("data-wow-delay", void 0 === e[t] ? "200ms" : e[t] + "ms");
    }),
    $(".menu-icon button").on("click", function () {
      $(
        "header.desktop-header-1, main.content, header.mobile-header-1"
      ).toggleClass("open");
    }),
    $("main.content").on("click", function () {
      $(
        "header.desktop-header-1, main.content, header.mobile-header-1"
      ).removeClass("open");
    }),
    $(".vertical-menu li a").on("click", function () {
      $(
        "header.desktop-header-1, main.content, header.mobile-header-1"
      ).removeClass("open");
    }),
    $(".menu-icon button").on("click", function () {
      $(
        "header.desktop-header-2, main.content-2, header.mobile-header-2"
      ).toggleClass("open");
    }),
    $("main.content-2").on("click", function () {
      $(
        "header.desktop-header-2, main.content-2, header.mobile-header-2"
      ).removeClass("open");
    }),
    $(".vertical-menu li a").on("click", function () {
      $(
        "header.desktop-header-2, main.content-2, header.mobile-header-2"
      ).removeClass("open");
    }),
    $('a[href^="#"]:not([href="#"]').on("click", function (e) {
      var t = $(this);
      $("html, body")
        .stop()
        .animate(
          { scrollTop: $(t.attr("href")).offset().top },
          800,
          "easeInOutQuad"
        ),
        e.preventDefault();
    }),
    $(".parallax").length > 0)
  ) {
    var t = $(".parallax").get(0);
    new Parallax(t, { relativeInput: !0 });
  }
  if (
    ($(".text-rotating").Morphext({
      animation: "rollIn",
      separator: ",",
      speed: 4e3,
      complete: function () {},
    }),
    $(".vertical-menu li a").addClass("nav-link"),
    $("body").scrollspy({ target: ".scrollspy" }),
    $(".skill-item").length > 0)
  )
    new Waypoint({
      element: document.getElementsByClassName("skill-item"),
      handler: function (e) {
        $(".progress-bar").each(function () {
          var e = $(this).attr("aria-valuenow") + "%";
          $(this).animate({ width: e }, { easing: "linear" });
        }),
          this.destroy();
      },
      offset: "80%",
    });
  for (
    var n = document.getElementsByClassName("spacer"), a = 0;
    a < n.length;
    a++
  ) {
    var o = n[a].getAttribute("data-height");
    n[a].style.height = o + "px";
  }
  for (
    n = document.getElementsByClassName("data-background"), a = 0;
    a < n.length;
    a++
  ) {
    var l = n[a].getAttribute("data-color");
    n[a].style.backgroundColor = "" + l;
  }
  $(window).scroll(function () {
    $(this).scrollTop() >= 350
      ? $("#return-to-top").fadeIn(200)
      : $("#return-to-top").fadeOut(200);
  }),
    $("#return-to-top").on("click", function (e) {
      e.preventDefault(), $("body,html").animate({ scrollTop: 0 }, 400);
    });
});

window.onload = (event) => {
  firebase
    .firestore()
    .collection("portfolio")
    .get()
    .then((docs) => {
      docs.forEach((doc) => {
        createImage(doc.data().image)
        console.log(doc.data());
      });
    })
    .catch((error) => {
      console.log(error);
    });
  console.log("page is fully loaded");
};


var modal = document.getElementById("myModal");
// When the user clicks on <span> (x), close the modal
modal.onclick = function () {
  imageModal.className += " out";
  setTimeout(function () {
    modal.style.display = "none";
    imageModal.className = "modal-content";
  }, 400);
};

function createImage(image) {
  var img = document.createElement("img");
  var modalImg = document.getElementById("imageModal");
  var box = document.getElementById("box");
  var modal = document.getElementById("myModal");
  img.classList.add("portimage");
  img.src = image;
  box.appendChild(img);
  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  };
}
