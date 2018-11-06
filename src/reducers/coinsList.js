export function coinsList(state = [], action) {
    switch (action.type) {
        case 'ADD_COINS':
            return [
                ...state,
                ...action.payload
            ];

        default: return state;
    }
}