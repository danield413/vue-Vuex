export const increment = (state)=> {
    state.count++
    state.lastMutation = 'increment'    
}

export const incrementBy = (state, value) => {
    state.count += value
    state.lastMutation = 'incrementBy'
    state.lastRandomInt = value
}

export const random = (state) => {
    state.count = Math.random() * 100
    state.lastMutation = 'random'
}

export const setLoading = (state, value) => {
    state.isLoading = value
}