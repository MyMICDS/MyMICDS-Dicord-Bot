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
	
	getDates() {	
		let out : string = "";
		
		const p = new Promise((resolve, reject) => {
			request('https://mymicds.net/dates/school-ends', function (error : any, response : any, body : any) {
				if (!error) {
					out = JSON.parse(body).date;
				}
				else {
					reject("Error");
				}
			});
		});
		
		return p;
	}
	
	getStats() {	
		const p = new Promise((resolve, reject) => {
			request('https://mymicds.net/stats/get', function (error : any, response : any, body : any) {
				if (!error) {
					resolve(body);
				}
				else {
					reject("Error");
				}
			});
		});
		
		return p;
	}
	
	getSnowdayChance() {	
		const p = new Promise((resolve, reject) => {
			request('https://mymicds.net/snowday/calculate', function (error : any, response : any, body : any) {
				if (!error) {
					resolve(body);
				}
				else {
					reject("Error");
				}
			});
		});
		
		return p;
	}
	
	getSportsStats() {	
		const p = new Promise((resolve, reject) => {
			request('https://mymicds.net/sports/scores', function (error : any, response : any, body : any) {
				if (!error) {
					resolve(body);
				}
				else {
					reject("Error");
				}
			});
		});
		
		return p;
	}
	
	getNotification() {
		const p = new Promise((resolve, reject) => {
			request('https://mymicds.net/notification/get', function (error : any, response : any, body : any) {
				if (!error) {
					resolve(body);
				}
				else {
					reject("Error");
				}
			});
		});
		
		return p;
	}
	
	getWeather() {	
		const p = new Promise((resolve, reject) => {
			request('https://mymicds.net', function (error : any, response : any, body : any) {
				if (!error) {
					resolve(body);
				}
				else {
					reject("Erro");
				}
			});
		});
		
		return p;
	}
}