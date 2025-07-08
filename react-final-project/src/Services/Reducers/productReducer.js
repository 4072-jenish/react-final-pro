

const productReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            return [...state, action.payload];
        case "DELETE_PRODUCT":
            return state.filter((product) => product.id !== action.payload);
        case "UPDATE_PRODUCT":
            return state.map();
        default: return state;
    }
}

export default productReducer;
