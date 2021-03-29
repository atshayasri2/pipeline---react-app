import { IRoomDetail } from "../../components/FeaturedProperties/FeaturedProperties";
import { ADD_ITEM_TO_FINAL, finalType, REMOVE_ITEM_FROM_FINAL } from "./final.types";

export interface IFinalInitialState {
    FinalItems: IRoomDetail[],
}

const initialState: IFinalInitialState = {
    FinalItems: [],
}

const finalReducer = (state = initialState, action: finalType): IFinalInitialState => {
    switch (action.type) {
        case ADD_ITEM_TO_FINAL:
            let idAlreadyExists = state.FinalItems.indexOf(action.item) > -1;
            let availableIds = state.FinalItems.slice();
            if(!idAlreadyExists && state.FinalItems.length<3) {
                availableIds.push(action.item); 
            }         
            return {
                ...state,
                FinalItems: [...availableIds],
            }
        case REMOVE_ITEM_FROM_FINAL:
            const items = state.FinalItems;
            const id = action.id;
            items.splice(id, 1);
            return {
                ...state,
                FinalItems: [...items],
            }
        default:
            return state;
    }
}

export default finalReducer;