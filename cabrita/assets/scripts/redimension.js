var initialized = false; // Controla si se ha aplicado el primer resize
var widthPercent = 1.7765; // Porcentaje que el width es mayor que el height
var heightPercent = 0.5628; // Porcentaje que el height es mayor que el width


// $(document).ready(function () {
//   if (screen && screen.width > 600) {
//     console.log("resize");
//     resizeCast();
//   }
//   $(window).resize(function (e) {
//     resizeCast();
//   })
// })

$(document).ready(function () {
  resizeCast();
  $(window).resize(function (e) {
    resizeCast();
  })
})

function resizeCast() {
  var mainContainer = $('.main-container')
  var castContainer = $('.video-primary-iframe');
  var castContainerCabra = $('.video-secondary-iframe');
  var castContainerChat = $('.chat-iframe');
  var availableHeight = $(window).height() - 46;
  var availableWidth = mainContainer.width() * 0.8;

  var newHeight = availableWidth * heightPercent;
  
  if (newHeight < availableHeight) {
    castContainer.width(availableWidth);
    castContainer.height(newHeight);

    castContainerChat.height(newHeight);

    castContainerCabra.width(availableWidth * 0.165);
    castContainerCabra.height(newHeight * 0.165);

    castContainerCabra.css('margin-top', newHeight * 0.165 * -1);
  } else {
    castContainer.height(availableHeight);
    castContainer.width(availableHeight * widthPercent);

    castContainerChat.height(availableHeight);

    castContainerCabra.height(availableHeight * 0.165 );
    castContainerCabra.width(availableHeight * widthPercent * 0.165);

    castContainerCabra.css('margin-top', availableHeight * 0.165 * -1);
  }
}