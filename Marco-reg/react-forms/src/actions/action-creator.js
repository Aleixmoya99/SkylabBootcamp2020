import dispatcher from '../dispatcher';

const flightOptions = ['Ida y Vuelta', 'Sólo ida', 'Múltiples destinos'];
const travelers = [1, 2, 3, '3 o más'];

export function loadDestination() {
	dispatcher.dispatch({
		type: 'LOAD_DESTINATION',
		data: flightOptions
	});
}
export function loadTravelers() {
	dispatcher.dispatch({
		type: 'LOAD_TRAVELERS',
		data: travelers
	});
}
