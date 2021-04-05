import { IRoomDetail } from "../../components/FeaturedProperties/FeaturedProperties";

export const ADD_ITEM_TO_COMPARE = "ADD_ITEM_TO_COMPARE";
export const REMOVE_ITEM_FROM_COMPARE = "REMOVE_ITEM_FROM_COMPARE";

interface IAddItemToCompare {
    type: typeof ADD_ITEM_TO_COMPARE;
    item: IRoomDetail;
}

interface IRemoveItemFromCompare {
    type: typeof REMOVE_ITEM_FROM_COMPARE;
    id: number;
}

export type CompareType = IAddItemToCompare | IRemoveItemFromCompare;
