/**
 *  <sms-receiver> is a custom element that extends <input> elements
 *  with an autocomplete="one-time-code" with the imperative
 *  navigator.sms.receive() API. Submits the form when it receives
 *  the SMS.
 * 
 *  Example:
 *
 *  <form>
 *    <input is="sms-receiver" 
 *           name="otp" 
 *           regex="\s([A-Za-z0-9]{6})\." 
 *           autocomplete="one-time-code" 
 *           placeholder="Code (6 digits)" 
 *           required />
 *    <input type="submit" />
 *  </form>
 *
 *  Parameters:
 *
 *    - regex: a regular expression used to parse the contents of the
 *             sms message and get the OTP code.
 *
 *
 *  Degrades gracefully to the autofill UI or manual input when the
 *  API is not available.
 *
 */
//customElements.define("sms-receiver",
//class extends HTMLInputElement {
//connectedCallback() {
//this.receive();
//}

//}, {
//extends: "input"
//});

async function receiveSMS() {
	try {
		log("Calling navigator.sms.receive()");
		let {content} = await navigator.sms.receive();
		log("Received an SMS message!");
		log(content);
		let conSpl = content.split(" ");
		let cd = conSpl[3].split("\.");
		log('Code ' + cd[0]);
		/*
		 * Optional RegEx validation 
        let regex = this.getAttribute("regex");
        let code = new RegExp(regex).exec(content);
        if (!code) {
             log("SMS message doesn't match regex");
             return;
        }
		 */

		document.getElementById("smsbox").value = cd[0];
		//log('submitting form in 5 sec');
		//setTimeout(() => {document.getElementById("smsbox").submit();}, 5000);
	} catch (e) {
		log(e);
	}
}