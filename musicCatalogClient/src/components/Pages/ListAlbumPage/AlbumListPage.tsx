import { useEffect, useState, useMemo } from "react";
import { SearchComponent } from "../../SearchComponent"
import { ToolbarComponent } from "../../Toolbar/Toolbar"
import { ListAlbums } from "../../ListAlbums/ListAlbums";
import { IAlbum } from "../../../types/typesObj";
import { GetAllAlbums } from "../../../requests/getAlbums";

export const AlbumListPage = () => {
    const [listAlbums, setListAlbums] = useState<IAlbum[]>([]);
    const [filterText, setFilterText] = useState("");

    const filteredListAlbums: IAlbum[] = useMemo(()=>{
        return listAlbums.filter((album) => 
            album.NameAlbum.toLowerCase().includes(filterText.toLowerCase().trim()) 
            || album.NameArtist.toLowerCase().includes(filterText.toLowerCase().trim()) 
        )
    },[listAlbums, filterText])

    useEffect(()=>{
        GetAllAlbums().then((res)=>{
            setListAlbums(res);
        });
    },[]);

    return (
        <>
            <ToolbarComponent title="Альбомы"/>
            <SearchComponent filterText={filterText} onChangeText={setFilterText} />
            <ListAlbums listAlbums={filteredListAlbums} />
        </>
    )
}