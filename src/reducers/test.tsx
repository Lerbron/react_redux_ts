import * as actionTypes from 'actions/actionTypes'

interface IState {
	num: number
}

const initState: IState = {num: 0};

export default function test(state = initState, action: { type: any; }) {
	console.log('state---->', state)
	switch (action.type) {
		case actionTypes.TEST_NUM :
			return Object.assign({}, state, {num: state.num + 1});
		default :
			return state;
	}
}