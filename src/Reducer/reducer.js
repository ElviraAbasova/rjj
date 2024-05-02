function reducer(state,action){
    switch (action.type) {
        case "SetData":
            return {...state, data: action.data}
            case "SetDelete":
                let filter = state.data.filter(item=> item.id != action.id)
                return {...state, data: filter}
                case "SetEdit":
                    let find = state.data.find(item=> item.id != action.id)
                    return {...state, find}
            
    
    }

}

export default reducer