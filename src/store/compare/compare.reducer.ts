import { IRoomDetail } from "../../components/FeaturedProperties/FeaturedProperties";
import { ADD_ITEM_TO_COMPARE, CompareType, REMOVE_ITEM_FROM_COMPARE } from "./compare.types";

export interface ICompareInitialState {
    compareItems: IRoomDetail[],
}

const initialState: ICompareInitialState = {
    compareItems: [],
}

const compareReducer = (state = initialState, action: CompareType): ICompareInitialState => {
    switch (action.type) {
        case ADD_ITEM_TO_COMPARE:
            let idAlreadyExists = state.compareItems.indexOf(action.item) > -1;
            let availableIds = state.compareItems.slice();
            if(!idAlreadyExists && state.compareItems.length<3) {
                availableIds.push(action.item); 
            }    
   
            return {
                ...state,
                compareItems: [...availableIds],
            }
        case REMOVE_ITEM_FROM_COMPARE:
            const items = state.compareItems;
            const id = action.id;
            items.splice(id, 1);
            return {
                ...state,
                compareItems: [...items],
            }
        default:
            return state;
    }
}

export default compareReducer;