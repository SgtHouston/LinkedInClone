export function user (state = {}, action) {
    switch(action.type) {
        case 'CREATE_USER':
            return action.object
        
        default:
            return state
    }
}
