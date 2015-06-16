(function($) {
  var init = function() {
    loadAlerts();
    loadPingdom();
    setTimeout(init, 10000);
  };
  var loadPingdom = function() {
    var src = $('#pingdom').attr('src');
    $('#pingdom').attr('src', src);
  }
  var loadAlerts = function() {
    $.getScript('http://csumbalerts.tumblr.com/api/read/json?_=' + Date.now() , function() {
      $('#it-alerts-wrapper').html('');
      var numberAlerts = 0;
      $.each(tumblr_api_read.posts, function() {
        if(($.inArray('urgent', this.tags) > -1 || $.inArray('active', this.tags) > -1) && this['regular-title']) {
          $('#it-alerts-wrapper').append('<a href="' + this.url +'"><h3>' + this['regular-title'] + '</h3></a>');
          $('#it-alerts-wrapper').append(this['regular-body']);
          numberAlerts++;
        }
      });
      if(!tumblr_api_read || !numberAlerts) {
        $('#it-alerts-wrapper').append('<div class="alert alert-success">Yay! No active alerts.</div>');
      }
    });
  };
  $(document).ready(init);
})(jQuery);
