export default (state = { users:[] }, action) => {   
    switch (action.type) {
        // case 'CREATE':
        //     return {...state, user: action.payload};
        // case 'FETCH':
        //     return {...state, message: action.payload};
        case 'FETCH_ALL':
        return {
            ...state,
            users : action.payload,
        };
       
        case 'DELETE':
            return {...state, users: state.users.filter((user) => user._id !== action.payload)}; 

        case 'EDIT':
            return {...state, users: state.users.map((user) => user.id === action.payload.id ? action.payload : user)};
        default:
            return state;
    }
}