/* ==========================================================================
Main Navbar
========================================================================== */

"use strict";

function initNavbar() {
  //Navbar fade
  if ($(".navbar-wrapper.navbar-fade.navbar-light").length) {
    $(".navbar-wrapper.navbar-fade").wrap(
      '<div class="navbar-placeholder"></div>'
    );
    $(".navbar-placeholder").height(
      jQuery(".navbar-wrapper.navbar-fade").outerHeight()
    );
    $(window).on("scroll", function () {
      var height = $(window).scrollTop();
      if (height > 65) {
        $(".navbar-wrapper.navbar-fade.is-transparent")
          .removeClass("is-transparent navbar-light")
          .addClass("navbar-faded");
      } else {
        $(".navbar-wrapper")
          .removeClass("navbar-faded")
          .addClass("is-transparent navbar-light");
      }
    });
  }

  //Navbar fade
  if ($(".navbar-wrapper.navbar-fade.navbar-default").length) {
    $(".navbar-wrapper.navbar-fade").wrap(
      '<div class="navbar-placeholder"></div>'
    );
    $(".navbar-placeholder").height(
      jQuery(".navbar-wrapper.navbar-fade").outerHeight()
    );
    $(window).on("scroll", function () {
      var height = $(window).scrollTop();
      if (height > 65) {
        $(".navbar-wrapper.navbar-fade.is-transparent")
          .removeClass("is-transparent")
          .addClass("navbar-faded");
      } else {
        $(".navbar-wrapper")
          .removeClass("navbar-faded")
          .addClass("is-transparent");
      }
    });
  }

  //Navbar Clone
  if ($(".is-cloned").length) {
    $(window).scroll(function () {
      var height = $(window).scrollTop();
      if (height > 50) {
        $(".is-cloned").addClass("is-active");
      } else {
        $(".is-cloned").removeClass("is-active");
      }
    });
  }

  //Toggle between light and dark logo when solid navbar comes in
  $(window).on("scroll", function () {
    var height = $(window).scrollTop();
    if (height > 80) {
      // $("img.light-logo").attr("src", "assets/img/logos/bulkit-logo.png");
    } else {
      //$("img.light-logo").attr("src", "assets/img/logos/bulkit-w.png");
    }
  });

  if ($(".navbar-light").length) {
    $(window).on("scroll", function () {
      var height = $(window).scrollTop();
      if (height > 80) {
        $(".button-signup").removeClass("light-btn").addClass("primary-btn");
      } else {
        $(".button-signup").removeClass("primary-btn").addClass("light-btn");
      }
    });
  }
}

function initMobileMenu() {
  $(".custom-burger").on("click", function () {
    $(this).toggleClass("is-active");
    if ($(this).closest(".navbar").find(".navbar-menu").hasClass("is-active")) {
      $(this).closest(".navbar").find(".navbar-menu").removeClass("is-active");
      $(this)
        .closest(".navbar-fade.navbar-light")
        .removeClass("is-dark-mobile");
    } else {
      $(this).closest(".navbar").find(".navbar-menu").addClass("is-active");
      $(this).closest(".navbar-fade.navbar-light").addClass("is-dark-mobile");
    }
    //Revert navbar to initial color state
    if ($(this).closest(".navbar-faded").hasClass("is-dark-mobile")) {
      $(this).closest(".navbar-faded").removeClass("is-dark-mobile");
    }
    $(this).closest(".navbar.is-static").toggleClass("is-dark-mobile");
  });

  $(".custom-burger").on("click", function () {
    $(this).find(".icon-box-toggle").toggleClass("active");
  });
}

/* ==========================================================================
Alternate Navbar
========================================================================== */

function initLandingNavbar() {
  $(window).on("scroll", function () {
    var height = $(window).scrollTop();
    if (height > 65) {
      $(".navbar-landing").removeClass("is-faded");
      $(".navbar-landing").removeClass("is-mobile");
    } else {
      $(".navbar-landing").addClass("is-faded");
      if ($(".navbar-landing .navbar-menu").hasClass("is-active")) {
        $(".navbar-landing").addClass("is-mobile");
      }
    }
  });
}

function initLandingMobileMenu() {
  $(".navbar-landing .navbar-burger").on("click", function () {
    var testHeight = $(window).scrollTop();
    $(this).toggleClass("is-active");

    if (testHeight < 65) {
      if ($(".navbar-landing .navbar-menu").hasClass("is-active")) {
        $(".navbar-landing .navbar-brand img").toggleClass("is-hidden");
        $(".navbar-landing .navbar-menu")
          .slideToggle()
          .removeClass("is-active");
        setTimeout(function () {
          $(".navbar-landing").removeClass("is-mobile");
        }, 400);
      } else {
        $(".navbar-landing .navbar-menu").slideToggle().addClass("is-active");
        $(".navbar.navbar-landing ").addClass("is-mobile");
        $(".navbar-landing .navbar-brand img").toggleClass("is-hidden");
      }
    } else {
      if ($(".navbar-landing .navbar-menu").hasClass("is-active")) {
        $(".navbar-landing .navbar-menu")
          .slideToggle()
          .removeClass("is-active");
      } else {
        $(".navbar-landing .navbar-menu").slideToggle().addClass("is-active");
      }
    }
  });
}

/* ==========================================================================
Commerce Navbar
========================================================================== */

function initEcommerceNavbar() {
  $(".is-cart .cart-button").on("click", function () {
    $(this).closest(".is-cart").find(".shopping-cart").addClass("is-active");
    setTimeout(function () {
      $(".is-cart .navbar-cart-loader").removeClass("is-active");
    }, 800);
  });

  $(".is-wishlist .wishlist-button").on("click", function () {
    $(this)
      .closest(".is-wishlist")
      .find(".shopping-wishlist")
      .addClass("is-active");
    setTimeout(function () {
      $(".is-wishlist .navbar-cart-loader").removeClass("is-active");
    }, 800);
  });

  $(document).click(function (e) {
    var target = e.target;
    if (
      !$(target).is(".is-cart .cart-button") &&
      !$(target).parents().is(".is-cart")
    ) {
      $(".shopping-cart").removeClass("is-active");
      setTimeout(function () {
        $(".is-cart .navbar-cart-loader").addClass("is-active");
      }, 300);
    }
  });

  $(document).click(function (e) {
    var target = e.target;
    if (
      !$(target).is(".is-wishlist .wishlist-button") &&
      !$(target).parents().is(".is-wishlist")
    ) {
      $(".shopping-wishlist").removeClass("is-active");
      setTimeout(function () {
        $(".is-wishlist .navbar-cart-loader").addClass("is-active");
      }, 300);
    }
  });
}
