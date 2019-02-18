function heavyOp(){
	let timeInMil = 5000;
	let start = new Date();
	console.log('Blocking thread @ ' + new Date());
	while (true) {
		let cur = new Date();
		if ((cur - start) >= timeInMil) {
			break;
		}
	}
	console.log('Unblocking thread @ ' + new Date());
	
	postMessage('Completed');
}

heavyOp();
