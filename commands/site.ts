var request = require('request');

export class Site {	
	constructor() {};
	
	testSite() {	
		const p = new Promise((resolve, reject) => {
			request('https://mymicds.net', function (error : any, response : any, body : any) {
				if (!error) {
					resolve("MyMICDS.net is online");
				}
				else {
					reject("MyMICDS.net is offline");
				}
			});
		});
		
		return p;
	} // working
	
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
	} // working
	
	getLunch() {	
		const p = new Promise((resolve, reject) => {
			request('https://api.mymicds.net/lunch/get', function (error : any, response : any, body : any) {
				if (!error) {
					// let contents = JSON.parse(body);
					resolve("Lunch API is not in session right now");
				}
				else {
					reject("Lunch API Failure");
				}
			});
		});
		
		return p;
	} // not in session
	
	getDates() {		
		const nextbreak = new Promise((resolve, reject) => {
			request.post({url : 'https://api.mymicds.net/dates/breaks', form: {}}, function (error : any, response : any, body : any) {
				if (!error) {
					let startDate = JSON.parse(body).breaks.longWeekends[0].start;
					let readableDate = new Date(startDate);
					
					resolve(readableDate.toDateString());
				}
				else {
					reject("Error");
				}
			});
		});
		
		return nextbreak;
	} // working
	
	getStats() {	
		const p = new Promise((resolve, reject) => {
			request.post({url : 'https://api.mymicds.net/stats/get', form: {}}, function (error : any, response : any, body : any) {
				if (!error) {
					let contents = JSON.parse(body);
					resolve(`Currently Registered : ${contents.stats.registered.total}`);
				}
				else {
					reject("Stats API Failure");
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
					/*let date = new Date();
					let expectedFormatDate : string = `${date.getFullYear()}-${date.getMonth()}-${date.getDay() + 1}`*/
					resolve(contents.data);
				}
				else {
					reject("Snowday API Failure");
				}
			});
		});
		
		return p;
	} // not up
	
	getSportsStats() {	
		const p = new Promise((resolve, reject) => {
			request('https://mymicds.net/sports/scores', function (error : any, response : any, body : any) {
				if (!error) {
					resolve("Sports API not in session");
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
	} // not in session
	
	getWeather() {	
		const p = new Promise((resolve, reject) => {
			request.post({url : 'https://api.mymicds.net/weather/get', form: {}}, function (error : any, response : any, body : any) {
				if (!error) {
					let contents = JSON.parse(body);
					resolve(`${contents.weather.currently.summary} @ ${contents.weather.currently.temperature}`);
				}
				else {
					reject("Weather API Failure");
				}
			});
		});
		
		return p;
	} // working
}