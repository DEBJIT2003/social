const fetch = require('node-fetch');

const encodedParams = new URLSearchParams();
encodedParams.set('url', 'https%3A%2F%2F9gag.com%2Fgag%2FaDdLX2Z');

const url = 'https://all-social-media-video-downloader.p.rapidapi.com/';
const options = {
  method: 'POST',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '3c74616a56msh19cb77cdefd32dep119aaejsne12bfa64872a',
    'X-RapidAPI-Host': 'all-social-media-video-downloader.p.rapidapi.com'
  },
  body: encodedParams
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}