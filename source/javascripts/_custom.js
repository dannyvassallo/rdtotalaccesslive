$(function() {
  $.ajax({
    type: 'GET',
    url: "https://jsonp.nodejitsu.com/?callback=?&url=https://new.livestream.com/api/accounts/7187039/events/4134883/viewing_info",
    dataType: 'jsonp',
    success: function (jsonp){
      // parse the JSON data on success
      if(jsonp["streamInfo"] == null){
        $("#livestream").addClass("hidden");
        $("#soon").removeClass("hidden");
      }
      else{
        $("#livestream").removeClass("hidden");
        $("#soon").addClass("hidden");
      }
    }
  });
});
