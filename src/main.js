// window.alert('안녕!');
// window.document.querySelector();
//window는 브라우저에서 제공하는 객체, 즉 글로벌 객체

// document는 문서 전체에 대한 정보를 갖고 있는 객체
// quearySelector를 이용해 css와 같은 방식으로 클래스를 선택

// const headerRect = header.getBoundingClientRect();
// console.log(headerRect);
// const headerHeight = headerRect.height;

'use strict';

// Header에 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  }
});

// Home 섹션을 아래로 스크롤 시 투명하게 처리함
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// 화살표 버튼이 home부분에서 50%까지 스크롤 되었을 때 나타남
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.style.opacity = 1;
  } else {
    arrowUp.style.opacity = 0;
  }
});

// Navbar 토글버튼 클릭 처리
const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');
navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

// Navbar 메뉴 클릭시 메뉴를 자동으로 닫아줌
navbarMenu.addEventListener('click', () => {
  navbarMenu.classList.remove('open');
});
