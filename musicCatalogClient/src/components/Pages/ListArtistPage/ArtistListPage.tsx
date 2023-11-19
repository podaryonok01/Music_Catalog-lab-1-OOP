import { useEffect, useMemo, useState } from "react";
import { IArtist } from "../../../types/typesObj";
import { ListArtist } from "../../ListArtist/ListArtist"
import { SearchComponent } from "../../SearchComponent";
import { ToolbarComponent } from "../../Toolbar/Toolbar"
import { GetAllArtists } from "../../../requests/getArtists";

export const ArtistListPage = () => {
    const [listArtist, setListArtist] = useState<IArtist[]>([]);
    const [filterText, setFilterText] = useState("");

    const filteredListArtist: IArtist[] = useMemo(()=>{
        return listArtist.filter((artiist) => 
            artiist.NameArtist.toLowerCase().includes(filterText.toLowerCase().trim())  
        )
    },[listArtist, filterText])

    useEffect(()=>{
        GetAllArtists().then((res)=>{
            setListArtist(res);
        });
    },[]);
    return(
        <>
            <ToolbarComponent title="Исполнители"/>
            <SearchComponent filterText={filterText} onChangeText={setFilterText} />
            <ListArtist listArtist={filteredListArtist} />
        </>
    )
}