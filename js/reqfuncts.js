function httpReq( url, callback ){
  var req = new XMLHttpRequest();
  req.open("GET", url, true);
  req.addEventListener('load',function(){
    callback( req.responseText );
  });
  req.send(null);
}

function jsonp(url, callback) {
    var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
    window[callbackName] = function(data) {
        delete window[callbackName];
        document.body.removeChild(script);
        callback(data);
    };

    var script = document.createElement('script');
    script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
    document.body.appendChild(script);
}
