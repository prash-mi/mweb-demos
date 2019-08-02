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
customElements.define("sms-receiver",
  class extends HTMLInputElement {
    connectedCallback() {
      this.receive();
    }
    async receive() {
        try {
            let {content} = await navigator.sms.receive();
            console.log("Received an SMS message!");
            console.log(content);
            let regex = this.getAttribute("regex");
            let code = new RegExp(regex).exec(content);
            if (!code) {
                console.log("SMS message doesn't match regex");
                 return;
            }
            this.value = code[1];
            this.form.submit();
        } catch (e) {
            console.log(e);
        }
    }
  }, {
    extends: "input"
});