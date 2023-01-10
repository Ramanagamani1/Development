const SET_SELECTED_CATEGORY = "SET_SELECTED_CATEGORY";
const LOAD_CATEGORIES_DONE = "LOAD_CATEGORIES_DONE"
const LOAD_CATEGORIES_START = "LOAD_CATEGORIES_START "
const LOAD_CATEGORIES_ERROR = "LOAD_CATEGORIES_ERROR"

export function categoriesLoading() {
     return {
        type: LOAD_CATEGORIES_START
     }
}

export function categoriesLoaded(categories){
    return {
        type: LOAD_CATEGORIES_DONE,
        payload: categories
    }
}

export function categoriesLoadingFailed(error) {
    return {
        type: LOAD_CATEGORIES_ERROR,
        payload: error
    }
}

export function loadCategories() {
   return async (dispatch,getState) => {
    dispatch(categoriesLoading());
    console.log(getState())
    try {
        const response = await fetch("http://localhost:3001/categories");
        if (response.ok) {
            const result = await response.json();
            dispatch(categoriesLoaded(result));
        } else {
            dispatch(categoriesLoadingFailed(new Error(response.statusText)));
        }
        
    } catch(error) {
        dispatch(categoriesLoadingFailed(error));
    }
  }
}


function categoriesReducer(state= {
    categories: [],
    selectedCategoryId: null,
    isLoading: false,
    error : null
},action) {
    switch(action.type) {

        case SET_SELECTED_CATEGORY :
            return {...state, selectedCategoryId: action.payload};

        case LOAD_CATEGORIES_START :
            return {...state, isLoading: true};

        case LOAD_CATEGORIES_DONE : 
           return {...state, isLoading: false, categories: action.payload}

        case LOAD_CATEGORIES_ERROR :
            return {...state, isLoading: false, error: action.payload}

        default : return state;
    }
}

export default categoriesReducer;