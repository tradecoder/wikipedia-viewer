// code by thetradecoder, tradecoder

$(document).ready(function(){
  $('.glyphicon-search').click(function(){
    $('.ground').html('');
    var topic = $('.inp').val();
    $.getJSON('https://en.wikipedia.org/w/api.php?action=opensearch&search=' + topic + '&callback=?', function(json) {
     // $('.test').html(JSON.stringify(json)); // data testing
      // console.log(json)
      
      for (var i =0; i<json[1].length; i++){
        var title = json[1][i];
        var info = json[2][i];
        var link = json[3][i];
        var connection = '<a href="' + link + '" target="_blank"><p>' + '<b>'+ title+':</b>' + '<br/>' + info + '</p></a>';
        var fail = 'search result not found'
        $('#sbox').removeClass('div-search');
        $('body').addClass('bb');
        $('#change').addClass('top');
        $('.ground').append(connection);
         
                
      }//closing for 
          
    }); //closing getjson
        
  }); // closing click
    
}); // closing .ready


