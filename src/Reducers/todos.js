export default function(state = [], action){
    switch(action.type){
        case "ADD_TODO":
            state.push(action.payload);
            return [...state];
        case "DELETE_TODO":
            state.splice(action.payload.index,1);
            return [...state];
        case "DELETE_COMPLETED_TODO":
            let newState = [];
            state = state.filter((item, index)=>{
                return !item.completed;
            })
            return state;
        case "COMPLETE_TODO":
            state[action.payload.index].completed = !state[action.payload.index].completed;
            return [...state];
        case "EDIT_TODO":
            state[action.payload.index].todo = action.payload.todo;
            return [...state];
        default:
            return state;
    }
}