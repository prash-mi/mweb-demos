<!DOCTYPE html>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
<meta name="description" content="Mobile web (mweb) demos showing Google Payment request API with Tez (paisa) integration"/>
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
    <h1>mWeb Demos</h1>

  <p>Select a Demo. Source Code is publised at:<a href='https://github.com/prash-mi/mweb-demos'>https://github.com/prash-mi/mweb-demos</a> </p>
  <table>
    <tr>
      <td colspan="2" style="font-weight:bold;">Available Links:</td>
    </tr>
  
      <tr>
      <td><a href='payment-request/'>Payment Request Demo</a></td>
    </tr>
		<tr>
			<td><a href='payment-request-tez/'>Payment Request Demo with
					Tez (as single payment method)</a></td>
		</tr>
		<tr>
			<td><a href='payment-request-pwa/'>Payment Request Demo -
					PWA</a></td>
		</tr>
		<tr>
			<td><a href='payment-request-pwa-canmakepayment/'>Payment
					Request Demo - PWA (With canMakePayment method)</a></td>
		</tr>
		<tr>
			<td><a href='payment-request-tez-pwa/'>Payment Request Demo
					with Tez (as single payment method - PWA)</a></td>
		</tr>
		<tr>
			<td><a href='/amp/payment-request/'>Payment Request Demo
					with Tez (AMP - Work in progress!)</a></td>
		</tr>
		<tr>
			<td><a href='pwa-in-15/'>PWA in 15 mins code lab</a></td>
		</tr>
		<tr>
			<td><a href='amp-as-pwa/index.html'>Sample AMP as PWA News
					Website</a></td>
		</tr>
		<tr>
			<td><a href='one-tap-signin/index.html'>one-tap-signin</a></td>
		</tr>
		<tr>
			<td><a href='https://mweb-demos.appspot.com/tests/questions-tags/'>Question Tags</a></td>
		</tr>
		<tr>
			<td><a href='https://mweb-demos.appspot.com/offline-ux/'>Offline-ux with workbox without app-shell</a></td>
		</tr>
		<tr>
			<td><a href='https://mweb-demos.appspot.com/webshare-api/'>Webshare-API Demo</a></td>
		</tr>
	</table>

</body>
</html>
