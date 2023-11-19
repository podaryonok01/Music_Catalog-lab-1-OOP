import { IAlbum } from "../types/typesObj";
import { ADDRESS_SERVER } from "./settingsConnection";

export function GetAllAlbums():Promise<IAlbum[]>{
    return new Promise((resolve, reject) => {
        fetch(`${ADDRESS_SERVER}/Server`, {
            method: "post",
            body: JSON.stringify({ "Type": "GET_ALL_ALBUMS" }),
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

export function GetAlbumsByArtist(nameArtist:string):Promise<IAlbum[]>{
    return new Promise((resolve, reject) => {
        fetch(`${ADDRESS_SERVER}/Server`, {
            method: "post",
            body: JSON.stringify({
                "Type": "GET_ALBUMS_BY_ARTIST",
                "ParamSearch": nameArtist
            }),
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