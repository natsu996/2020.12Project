   var swiper = new Swiper('.swiper-container', 
   	{
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        loop:true,
    });
