const INITIAL_STATE = {
    description: 'Ler livro',
    list: [{
        id: 1,
        description: 'Estudar react',
        done: true
    },{
        id: 2,
        description: 'Estudar redux',
        done: false
    },{
        id: 3,
        description: 'Terminar GEA3',
        done: false
    }]
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        
        case 'DESCRIPTION_CHANGED':
            return{ ...state, description: action.payload }
        
        default:
            return state
    }
}