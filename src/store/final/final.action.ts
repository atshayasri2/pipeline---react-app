import { IRoomDetail } from "../../components/FeaturedProperties/FeaturedProperties";
import { ADD_ITEM_TO_FINAL, REMOVE_ITEM_FROM_FINAL } from "./final.types";


export const setItemToFinalizedReducer = (pItem: IRoomDetail) => {
    return {
        type: ADD_ITEM_TO_FINAL,
        item: pItem,
    }
}

export const removeItemFromFinalizedReducer = (fId: number) => {
    return {
        type: REMOVE_ITEM_FROM_FINAL,
        id: fId,
    }
}