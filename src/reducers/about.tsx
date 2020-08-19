import * as actionTypes from 'actions/actionTypes'

interface IState {
	a: number
}

const initState: IState = {a: 0};

export default function about(state = initState, action: { type: any; }) {
	console.log('state---->', state)
	switch (action.type) {
		case actionTypes.ABOUT_NUM :
			return Object.assign({}, state, {a: state.a + 1});
		default :
			return state;
	}
}