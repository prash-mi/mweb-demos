/**
 * 
 */
const masterNetworkList = ['amex', 'diners', 'discover', 'jcb', 'mastercard', 'unionpay','visa', 'mir'];
let networks = [ 'mastercard', 'visa'];
let types = ['debit', 'credit', 'prepaid'];

function share(item){
	if(item == 'pixel2'){//pixel2 is hardcoded for this demo, practically we may want to pass the items details dynamically 
		if (navigator.share) {
			  navigator.share({
			      title: 'Pixel 2 XL',
			      text: 'Check out pixel smartphone — it rocks!',
			      url: 'http://mweb-demos.appspot.com/webshare-api/',
			  })
			    .then(() => log('shared'))
			    .catch((error) => log('Error sharing', error));
			}else{
				log('Browser doesn\'t support web-share API')
			}
	}
}

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
	
	networks = [];
	for(let networkIndex in masterNetworkList){
		if(document.getElementById(masterNetworkList[networkIndex]).checked){
			networks.push(masterNetworkList[networkIndex]);
		}
	}
	
	
	showToast('Payment options saved!');
	//togglePayment();
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
	 
	  //optional data attribute to restrict basic-card superset 
	  const cards = {
		  supportedMethods: 'basic-card',
		  data: {supportedNetworks: networks, supportedTypes: types}
		 
		 
	  };
	  
	  let supportedPaymentMethods = [
		  cards
		];
	  
	  let details = {
	    total: {label: 'Offer Price', amount: {currency: 'INR', value: '45750'}},
	    displayItems: [
	      {
	        label: 'Original price',
	        amount: {currency: 'INR', value: '61000'},
	      },
	      {
	        label: 'Discount @ 25%',
	        amount: {currency: 'INR', value: '-15250'},
	      },
	      {
	        label: 'Free domestic shipping',
	        amount: {currency: 'INR', value: '0'},
	      },
	    ],
	    shippingOptions: [{
	      id: 'freeShipping',
	      label: 'Free domestic shipping',
	      amount: {currency: 'INR', value: '0'},
	      selected: true,
	    }],
	  };

	  let options = {requestShipping: true};

	  let request = new PaymentRequest(supportedPaymentMethods , details, options);
	  
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
		  eventLabel: 'Pay with Payment API'
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
	
	/*
	instrumentResponse.details.billingAddress.addressLine = 'XXXXXXX-DUMMY-ADDRESS-XXXXXX';
	instrumentResponse.details.cardNumber = 'XXXX-XXXX-XXXX-1234';
	instrumentResponse.details.cardSecurityCode = '***';
	let res = JSON.stringify(instrumentResponse);
	*/
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