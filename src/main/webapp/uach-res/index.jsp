<%@ page import="java.util.Enumeration,java.util.Map,java.util.Set,java.util.Iterator" %>
<html lang="en">
<meta charset="utf-8" />
<link id="favicon" rel="icon"
  href="/uach-res/images/fav.png"
  type="image/x-icon" />
<head>
<meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
<title>UA-CH Demo</title>
<script  src="https://www.googletagmanager.com/gtag/js?id=UA-112374941-1"></script>
<script type="text/javascript">
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-112374941-1');

		log = (logMsg) => {
			document.getElementById("consoleLog").innerHTML = '<br><br><span>'+ logMsg+'</span>' + document.getElementById("consoleLog").innerHTML ;
			console.log(logMsg);
		}
const refresh = () => {
    window.location = '/uach';
}

const checkSupport = () =>{
    if(!(navigator && navigator.userAgentData)){
        document.getElementById("unSupportedMsg").innerHTML = '<b>UA-CH is not supported on this Browser!</b>'
    }else{
        document.getElementById("supportedMsg").innerHTML = 'UA-CH is supported on this Browser!'
    }
}

const toggleClientHintsFieldSet = () => {
    if(document.getElementById('Accept-CH').checked){
        document.getElementById("clientHintsFieldSet").disabled = false;
     }else{
        document.getElementById("clientHintsFieldSet").disabled = true;
      }
}

const toggleCriticalClientHintsFieldSet = () => {
    if(document.getElementById('Critical-CH').checked){
        document.getElementById("criticalClientHintsFieldSet").disabled = false;
     }else{
        document.getElementById("criticalClientHintsFieldSet").disabled = true;
      }
}


</script>
</head>
<body onload="javascript:ga('send', 'pageview', location.pathname);toggleClientHintsFieldSet();toggleCriticalClientHintsFieldSet();checkSupport();">

<br/>
<div align="left">
<p>
<p>The primary goal of User Agent Client Hints (UA-CH) is to reduce the default entropy
available to the network for <a data-link-type="dfn" target="_blank"href="https://w3c.github.io/fingerprinting-guidance/#dfn-passive-fingerprinting" id="ref-for-dfn-passive-fingerprinting">passive fingerprinting</a>.
Learn more about UA-CH <a target="_blank" href="https://web.dev/user-agent-client-hints/" >here</a>.
<br/>This page shows shows UA-CH in action.
The UA-CH/Critical-CH headers are marked in <b><span style="color:GREEN">Green.</span></b>
<br/>
<div style="color:RED" id="unSupportedMsg"> </div>
<div style="color:DodgerBlue" id="supportedMsg"> </div>

</p>

<h3>How to use this tool</h2>
<b>For testing User Agent Client Hints (UA-CH)</b>
<ul>
  <li>Enable Accept-CH and select the client hints (<a href="https://web.dev/user-agent-client-hints/" target="_blank">More details on User Agent Client Hints</a>).</li>
  <li>Click on Submit and Check the Response Headers. Accept-CH Response Header should be present.</li>
  <li>Click on Refresh, the selected Client hints should now be in the Request Headers section.</li>
</ul>

<b>For testing Critical Client Hints (Critical-CH)</b>
<ul>
  <li>Enable Accept-CH and select the client hints (<a href="https://chromestatus.com/feature/5727177800679424#:~:text=Chrome%20Platform%20Status,-All%20features%20Releases&text=Adds%20support%20for%20a%20new,the%20particular%20Client%20Hint%20header." target="_blank">More details on Critical Client Hints</a>).</li>
  <li>Enable Critical-CH and select the client hints. These should be the same as or a subset of Accept-CH.</li>
  <li>Click Submit and observe the Resquest and Response header. </li>
</ul>
<%
 Map<String, Boolean> enabledHints = (Map<String, Boolean>)request.getAttribute("enabledHints");
 Set<String> clientHintSet = ( Set<String>)request.getAttribute("clientHintSet");

