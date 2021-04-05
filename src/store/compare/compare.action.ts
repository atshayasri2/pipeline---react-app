import { IRoomDetail } from "../../components/FeaturedProperties/FeaturedProperties";
import { ADD_ITEM_TO_COMPARE, REMOVE_ITEM_FROM_COMPARE } from "./compare.types";

export const setItemToCompareReducer = (pItem: IRoomDetail) => {
    return {
        type: ADD_ITEM_TO_COMPARE,
        item: pItem,
    }
}

export const removeItemFromCompareReducer = (cId: number) => {
    return {
        type: REMOVE_ITEM_FROM_COMPARE,
        id: cId,
    }
}
