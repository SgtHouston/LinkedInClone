export function techarticles (state = [], action) {
    switch(action.type) {
        case 'SET_TECH_ARTICLES':
            return action.array
        
        default:
            return state
    }
}

