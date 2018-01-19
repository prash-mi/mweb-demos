/**
 * 
 */
let tezEnabled = true;

function log(logMsg){
	document.getElementById("consoleLog").innerHTML = document.getElementById("consoleLog").innerHTML + '<br><br><span>'+ logMsg+'</span>';
	console.log(logMsg);
}
function showToast(msg) {
    var toast = document.getElementById("snackbar");
    toast.innerHTML = msg;
    toast.className = "show";
    setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 2000);
}

function savePaymentOptions(){
	ga('send', {
		  hitType: 'event',
		  eventCategory: 'Payment Method',
		  eventAction: 'Update',
		  eventLabel: 'Updated Payment Method'
		});
	if(document.getElementById('tez').checked){
		tezEnabled = true;
	}else{
		tezEnabled = false;
	}
	log('update payment options: '+(tezEnabled?' tez':''));
	showToast('Payment options saved!');
}
function togglePayment(){
	
	var customizePayment = document.getElementById("customizePayment");
	    if (customizePayment.style.display === "none") {
	    	customizePayment.style.display = "block";
	    } else {
	    	customizePayment.style.display = "none";
	    }
}

function initPaymentRequest() {
	 
	  
	  const tez = {
			  supportedMethods : [ 'https://tez.google.com/pay' ],
				  data: {
				  pa: 'test-merchant',
				  pn: 'Merchant',
				  tr: ' 00000 ', // your custom transaction reference ID
				  url : 'https://mweb-demos.appspot.com/payment-request/index.html',
				  tn : 'Pixel 2 purchase' 
				  }
	  };
	  
	  
	  const supportedPaymentMethods = [
	 tez
		];
	  

	  const details2 = {
			  total: {
			    label: 'Total',
			    amount:{
			      currency: 'INR',
			      value: 45750
			    }
			  }
			};
			// Options isn't required.
			const options2 = {};
	  let request = new PaymentRequest(supportedPaymentMethods, details2, options2);
	  //new PaymentRequest(supportedPaymentMethods, details, options);
	  
	  request.addEventListener('shippingaddresschange', function(evt) {
	    evt.updateWith(Promise.resolve(details));
	    log('Address Updated');
	  });

	  return request;
	}


function pay(){
	ga('send', {
		  hitType: 'event',
		  eventCategory: 'Payment',
		  eventAction: 'Pay',
		  eventLabel: 'Pay with Tez'
		});
	
	if(window.PaymentRequest){

		let paymentReq = initPaymentRequest();

		paymentReq.show()
		.then((instrumentResponse) => {

			processDummyPayment(instrumentResponse);

		})
		.catch((err) => {
			log('Error: '+err);
		});
		
		/*
		 * alternate  check payment request feasibility before launching, which is already checked in this example in index.html
		paymentReq.canMakePayment()
		.then(()=>{
			paymentReq.show()
			.then((instrumentResponse) => {

				processDummyPayment(instrumentResponse);

			})
			.catch((err) => {
				log('Error: '+err);
			});
		})
		.catch((e)=>{
			showToast('Can\'t make payment');
			log('Can\'t make payment with the current payment object ');
		});
*/
	}else{
		log('PaymentRequest API isn\'t supported');
	}
}

function getMaskedObject(instrumentResponse){
	if(instrumentResponse == undefined || instrumentResponse.details == undefined
			|| instrumentResponse.details.cardNumber == undefined){
		return JSON.stringify(instrumentResponse);
	}
	  let details = instrumentResponse.details;
	  details.cardNumber = 'XXXX-XXXX-XXXX-' + details.cardNumber.substr(12);
	  details.cardSecurityCode = '***';
	  
	return JSON.stringify({
	    methodName: instrumentResponse.methodName,
	    details: details,
	    shippingAddress: instrumentResponse.shippingAddress,
	    shippingOption: instrumentResponse.shippingOption,
	  }, undefined, 2);
}
function processDummyPayment(instrumentResponse){
	
	instrumentResponse.complete('success')
	.then(() => {
		if(instrumentResponse.methodName == 'basic-card'){//showing toast for basic-card only, as Tex merchant isn't registered and will fail anyways
			showToast('Order placed!');
		}
		log('payment processed with details: '+getMaskedObject(instrumentResponse));
	})
	.catch((err) => {
		log('Error: '+err);
	});
}