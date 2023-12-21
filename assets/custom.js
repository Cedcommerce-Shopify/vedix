$(document).ready(function(){
customSlick();
})
function customSlick(){
      $('.customSlider').not('.slick-initialized').slick({ 	
        dots: false,
        arrows:true,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay:false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }

        ]
      });
		$('.slick-prev').html("<svg xmlns='http://www.w3.org/2000/svg' width='15' height='12' viewBox='0 0 6.591 11.061'><path d='M0,10,5,5,0,0' transform='translate(6.061 10.53) rotate(180)' fill='none' stroke='#383838' stroke-width='1.5'></path></svg>");
    	$('.slick-next').html('<svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 6.591 11.061"><path d="M0,10,5,5,0,0" transform="translate(0.53 0.53)" fill="none" stroke="#383838" stroke-width="1.5"></path></svg>');
    }