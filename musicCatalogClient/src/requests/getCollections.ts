import { ICollectionSongs } from "../types/typesObj";
import { ADDRESS_SERVER } from "./settingsConnection";

export function GetCollections():Promise<ICollectionSongs[]> {
    return new Promise((resolve, reject) => {
        fetch(`${ADDRESS_SERVER}/Server`, {
            method: "post",
            body: JSON.stringify({ "Type": "GET_ALL_COLLECTIONS" }),
        }).then((res)=>{
            if(res.ok){
            resolve(res.json());
            }
        }).catch((e)=>{
            console.error("Ошибка HTTP: " + e)
            reject("Ошибка HTTP: " + e);
        })
    })
}