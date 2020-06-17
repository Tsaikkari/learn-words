const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve({
			name: 'Kirsi',
			location: 'Berlin'
		});
		/*reject('Something went wrong!');*/
	}, 1500);
});

console.log('before');
// Register a callback that gets fired when and if the promise resolves
promise.then((data) => {
	console.log('1', data);
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('This is my other promise');
			/*reject('Something went wrong!');*/
		}, 5500);
	});
}).then((str) => {
	console.log('Does this run?', str)
}).catch((error) => {
		console.log('error: ', error);	
});

console.log('after');