$(document).ready(function(){
  var shopSlider = $('#shopSlider');

     shopSlider.owlCarousel({
      
      loop : true,
      dots : false,
      margin: 2,
     smartSpeed: 500,
     responsive: {
       0 : {
         items: 1
       },
       1254 : {
         items: 3
       }
     } 
      });



// Go to the previous item
$('#shopSliderLeft').click(function(event) {
  event.preventDefault();
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    shopSlider.trigger('prev.owl.carousel');
})


// Go to the next item
$('#shopSliderRight').click(function(event) {
  event.preventDefault();

    shopSlider.trigger('next.owl.carousel');
})



// headerSlider.on('initialize.owl.carousel initialized.owl.carousel', function(event){
// 	$('.slide__controls__number__active').text(event.item.index + 1);
// 	$('.slide__controls__number__total').text(event.item.count);

// });






// headerSlider.on('changed.owl.carousel', function(event){
// 	$('.slide__controls__number__active').text(event.item.index + 1);
// 	$('.slide__controls__number__total').text(event.item.count);

// });



});