%>
<form method="get" action="/uach">
    <fieldset>
      <legend>Select Available Client Hints (These will be sent on the subsequent HTTP Response)</legend>

       <label>
          <input type="checkbox" name="Accept-CH" id="Accept-CH" value="1" <%= enabledHints.get("Accept-CH")?"checked":"" %> onClick="javascript:toggleClientHintsFieldSet()">
         <code><b>Accept-CH</b></code>
       </label>
<br/>
                  <fieldset id="clientHintsFieldSet">
                     <legend>Accept-CH must be enabled to use client hints</legend>

              <label>
                <input type="checkbox" name="Sec-CH-UA-Arch" id="Sec-CH-UA-Arch" value="1" <%= enabledHints.get("Sec-CH-UA-Arch")?"checked":"" %>>
                <code>Sec-CH-UA-Arch</code>
              </label>
              <label>
                <input type="checkbox" name="Sec-CH-UA-Full-Version" id="Sec-CH-UA-Full-Version" value="1" <%= enabledHints.get("Sec-CH-UA-Full-Version")?"checked":"" %>>
                <code>Sec-CH-UA-Full-Version</code>
              </label>
              <label>
                <input type="checkbox" name="Sec-CH-UA-Mobile" id="Sec-CH-UA-Mobile" value="1" <%= enabledHints.get("Sec-CH-UA-Mobile")?"checked":"" %>>
                <code>Sec-CH-UA-Mobile</code>
              </label>
              <label>
                <input type="checkbox" name="Sec-CH-UA-Model" id="Sec-CH-UA-Model" value="1" <%= enabledHints.get("Sec-CH-UA-Model")?"checked":"" %>>
                <code>Sec-CH-UA-Model</code>
              </label>
              <label>
                <input type="checkbox" name="Sec-CH-UA-Platform-Version" id="Sec-CH-UA-Platform-Version" value="1" <%= enabledHints.get("Sec-CH-UA-Platform-Version")?"checked":"" %>>
                <code>Sec-CH-UA-Platform-Version</code>
              </label>
              <label>
                <input type="checkbox" name="Sec-CH-UA-Platform" id="Sec-CH-UA-Platform" value="1" <%= enabledHints.get("Sec-CH-UA-Platform")?"checked":"" %>>
                <code>Sec-CH-UA-Platform</code>
              </label>
              <label>
                <input type="checkbox" name="Sec-CH-UA" id="Sec-CH-UA" value="1" <%= enabledHints.get("Sec-CH-UA")?"checked":"" %>>
                <code>Sec-CH-UA</code>
              </label>
               <label>
                <input type="checkbox" name="Sec-CH-UA-Bitness" id="Sec-CH-UA-Bitness" value="1" <%= enabledHints.get("Sec-CH-UA-Bitness")?"checked":"" %>>
                <code>Sec-CH-UA-Bitness</code>
                     </label>

                <label>
                      <input type="checkbox" name="Viewport-Width" id="Viewport-Width" value="1" <%= enabledHints.get("Viewport-Width")?"checked":"" %>>
                      <code>Viewport-Width</code>
               </label>
                 <label>
                             <input type="checkbox" name="Width" id="Width" value="1" <%= enabledHints.get("Width")?"checked":"" %>>
                             <code>Width</code>
                      </label>

            </fieldset>

    </fieldset>

