$(".sticky-header").slideUp(1);
$(".mobile-sticky").slideUp(1);
$(window).scroll(function(){
    if ($(window).scrollTop() >= 250) {
        $(".sticky-header").slideDown(1000);
    }
    else {
        $(".sticky-header").slideUp(1);
    }
    if ($(window).scrollTop() >= 80 ) {

        $(".mobile-sticky").slideDown(1000);
    }
    else {
        $(".mobile-sticky").slideUp(1);

    }
});

$("#categories").click(function(){
  $("#panel").slideToggle("slow");
})
const delay = 5000; //ms
try{
const slides = document.querySelector(".slides");
const slidesCount = slides.childElementCount;
const maxLeft = (slidesCount - 1) * 100 * -1;
}catch{}
let current = 0;

function changeSlide(next = true) {
  if (next) {
    current += current > maxLeft ? -100 : current * -1;
  } else {
    current = current < 0 ? current + 100 : maxLeft;
  }

  slides.style.left = current + "%";
}

let autoChange = setInterval(changeSlide, delay);
const restart = function() {
  clearInterval(autoChange);
  autoChange = setInterval(changeSlide, delay);
};
try{
// Controls
document.querySelector(".next-slide").addEventListener("click", function() {
  changeSlide();
  restart();
});

document.querySelector(".prev-slide").addEventListener("click", function() {
  changeSlide(false);
  restart();
});
}catch{}
$('.search-pan-img img').click(function(e) {
  e.preventDefault();
  $('.search-pan-img img').removeClass('search-img-select');
  $(this).addClass('search-img-select');
})
$('.search-pan-setting p').click(function(e) {
  e.preventDefault();
  $('.search-pan-setting p').removeClass('search-active');
  $(this).addClass('search-active');

  if ($('#one').hasClass('search-active')) {
    $('.one-select').removeClass('d-none');
    $('.two-select').addClass('d-none');
  }else if ($('#two').hasClass('search-active')) {
    $('.one-select').addClass('d-none');
    $('.two-select').removeClass('d-none');
  }
  
  if ($('#onemob').hasClass('search-active')) {
    $('.onemob-select').removeClass('d-none');
    $('.twomob-select').addClass('d-none');
  }else if ($('#twomob').hasClass('search-active')) {
    $('.onemob-select').addClass('d-none');
    $('.twomob-select').removeClass('d-none');
  }
})

$('.best-sell-menu li a').click(function(e) {
  e.preventDefault();
  $('.best-sell-menu li a').removeClass('best-sell-active');
  $(this).addClass('best-sell-active');
});

const buttonRight = document.getElementById('slideright');
const buttonLeft = document.getElementById('slideleft');
const SalebuttonRight = document.getElementById('saleslideright');
const SalebuttonLeft = document.getElementById('saleslideleft');
try{
buttonRight.onclick = function () {
  console.log('brand')
  $("#ul-scroll").animate(
    { scrollLeft: document.getElementById('ul-scroll').scrollLeft + 150 }, 1000);
};
buttonLeft.onclick = function () {
  console.log('brand')
  $("#ul-scroll").animate(
    { scrollLeft: document.getElementById('ul-scroll').scrollLeft - 150 }, 1000);
};

// buttonLeft.onclick = function () {
//   document.getElementById('ul-scroll').scrollLeft -= 150;
// }
SalebuttonRight.onclick = function () {
  $("#ul-scroll-sale").animate(
    { scrollLeft: document.getElementById('ul-scroll-sale').scrollLeft + 450 }, 1000);
};
SalebuttonLeft.onclick = function () {
  $("#ul-scroll-sale").animate(
    { scrollLeft: document.getElementById('ul-scroll-sale').scrollLeft - 450 }, 1000);
};
}catch{}

$('.best-sell-body li').mouseenter(function() {
  $(this).find('.price p').fadeOut(0,()=>{
    $(this).find('.sell-btn').fadeIn(250);
  })
  
})
$('.best-sell-body li').mouseleave(function() {
  $(this).find('.sell-btn').fadeOut(0,()=>{
    $(this).find('.price p').fadeIn(250);
  })
  

})
$('.sale-li').mouseenter(function() {
  $(this).find('.price p').fadeOut(0,()=>{
    $(this).find('.sell-btn').fadeIn(250);
  });

});
$('.sale-li').mouseleave(function() {
  $(this).find('.sell-btn').fadeOut(0,()=>{
    $(this).find('.price p').fadeIn(250);
  });
});

$('.sale-main').mouseenter(function() {
  $(this).find('.price p').fadeOut(0,()=>{
    $(this).find('.multi-sale-btn').fadeIn(250);
  })
})
$('.sale-multi-item').mouseleave(function() {
  $(this).find('.multi-sale-btn').fadeOut(200,()=>{
    $(this).find('.price p').fadeIn(250);
  })
})
$(".play").click(function() {
  $(this).addClass('d-none');
  $('#video').get(0).play();
})
$('video').click(function() {
  $(".play").toggleClass('d-none');

})
$('video').on('ended',function(){
  $(".play").removeClass('d-none');

});

// ---------------- brand - about us -----------------------------
const BrandbuttonRight = document.getElementById('brandright');
const BrandbuttonLeft = document.getElementById('brandleft');
BrandbuttonRight.onclick = function () {
console.log('brand')
$("#ul-brand-scroll").animate(
    { scrollLeft: document.getElementById('ul-brand-scroll').scrollLeft + 100 }, 1000);
};
BrandbuttonLeft.onclick = function () {
console.log('brand left')
$("#ul-brand-scroll").animate(
    { scrollLeft: document.getElementById('ul-brand-scroll').scrollLeft - 100 }, 1000);
};
// ------------------------------------end brand ------------