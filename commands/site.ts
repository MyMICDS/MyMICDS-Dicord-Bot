var request = require('request');

export class Site {
	
	constructor() {};
	
	testSite() {	
		const p = new Promise((resolve, reject) => {
			request('https://mymicds.net', function (error : any, response : any, body : any) {
				if (!error) {
					resolve("MyMicds.net is online");
				}
				else {
					reject("MyMicds.net is offline");
				}
			});
		});
		
		return p;
	}
	
	getQuote() {
		const p = new Promise((resolve, reject) => {
			request.post({url : 'https://api.mymicds.net/quote/get', form: {}}, function (error : any, response : any, body : any) {
				if (!error) {
					let contents = JSON.parse(body);
					resolve(`${contents.quote.quote}\n- ${contents.quote.author}`);
				}
				else {
					reject("Quotes API Failure");
				}
			});
		});
		
		return p;
	}
	
	getLunch() {	
		const p = new Promise((resolve, reject) => {
			request('https://api.mymicds.net/lunch/get', function (error : any, response : any, body : any) {
				if (!error) {
					// let contents = JSON.parse(body);
					resolve("Lunch API is not in session right now");
				}
				else {
					reject("MyMicds.net is offline");
				}
			});
		});
		
		return p;
	}
}