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
		const school = new Promise((resolve, reject) => {
			request.post({url : 'https://api.mymicds.net/dates/school-ends', form: {}}, function (error : any, response : any, body : any) {
				if (!error) {
					let contents = JSON.parse(body);
					let dateConvert = new Date(contents.date);
					resolve(dateConvert.toDateString());
				}
				else {
					reject("Error");
				}
			});
		});
		
		const nextbreak = new Promise((resolve, reject) => {
			request.post({url : 'https://api.mymicds.net/dates/breaks', form: {}}, function (error : any, response : any, body : any) {
				if (!error) {
					let contents = JSON.parse(body);
					resolve(contents.breaks.longWeekends[0]);
				}
				else {
					reject("Error");
				}
			});
		});
			
		const p = new Promise((resolve, reject) => {
			/*if (out.school == "" || out.nextbreak == "") {
				reject("There was a problem with that reguest");
			}
			else {
				
			}*/
			resolve("Not implemented yet");
		});
		
		return p;
	}
	
	getStats() {	
		const p = new Promise((resolve, reject) => {
			request.post({url : 'https://api.mymicds.net/stats/get', form: {}}, function (error : any, response : any, body : any) {
				if (!error) {
					let contents = JSON.parse(body);
					resolve(`Currently Registered : ${contents.stats.registered.total}`);
				}
				else {
					reject("Quotes API Failure");
				}
			});
		});
		
		return p;
	} // working
	
	getSnowdayChance() {	
		const p = new Promise((resolve, reject) => {
			request.post({url : 'https://api.mymicds.net/snowday/calculate', form: {}}, function (error : any, response : any, body : any) {
				if (!error) {
					let contents = JSON.parse(body);
					let date = new Date();
					let expectedFormatDate : string = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`
					console.log(date.toDateString());
				}
				else {
					reject("Quotes API Failure");
				}
			});
		});
		
		return p;
	} // not up
	
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
	} // not up yet
	
	getNotification() {
		const p = new Promise((resolve, reject) => {
			request('https://mymicds.net/notification/get', function (error : any, response : any, body : any) {
				if (!error) {
					resolve("Notification API is not in session");
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
			request.post({url : 'https://api.mymicds.net/weather/get', form: {}}, function (error : any, response : any, body : any) {
				if (!error) {
					let contents = JSON.parse(body);
					resolve(`${contents.weather.currently.summary} @ ${contents.weather.currently.temperature}`);
				}
				else {
					reject("Quotes API Failure");
				}
			});
		});
		
		return p;
	}
}