$(function(){
  // メインビジュアルをカルーセルにする
  $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    infinite: true,
    arrows: false,
    fade: true,
    speed: 1500,
  });

  // リンクのホバー時に不透明度をアニメーションで変更する
  $('.link').on('mouseover', function(){
    $(this).animate({
      opacity: 0.5,
    }, 500);
  });
  $('.link').on('mouseout', function(){
    $(this).animate({
      opacity: 1.0,
    }, 500);
  });

  // スクロールしたときにTOPに戻るボタンを表示させる
  $(window).scroll(function(){
    let scrollValue = $(this).scrollTop();

    if (scrollValue > 100) {
      $('.backBtn').fadeIn();
    } else {
      $('.backBtn').fadeOut();
    }
  });

  // TOPボタンを押した際になめらかにTOPへスクロールする
  $('.backBtn').on('click', function(event){
    event.preventDefault();

    $('html, body').animate({
      scrollTop: 0,
    }, 1000);
  })

  // ページ内リンクのスクロールをなめらかにする
  $('a[href^="#"]').on('click', function(){

    let href = $(this).attr('href');
    let position = $(href).offset().top;

    $('html, body').animate({
      scrollTop: position,
    }, 1000);
  });

  // スクロールしたときにセクションをフェードインさせる
 $(window).scroll(function(){
  let titlescroll = $(this).scrollTop();
  let windowHeight = $(window).height();
  let aboutPlace = $('#about').offset().top;
  let worksPlace = $('#works').offset().top;

  if ((titlescroll + windowHeight) >= aboutPlace) {
    $('#about').animate({
      opacity: 1,
    }, 500);
  }

  if((titlescroll + windowHeight) >= worksPlace) {
    $('#works').animate({
      opacity: 1,
    }, 500);
  }
 });

  //  Worksの画像をクリックしたときにモーダルで拡大表示する
  $('.works-photo').on('click', function(){

    let imgsrc = $(this).attr('src');

    $('.modal-img').attr('src', imgsrc);
    $('.modal').fadeIn();
  });

  $('.modal-close').on('click', function(){
    $('.modal').fadeOut();
  });
  
});