const artists = {
	Rammstein: '6wWVKhxIU2cEi0K81v7HvP',
	Metallica: '2ye2Wgw4gimLv2eAKyk1NB',
	Dover: '5kdLOinhQnlSk4su7U6lyW',
	Linkin_Park: '6XyY86QOPPrYVGvF9ch6wz',
	Evanescence: '5nGIFgo0shDenQYSE0Sn7c',
	Green_Day: '7oPftvlwr6VrsViSDV7fJY',
	Nickelback: '6deZN1bslXzeGvOLaLMOIF',
	Simple_Plan: '2p4FqHnazRucYQHyDCdBrJ',
	The_Offspring: '5LfGQac0EIXyAN8aUwmNAQ',
	Within_Temptation: '3hE8S8ohRErocpkY7uJW4a',
	Sum_41: '0qT79UgT5tY4yudH9VfsdT'
};

const container = document.getElementById('container');
const artistImage = document.getElementById('random-artist-image');
const artistNameContainer = document.getElementById('random-artist-name');
const formContainer = document.getElementById('random-songs');
const resultContainer = document.getElementById('is-correct');
const timerContainer = document.getElementById('timer');
const audioContainer = document.getElementById('audio');

(async () => {
	await store.requestSpotifyToken();
	store.timerSeconds(timerContainer);
	store.setNewGame(
		artistNameContainer,
		artists,
		artistImage,
		formContainer,
		resultContainer,
		audioContainer
	);
	store.timerFunction(
		artistNameContainer,
		artists,
		artistImage,
		formContainer,
		resultContainer,
		timerContainer,
		audioContainer
	);
})();
