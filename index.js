$(function () {

  if ($(window).scrollTop() === $('#intro_box').offset().top) {
    $('.gnb').hide();
  } else {
    $('.gnb').show();
  }

  let point = 0;

  function gnbOn(index) {
    $('.gnb ul li a').removeClass('on');
    $('.gnb ul li a').eq(index).addClass('on');
  }

  $('section').mousewheel(function (event, delta) {
    if (delta >= 0) {
      point = $(this).prev().offset().top;
    } else if (delta < 0) {
      point = $(this).next().offset().top;
    }

    $('html, body').stop().animate({
      scrollTop: point
    }, 500);

    if (point === $('#intro_box').offset().top) {
      $('.gnb').hide();
    } else {
      $('.gnb').show();

      if (point === $('.about_box').offset().top) {
        gnbOn(1);

      } else if (point === $('.skills_box').offset().top) {
        gnbOn(2);

      } else if (point === $('.project_box').offset().top) {
        gnbOn(3);

      } else if (point === $('.contact_box').offset().top) {
        gnbOn(4);
      }
    }


  });

  $('.gnb ul li a').on('click', function () {
    $('.gnb ul li a').removeClass('on');
    $(this).addClass('on');
  });


  let aboutPage = 1;

  $('.about_next').click(function () {

    if (aboutPage === 1) {
      $('.experience_box').show();
      $('.profile_box').hide();

      $('.about_page_num').text('2/2');

      aboutPage = 2;
    }

  });


  $('.about_before').click(function () {

    if (aboutPage === 2) {
      $('.profile_box').show();
      $('.experience_box').hide();

      $('.about_page_num').text('1/2');

      aboutPage = 1;
    }

  });
  $('.project_right').click(function () {
    $('.project_contents').animate({
      scrollLeft: '+=445'
    }, 500);
  });

  $('.project_left').click(function () {
    $('.project_contents').animate({
      scrollLeft: '-=445'
    }, 500);
  });

  const onTab = $('.skill_tab li');
  const onSheet = $('.skill_sheet>div');

  onTab.click(function () {
    onTab.removeClass('on_tab');
    $(this).addClass('on_tab');

    const index = $(this).index();

    onSheet.removeClass('on_sheet');
    onSheet.eq(index).addClass('on_sheet');
  });

  $('.skills01_tab').each(function () {
    const onTab01 = $(this).find('li');
    const onSheet01 = $(this).siblings('.skills01_sheet').find('>div');

    onTab01.click(function () {
      onTab01.removeClass('on_tab01');
      $(this).addClass('on_tab01');

      const index01 = $(this).index();

      onSheet01.removeClass('on_sheet01');
      onSheet01.eq(index01).addClass('on_sheet01');
    })
  });


});