<!DOCTYPE html>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
<meta name="description" content="PWA in 15 mins code lab. Progressive Web App Code Lab"/>
  <link href='//fonts.googleapis.com/css?family=Marmelad' rel='stylesheet' type='text/css'>
  <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
<link rel="icon" type="image/png" href="https://mweb-demos.appspot.com/favicon-32x32.png" sizes="32x32" />
<link rel="icon" type="image/png" href="https://mweb-demos.appspot.com/favicon-16x16.png" sizes="16x16" />
<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
  <title>mWeb Demos</title>
  <!-- Global site tag (gtag.js) - Google Analytics -->
<script  src="https://www.googletagmanager.com/gtag/js?id=UA-112374941-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-112374941-1');
  
  function pageView(){
	  ga('send', 'pageview', location.pathname);
  }
  
</script>
  
</head>
<body onload="javascript:pageView()">
    <h1>PWA in 15 mins code lab</h1>

  <p>Short Link: <a href='https://goo.gl/hMHSMh'>https://goo.gl/hMHSMh</a> </p>
  <p>This is a quick code lab showing conversion of a sample ecommerse mWeb into a PWA supporting Offine experience and Add-to-homescreen. <a href='pwa-in-15.zip'>Download Source Code</a>
  </br>
   <div style="margin-top: 20px">
    <b>Snippet1: To be pasted in the placeholder 'Insert snippet1 here' at index.html</b>
    </div>
    </br>	
    	<div style="border: 3px solid #848484; margin-top: 20px;background-color: black; color: white;">
	<p >   if("serviceWorker" in navigator) {
					navigator.serviceWorker.register("sw.js").then(function(reg){
							console.log('ServiceWorker register with scope: ', reg.scope);
					}).catch(function(err) {
							console.log('ServiceWorker registration failed: ', err);
					});
			}


		});</p>
	</div>	
 
		</br>
     <b>Snippet2: To be pasted in the placeholder 'Insert snippet2 here' at index.html</b>
     </br>
     <div style="border: 3px solid #848484; margin-top: 20px;background-color: black; color: white;">
     &lt;link rel="manifest" href="./manifest.json"&gt;
     </div>
   </p>
  <table>
    <tr>
      <td colspan="2" style="font-weight:bold;">Available Links:</td>
    </tr>
  
      <tr>
      <td><a href='1/'>1: Simple e-commerse mWeb page</a></td>
    </tr>
    <tr><td><a href='2/'>2: Simple e-commerse PWA with Offline experience</a></td></tr>
     <tr><td><a href='3/'>3: Simple e-commerse PWA with Offline experience and add to home screen</a></td></tr>

  </table>

</body>
</html>
