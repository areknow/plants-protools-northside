// ====================================================================
// Home - js
// 
// Scripts for the home page
// ====================================================================

(function() {

  // Instafeed options
  var feed = new Instafeed({
    get: 'user',
    limit: isMobile() ? 10 : 15,
    userId: '313147593',
    resolution: 'standard_resolution',
    template: '<a class="col two-point-four" href="{{link}}" target="_blank">' +
                '<div class="tile" style="background-image: url({{image}})"></div>' +
              '</a>',
    accessToken: '313147593.1677ed0.0b0c421a001047cfae06b1fb06968527',
    before() {
      $('.feed-loader').show();
    },
    after() {
      tileHeight()
      setTimeout(() => {
        $('.feed-loader').hide();
      }, 5000);
      if (!feed.hasNext()) {
        $('#instafeed').addClass('no-next');
      }
    }
  });

  // ============================================
  // Document ready
  // ============================================
  $(function() {

    // First time insta load
    feed.run();

    // Owl slider load
    $(".owl-carousel").owlCarousel({
      items: 1,
      dots: true,
      loop: true
    });

  });// end document ready

  // ============================================
  // Window scroll function
  // ============================================
  $(window).scroll(function() {
    // If window reaches bottom - 100
    if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
      // Load more for instafeed
      feed.next();
    }
  });

  // ============================================
  // Set the tile height equal to width
  // ============================================
  function tileHeight() {
    var tileWidth = $('#instafeed .tile').width();
    $('#instafeed .tile').height(tileWidth);
  }

  // ============================================
  // Check if screen size is less than 600
  // ============================================
  function isMobile() {
    if(window.innerWidth < 600) {
      return true;
    }
  }


})();
