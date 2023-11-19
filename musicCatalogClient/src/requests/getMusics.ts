import { ADDRESS_SERVER } from "./settingsConnection";
import { ISong } from "../types/typesObj";

export function GetAllSongs(): Promise<ISong[]>{
    return new Promise((resolve, reject) => {
        fetch(`${ADDRESS_SERVER}/Server`, {
          method: "post",
          body: JSON.stringify({ "Type": "GET_ALL_SONGS" }),
        }).then((res)=>{
          if(res.ok){
            resolve(res.json());
          }
        }).catch((e)=>{
          reject("Ошибка HTTP: " + e);
        })
    })
}

export function GetSongsByGenre(genre: string):Promise<ISong[]>{
    return new Promise((resolve, reject) => {
        fetch(`${ADDRESS_SERVER}/Server`, {
          method: "post",
          body: JSON.stringify({
            "Type": "GET_SONGS_BY_GENRE",
            "ParamSearch": genre
          }),
        }).then((res)=>{
          if(res.ok){
            resolve(res.json());
          }
        }).catch((e)=>{
          reject("Ошибка HTTP: " + e);
        })
    })
}

export function GetSongsByAlbum(albumName: string):Promise<ISong[]>{
  return new Promise((resolve, reject) => {
      fetch(`${ADDRESS_SERVER}/Server`, {
        method: "post",
        body: JSON.stringify({
          "Type": "GET_SONGS_BY_ALBUM",
          "ParamSearch": albumName
        }),
      }).then((res)=>{
        if(res.ok){
          resolve(res.json());
        }
      }).catch((e)=>{
        reject("Ошибка HTTP: " + e);
      })
  })
}