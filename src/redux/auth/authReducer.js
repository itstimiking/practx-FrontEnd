import * as t from "./constants";




const initialState = {
	user:{},
	passwordResetStatus:""
};

export default function authReducer (state = initialState, action){

	switch(action.type){

		case t.ROOT_USER_LOGIN:

			state = {...state, user:action.payload};
			
			return state;

		case t.ROOT_USER_LOGOUT:

			state = {...state, user:{}}
			return state;
			

		case t.ROOT_USER_PASSWORD_RESET_REQ:

			state = {...state, passwordResetStatus:action.payload}
			return state;

		case t.ROOT_USER_PASSWORD_RESET:

			state = {...state, passwordResetStatus:action.payload}
			return state;




		case t.PRACTICE_USER_LOGIN:

			state = {...state, user:action.payload};
			return state;

		case t.PRACTICE_USER_LOGOUT:

			state = {...state, user:{}}
			return state;
			

		case t.PRACTICE_USER_PASSWORD_RESET_REQ:

			state = {...state, passwordResetStatus:action.payload}
			return state;

		case t.PRACTICE_USER_PASSWORD_RESET:

			state = {...state, passwordResetStatus:action.payload}
			return state;

		case t.API_FAILED:
			state = {...state, error: action.payload}
			return state;

		
		default:
			return state;
			
	}
}
