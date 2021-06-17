const pathname = document.location.pathname;

for (let i = 0; i < 1000; i++) {
  if ( pathname === '/dashboard' || pathname === `/page/comment/${i}` || pathname === `/profile/${i}`) {
    $('.dash').css('display', 'none');
    $('.home').css('display', 'block');
    $('.title').css('right', '0px');
  }
}

if ( pathname === '/redirect') {
  $('.navigation').css('display', 'none');
}