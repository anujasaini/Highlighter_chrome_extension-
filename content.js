(function(window, $, undefined){  


$('#create').on('click', function(event) { 


    var campaignInfo = {
        'name' : 'Anuja',
        'surname' : 'Saini'

    };
    var datastring = JSON.stringify(campaignInfo);

    chrome.runtime.sendMessage({
    method: 'POST',
    action: 'xhttp',
    url: 'http://localhost:8080/index.php',

    data: datastring
}); 

    console.log(campaignInfo);


  }); })(window, jQuery);