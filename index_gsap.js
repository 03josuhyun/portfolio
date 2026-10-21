document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(SplitText);
  const introTitle = document.querySelector('.intro_title');
  const introTxt01 = document.querySelector('.intro_txt01');
  const introTxt02 = document.querySelector('.intro_txt02');
  const introText = document.querySelector('.intro_text');
  const split01 = new SplitText(introTxt01, { type: 'chars' });
  const split02 = new SplitText(introTxt02, { type: 'chars' });
  const split03 = new SplitText(introText, { type: 'chars' });
  const timeLineTxt = gsap.timeline();
  timeLineTxt.from(
    introTitle, {
    duration: 1,
  })
    .from(split01.chars, {
      opacity: 0,
      duration: 0.05,
      stagger: 0.05
    })
    .from(split02.chars, {
      opacity: 0,
      duration: 0.05,
      stagger: 0.05
    })
    .from(split03.chars, {
      opacity: 0,
      duration: 0.05,
      stagger: 0.05
    });


  const introTree01 = document.querySelector('.first_tree');
  const introTree02 = document.querySelector('.second_tree');
  const introTree03 = document.querySelector('.third_tree');
  const introTree04 = document.querySelector('.four_tree');
  const introTree05 = document.querySelector('.fix_tree');
  const timeLine = gsap.timeline();
  timeLine.from(
    introTree05, {
    opacity: 0,
    ease: 'power2.out',
    stagger: 0.04
  })
    .from(introTree04, {
      opacity: 0,
      ease: 'power2.out',
      stagger: 0.04
    })
    .from(introTree03, {
      opacity: 0,
      ease: 'power2.out',
      stagger: 0.04
    })
    .from(introTree02, {
      opacity: 0,
      ease: 'power2.out',
      stagger: 0.04
    })
    .from(introTree01, {
      opacity: 0,
      ease: 'power2.out',
      stagger: 0.04
    });

  const aboutTitle = document.querySelector('.about_title');
  const myName = document.querySelector('.myname');
  const profile = document.querySelector('.profile');
  const myImage = document.querySelector('.myimage');
  const timeLine01 = gsap.timeline({ paused: true });
  timeLine01.from(
    aboutTitle, {
    y: -90,
  })
    .from(myName, {
      y: -200,
    })
    .from(profile, {
      opacity: 0,
      stagger: 0.1,
    });

  const skillTitle = document.querySelector('.skills_title');
  const skill = document.querySelector('.skill');
  const skillName = document.querySelectorAll('.skills01_tab li');
  const timeLine02 = gsap.timeline({ paused: true });
  timeLine02.from(
    skillTitle, {
    y: -100,
    duration: 1.5,
  })
    .from(skill, {
      opacity: 0,
      duration: 1.5,
    });

  skillName.forEach(function (item) {
    item.addEventListener('click', function () {
      gsap.to(item, {
        y: -10,
        duration: 0.1,
        yoyo: true,
        repeat: 1
      });

    });

  });

  const projectTitle = document.querySelector('.project_title');
  const projectBox = document.querySelector('.project_cover');
  const timeLine03 = gsap.timeline({ paused: true });
  timeLine03.from(
    projectTitle, {
    y: -90,
  })
    .from(projectBox, {
      opacity: 0,
    });

  const contactTitle = document.querySelector('.contact_title');
  const contactTxt = document.querySelector('.contact_txt');
  const contactImage = document.querySelector('.contact_img');
  const contactImg = document.querySelector('.contact_image');

  const contactText = document.querySelector('.contact_text');

  const split04 = new SplitText(contactText, { type: 'chars' });
  const timeLine04 = gsap.timeline({ paused: true });

  timeLine04.from(
    contactTitle, {
    y: -90,
    stagger: 0.5
  })
    .from(contactTxt, {
      opacity: 0,
      stagger: 0.6
    })
    .from(contactImage, {
      opacity: 0,
      stagger: 0.5
    })
    .from(contactImg, {
      opacity: 0,
      stagger: 0.5
    })
    .from(split04.chars, {
      opacity: 0,
      ease: 'power4.out',
      stagger: 0.04
    });

  let introDone = false;
  let aboutDone = false;
  let skillsDone = false;
  let projectDone = false;
  let contactDone = false;
  $(window).on('scroll', function () {
    let scrollTop = $(window).scrollTop();

    if (scrollTop >= $('.intro_box').offset().top - 300 && introDone === false) {
      timeLineTxt.restart();
      timeLine.restart();
      introDone = true;
    }
    if (scrollTop >= $('.about_box').offset().top - 300 && aboutDone === false) {
      timeLine01.restart();
      aboutDone = true;
    }
    if (scrollTop >= $('.skills_box').offset().top - 300 && skillsDone === false) {
      timeLine02.restart();
      skillsDone = true;
    }
    if (scrollTop >= $('.project_box').offset().top - 300 && projectDone === false) {
      timeLine03.restart();
      projectDone = true;
    }
    if (scrollTop >= $('.contact_box').offset().top - 300 && contactDone === false) {
      timeLine04.restart();
      contactDone = true;
    }
  });
});