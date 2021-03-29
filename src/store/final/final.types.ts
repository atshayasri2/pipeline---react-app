import { IRoomDetail } from "../../components/FeaturedProperties/FeaturedProperties";

export const ADD_ITEM_TO_FINAL = "ADD_ITEM_TO_FINAL";
export const REMOVE_ITEM_FROM_FINAL = "REMOVE_ITEM_FROM_FINAL";

interface IAddItemToFinal {
    type: typeof ADD_ITEM_TO_FINAL;
    item: IRoomDetail;
}

interface IRemoveItemFromFinal {
    type: typeof REMOVE_ITEM_FROM_FINAL;
    id: number;
}

export type finalType = IAddItemToFinal | IRemoveItemFromFinal;
