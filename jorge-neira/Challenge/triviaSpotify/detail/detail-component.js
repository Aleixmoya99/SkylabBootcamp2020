class SpotifyGame {
	constructor(
		artistName,
		artistImage,
		artistFollowers,
		artistGenres,
		artistTopTracksArr
	) {
		this.name = artistName;
		this.image = artistImage;
		this.followers = artistFollowers;
		this.genres = artistGenres;
		this.topTracks = artistTopTracksArr;
	}
	playGame() {
		const DOMElements = {
			artistName: document.querySelector('.artist-info-name'),
			artistFollowers: document.querySelector('.artist-followers'),
			artistGenres: document.querySelector('.artist-info-listGenres'),
			artistImage: document.querySelector('.gameboard-artist__img'),
			artistAudio: document.querySelector('.gameboard-artist__audio'),
			artistPreview: document.querySelector('.gameboard-artist__preview'),
			optionGameBtn: document.querySelectorAll('.gameBtn'),
			scoreGameSpan: document.querySelector('.statusScore'),
			gameScore: document.querySelector('.gameScore'),
			pauseStatusBtn: document.querySelector('.pauseBtn'),
			nextStatusBtn: document.querySelector('.nextBtn'),
			exitStatusBtn: document.querySelector('.exitBtn')
		};
		const gameVariables = {
			currentTopTracks: this.topTracks,
			correctAnswerPoints: 10,
			currentGameScore: 0,
			secondsRemaining: 5,
			roundCounter: 0,
			gameStatus: true,
			gamePause: false,
			currentCorrectAnswer: ''
		};
		const getGenresList = (genres) => {
			genres.forEach((element, index) => {
				if (index > 2) return;
				const createLiGenres = document.createElement('li');
				createLiGenres.textContent = element;
				DOMElements.artistGenres.appendChild(createLiGenres);
			});
		};

		const generateRandomNumber = (maxNums, maxValue) => {
			let randomNumbers = [];
			while (randomNumbers.length !== maxNums) {
				const randomNum = Math.floor(Math.random() * maxValue);
				if (randomNumbers.includes(randomNum)) continue;
				randomNumbers.push(randomNum);
			}
			return randomNumbers;
		};

		const setCurrentRound = (tracks, currentRound = 0) => {
			const wrongAnswerIndex = generateRandomNumber(3, 8);
			const randomButtonPositionQuestion = generateRandomNumber(4, 4);
			const curentArtistSong = [];
			gameVariables.currentCorrectAnswer = tracks[currentRound].name;
			curentArtistSong.push(tracks[currentRound].name);
			console.log(curentArtistSong);
			DOMElements.artistPreview.autoplay = true;
			DOMElements.artistPreview.src = tracks[currentRound].preview_url;
			const randomTracks = [];
			tracks.forEach((track) => {
				if (track.name !== curentArtistSong[0]) {
					randomTracks.push(track.name);
				}
			});
			wrongAnswerIndex.forEach((wrongTracks) => {
				curentArtistSong.push(randomTracks[wrongTracks]);
			});
			randomButtonPositionQuestion.forEach((randomIndex, index) => {
				DOMElements.optionGameBtn[
					randomIndex
				].textContent = `${curentArtistSong[index]}`;
			});
		};

		const updateScore = () => {
			gameVariables.currentGameScore =
				gameVariables.currentGameScore + gameVariables.correctAnswerPoints;
			DOMElements.gameScore.textContent = gameVariables.currentGameScore;
		};

		const setGameTimer = () => {
			if (gameVariables.gameStatus) {
				let timer = setInterval(() => {
					gameVariables.secondsRemaining--;
					console.log(gameVariables.secondsRemaining);
					if (gameVariables.secondsRemaining <= 0) {
						if (!gameVariables.gameStatus) {
							clearInterval(timer);
						} else {
							if (gameVariables.roundCounter === 9) {
								gameVariables.gameStatus = false;
								clearInterval(timer);
							} else {
								gameVariables.secondsRemaining = 5;
								gameVariables.roundCounter++;
								setGameTimer();
								setCurrentRound(this.topTracks, gameVariables.roundCounter);
								clearInterval(timer);
							}
						}
					}
				}, 1000);
				DOMElements.pauseStatusBtn.addEventListener('click', function () {
					clearInterval(timer);
					gameVariables.gamePause = true;
					DOMElements.artistPreview.pause();
				});
				DOMElements.nextStatusBtn.addEventListener('click', function () {
					if (gameVariables.roundCounter === 9) return;
					if (gameVariables.gamePause) {
						gameVariables.gamePause = false;
					}
					clearInterval(timer);
					gameVariables.secondsRemaining = 30;
					setGameTimer();
					gameVariables.roundCounter++;
					setCurrentRound(
						gameVariables.currentTopTracks,
						gameVariables.roundCounter
					);
				});
			}
		};

		DOMElements.optionGameBtn.forEach((button) => {
			button.addEventListener('click', function () {
				if (button.textContent === gameVariables.currentCorrectAnswer) {
					console.log(gameVariables.currentCorrectAnswer);
					updateScore();
				}
			});
		});
		DOMElements.exitStatusBtn.addEventListener('click', function () {
			document.location.href =
				'http://127.0.0.1:5500/dashboard/dashboard-component.html';
		});
		(() => {
			DOMElements.artistName.textContent = this.name;
			DOMElements.artistFollowers.textContent = this.followers;
			DOMElements.artistImage.src = this.image;
			getGenresList(this.genres);
			setGameTimer();
			setCurrentRound(this.topTracks);
		})();
	}
}
let artistInfo, artistTopTracks;
const curLocation = location;
const curIdFromLocation = getIdParam(curLocation);
(async () => {
	await spotifyStore.getToken();
	artistInfo = await spotifyStore.getArtist(curIdFromLocation);
	artistTopTracks = await spotifyStore.getTopTracks(curIdFromLocation);
	const spotifyGame = new SpotifyGame(
		artistInfo.name,
		artistInfo.images[0].url,
		artistInfo.followers.total,
		artistInfo.genres,
		artistTopTracks.tracks
	);
	spotifyGame.playGame();
})();
