  window.addEventListener('resize', addDataAttributeForMobile);
$(document).ready(function(){
  addDataAttributeForMobile();
  $("[data-slider]").each(function(){
    console.log($(this));
    customSlick($(this));
  })
})
 function addDataAttributeForMobile() {
            var targetDiv = document.getElementById('card--grid');

            // Check if the screen width is less than or equal to 600 pixels (you can adjust this value)
            if (window.innerWidth <= 600) {
                // Add the 'mobile-view' class if it's a mobile view
                targetDiv.setAttribute('data-slider',true);
            }else{
              targetDiv.removeAttribute('data-slider');
            }
        }
function customSlick(ele){
      let mobileSide = $(ele).attr('data-slide_mobile');
      mobileSide = Number(mobileSide);
      console.log("mobileSide",mobileSide);
      $(ele).not('.slick-initialized').slick({ 	
        dots: false,
        arrows:false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:false,
        centerMode:true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: mobileSide,
              slidesToScroll: mobileSide,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: mobileSide,
              slidesToScroll: mobileSide,
            }
          }

        ]
      });
		$('.slick-prev').html("<svg xmlns='http://www.w3.org/2000/svg' width='15' height='12' viewBox='0 0 6.591 11.061'><path d='M0,10,5,5,0,0' transform='translate(6.061 10.53) rotate(180)' fill='none' stroke='#383838' stroke-width='1.5'></path></svg>");
    	$('.slick-next').html('<svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 6.591 11.061"><path d="M0,10,5,5,0,0" transform="translate(0.53 0.53)" fill="none" stroke="#383838" stroke-width="1.5"></path></svg>');
    }