<br/>
     <fieldset>
          <legend>Select Critical Client Hints</legend>

           <label>
              <input type="checkbox" name="Critical-CH" id="Critical-CH" value="1" <%= enabledHints.get("Critical-CH")?"checked":"" %> onClick="javascript:toggleCriticalClientHintsFieldSet()">
             <code><b>Critical-CH</b></code>
           </label>
    <br/>
                      <fieldset id="criticalClientHintsFieldSet">
                         <legend>Select Critical client hints</legend>

                  <label>
                    <input type="checkbox" name="C_Sec-CH-UA-Arch"  value="1" <%= enabledHints.get("C_Sec-CH-UA-Arch")?"checked":"" %>>
                    <code>Sec-CH-UA-Arch</code>
                  </label>
                  <label>
                    <input type="checkbox" name="C_Sec-CH-UA-Full-Version" value="1" <%= enabledHints.get("C_Sec-CH-UA-Full-Version")?"checked":"" %>>
                    <code>Sec-CH-UA-Full-Version</code>
                  </label>
                  <label>
                    <input type="checkbox" name="C_Sec-CH-UA-Mobile" value="1" <%= enabledHints.get("C_Sec-CH-UA-Mobile")?"checked":"" %>>
                    <code>Sec-CH-UA-Mobile</code>
                  </label>
                  <label>
                    <input type="checkbox" name="C_Sec-CH-UA-Model" value="1" <%= enabledHints.get("C_Sec-CH-UA-Model")?"checked":"" %>>
                    <code>Sec-CH-UA-Model</code>
                  </label>
                  <label>
                    <input type="checkbox" name="C_Sec-CH-UA-Platform-Version" value="1" <%= enabledHints.get("C_Sec-CH-UA-Platform-Version")?"checked":"" %>>
                    <code>Sec-CH-UA-Platform-Version</code>
                  </label>
                  <label>
                    <input type="checkbox" name="C_Sec-CH-UA-Platform" value="1" <%= enabledHints.get("C_Sec-CH-UA-Platform")?"checked":"" %>>
                    <code>Sec-CH-UA-Platform</code>
                  </label>
                  <label>
                    <input type="checkbox" name="C_Sec-CH-UA" value="1" <%= enabledHints.get("C_Sec-CH-UA")?"checked":"" %>>
                    <code>Sec-CH-UA</code>
                  </label>
                   <label>
                    <input type="checkbox" name="C_Sec-CH-UA-Bitness" value="1" <%= enabledHints.get("C_Sec-CH-UA-Bitness")?"checked":"" %>>
                    <code>Sec-CH-UA-Bitness</code>
                         </label>

                    <label>
                          <input type="checkbox" name="C_Viewport-Width" value="1" <%= enabledHints.get("C_Viewport-Width")?"checked":"" %>>
                          <code>Viewport-Width</code>
                   </label>
                     <label>
                                 <input type="checkbox" name="C_Width" value="1" <%= enabledHints.get("C_Width")?"checked":"" %>>
                                 <code>Width</code>
                          </label>

                </fieldset>

        </fieldset>

<br/>
    <button type="submit">Submit </button>
    <button type="button" onClick="javascript:window.location.reload();">Refresh </button>
    <button type="button" onClick="javascript:refresh();">Clear All </button>
  </form>

<label>
    <h3>Request Headers</h2>
</label>

	<div style="border: 3px solid #848484; margin-top: 20px;background-color: black; color: white;">
	<p id="requestHeaders">
	<%


            for (Enumeration<?> e = request.getHeaderNames(); e.hasMoreElements();) {
              String headerName = (String) e.nextElement();
              String headerValue = request.getHeader(headerName);

              if(clientHintSet.contains(headerName.toUpperCase())){
                  out.println("<br><br><span style=\"color:GREEN\"><b>"+headerName+": "+headerValue+"</b></span>");
              }else{
                   out.println("<br><br><span>"+headerName+": "+headerValue+"</span>");
              }


            }
	%>
	</p>
	</div>
<br/>
<label>
    <h3>Response Headers</h2>
</label>

	<div style="border: 3px solid #848484; margin-top: 20px;background-color: black; color: white;">
	<p id="responseHeaders"></p>

	    <%

	             for(Iterator<String> re = response.getHeaderNames().iterator(); re.hasNext();){
                      String headerName = re.next();

                      String headerValue = response.getHeader(headerName);
                         if(clientHintSet.contains(headerName.toUpperCase())){
                                      out.println("<br><br><span style=\"color:GREEN\"><b>"+headerName+": "+headerValue+"</b></span>");
                          }else{
                                     out.println("<br><br><span>"+headerName+": "+headerValue+"</span>");
                            }

                    }
	    %>

	</div>

</body>
</html>
