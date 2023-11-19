import React, { useEffect, useState, useMemo } from "react";
import { ToolbarComponent } from "../../Toolbar/Toolbar";
import { ListMusicLayout } from "../../ListMusic/ListMusicLayout";
import { SearchComponent } from "../../SearchComponent";
import { ISong } from "../../../types/typesObj";
import { GetAllSongs, GetSongsByGenre } from "../../../requests/getMusics";
import { Stack } from "@mui/material";
import { SelectGenre } from "./SelectGenre";

export const ListMusicPage = () => {

    const [listSongs, setListSongs] = useState<ISong[]>([]);
    const [filterText, setFilterText] = useState("");
    const [selectedGenre, setSelectedGenre] = useState<string|null>(null);

    const filteredListSongs: ISong[] = useMemo(()=>{
        return listSongs.filter((song) => 
            song.NameSong.toLowerCase().includes(filterText.toLowerCase().trim()) 
            || song.NameArtist.toLowerCase().includes(filterText.toLowerCase().trim()) 
        )
    },[listSongs, filterText])

    useEffect(()=>{
        if(!selectedGenre){
            GetAllSongs().then((res)=>{
                setListSongs(res);
            });
        }else{
            GetSongsByGenre(selectedGenre).then((res)=>{
                setListSongs(res);
            });
        }
    },[selectedGenre]);

    return (
        <>
            <ToolbarComponent title="Треки"/>
            <Stack direction="row" alignItems="center" spacing={2} sx={{margin: "1em"}}>
                <SearchComponent filterText={filterText} onChangeText={setFilterText} />
                <SelectGenre selectedGenre={selectedGenre} onChangeSelectedGenre={setSelectedGenre} />
            </Stack>
            
            <ListMusicLayout listSongs={filteredListSongs} />
        </>
    )
}