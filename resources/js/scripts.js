$(document).ready(
  function(){
    $('.about-section').waypoint(
      function(direction){
        if(direction == "down"){
          $('nav').addClass('scroll');
        }else{
          $('nav').removeClass('scroll');
        }
      }, {
        offset: '600px'
      }
    )
    // mobile navigation
    $('.mobile-nav').click(
      function(){
        $('.main-nav').slideToggle(200); //display: none -> block
        if($('.mobile-nav').hasClass('fa-bars')){
          $('.mobile-nav').addClass('fa-times');
          $('.mobile-nav').removeClass('fa-bars');
        }
        else{
          $('.mobile-nav').removeClass('fa-times');
          $('.mobile-nav').addClass('fa-bars');
        }
      }
    )
    
  }
)


document.querySelectorAll('a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
