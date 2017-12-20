
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="content-type" content="text/html; charset=UTF-8">
  <meta name="robots" content="noindex, nofollow">
  <meta name="googlebot" content="noindex, nofollow">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  
  

  
  
  

  

  <script type="text/javascript" src="/js/lib/dummy.js"></script>

  

  
    <link rel="stylesheet" type="text/css" href="/css/normalize.css">
  

  

  
    <link rel="stylesheet" type="text/css" href="/css/result-light.css">
  

  

  <style type="text/css">
    video, input {
    display: block;
}

input {
    width: 100%;       
}

.info {
    background-color: aqua;            
}

.error {
    background-color: red;
    color: white;
}

  </style>

  <title>HTML5 local video file player example by dsbonev</title>

  
    




<script type='text/javascript'>//<![CDATA[
window.onload=function(){
(function localFileVideoPlayer() {
	'use strict'
  var URL = window.URL || window.webkitURL
  var displayMessage = function (message, isError) {
    var element = document.querySelector('#message')
    element.innerHTML = message
    element.className = isError ? 'error' : 'info'
  }
  var playSelectedFile = function (event) {
    var file = this.files[0]
    var type = file.type
    var videoNode = document.querySelector('video')
    var canPlay = videoNode.canPlayType(type)
    if (canPlay === '') canPlay = 'no'
    var message = 'Can play type "' + type + '": ' + canPlay
    var isError = canPlay === 'no'
    displayMessage(message, isError)

    if (isError) {
      return
    }

    var fileURL = URL.createObjectURL(file)
    videoNode.src = fileURL
  }
  var inputNode = document.querySelector('input')
  inputNode.addEventListener('change', playSelectedFile, false)
})()
}//]]> 

</script>

  
</head>

<body>
  <h1>HTML5 local video file player example</h1>
<div id="message"></div>
<input type="file" accept="video/*"/>
<video controls autoplay></video>

  
  <script>
  // tell the embed parent frame the height of the content
  if (window.parent && window.parent.parent){
    window.parent.parent.postMessage(["resultsFrame", {
      height: document.body.getBoundingClientRect().height,
      slug: "cCCZ2"
    }], "*")
  }
</script>

</body>

</html>

