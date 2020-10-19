// const
const _heroes = [
	{ id: 11, name: 'Dr Nice' },
	{ id: 12, name: 'Narco' },
	{ id: 13, name: 'Bombasto' },
	{ id: 14, name: 'Celeritas' },
	{ id: 15, name: 'Magneta' },
	{ id: 16, name: 'RubberMan' },
	{ id: 17, name: 'Dynama' },
	{ id: 18, name: 'Dr IQ' },
	{ id: 19, name: 'Magma' },
	{ id: 20, name: 'Tornado' }
];

class Store {
	getHeroes() {
		return _heroes;
	}

	getheroById(heroId) {
		return this.getHeroes().find((hero) => hero.id === heroId);
	}

	getTopHeroes() {
		return this.getHeroes().slice(0, 4);
	}
}

const store = new Store();

function topHeroes(dashboard) {
	const topHeroesDash = document.querySelectorAll('.hero-name');
	const topHeroes = dashboard.getTopHeroes();
	topHeroes.forEach((hero, index) => {
		topHeroesDash[index].innerText = `${hero.name}`;
	});
}

function goHeroes() {}

topHeroes(store);

module.exports = store;
