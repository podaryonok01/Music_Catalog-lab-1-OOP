import { useLocation, useNavigate } from "react-router-dom";
import { ToolbarToBackComponent } from "../../Toolbar/ToolbarToBack";
import { ICollectionSongs, ISong } from "../../../types/typesObj";
import { ListMusicLayout } from "../../ListMusic/ListMusicLayout";
import { useMemo, useState } from "react";
import { SearchComponent } from "../../SearchComponent";

export const CollectionItemPage = () => {
    const location = useLocation();
    const state = location.state as ICollectionSongs;
    const navigate = useNavigate();

    const [filterText, setFilterText] = useState("");

    const filteredListSongs: ISong[] = useMemo(()=>{
        return state.Songs.filter((song) => 
            song.NameSong.toLowerCase().includes(filterText.toLowerCase().trim()) 
            || song.NameArtist.toLowerCase().includes(filterText.toLowerCase().trim()) 
        )
    },[state.Songs, filterText])

    if(!state){
        navigate("/collectionsList");
    };
    
    return (
        <>
            <ToolbarToBackComponent title={`Сборник: ${state.NameCollection}` || ""}/>
            <SearchComponent filterText={filterText} onChangeText={setFilterText} />
            <ListMusicLayout listSongs={filteredListSongs} />
        </>
    )
}