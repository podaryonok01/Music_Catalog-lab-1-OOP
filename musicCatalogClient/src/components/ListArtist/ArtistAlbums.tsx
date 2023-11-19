import { useEffect, useMemo, useState } from "react";
import { ListAlbums } from "../ListAlbums/ListAlbums"
import { IAlbum } from "../../types/typesObj";
import { SearchComponent } from "../SearchComponent";
import { GetAlbumsByArtist } from "../../requests/getAlbums";

export const ArtistAlbums = ({nameArtist}:{nameArtist:string}) => {
    const [listAlbums, setListAlbums] = useState<IAlbum[]>([]);
    const [filterText, setFilterText] = useState("");

    const filteredListAlbums: IAlbum[] = useMemo(()=>{
        return listAlbums.filter((album) => 
            album.NameAlbum.toLowerCase().includes(filterText.toLowerCase().trim()) 
            || album.NameArtist.toLowerCase().includes(filterText.toLowerCase().trim()) 
        )
    },[listAlbums, filterText])

    useEffect(()=>{
        GetAlbumsByArtist(nameArtist).then((res)=>{
            setListAlbums(res);
        });
    },[]);
    
    return(
        <>
            <SearchComponent filterText={filterText} onChangeText={setFilterText} />
            <ListAlbums listAlbums={filteredListAlbums}/>
        </>
        
    )
}