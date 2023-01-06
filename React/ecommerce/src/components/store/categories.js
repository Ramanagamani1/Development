

function categoriesReducer(state= {
    catefories: [],
    selectedCategoryId: null,
    isLoading: false,
    error : null
},action) {
    switch(action.type) {

        case "SET_SELECTED_CATEGORY" :
            return {...state, selectedCategoryId: action.payload};

        case "LOAD_CATEGORIES_START" :
            return {...state, isLoading: true};

        case "LOAD_CATEGORIES_DONE" : 
           return {...state, isLoading: false, categories: action.payload}

        case "LOAD_CATEGORIES_ERROR" :
            return {...state, isLoading: false, error: action.payload}

        default : return state;
    }
}

export default categoriesReducer;