import React, { useEffect, useState, useMemo } from "react";
import { ListMusicLayout } from "../ListMusic/ListMusicLayout";
import { SearchComponent } from "../SearchComponent";
import { ISong } from "../../types/typesObj";
import { GetSongsByAlbum } from "../../requests/getMusics";

export const AlbumSongs = ({ nameAlbum }: { nameAlbum: string }) => {

    const [listSongs, setListSongs] = useState<ISong[]>([]);
    const [filterText, setFilterText] = useState("");

    const filteredListSongs: ISong[] = useMemo(()=>{
        return listSongs.filter((song) => 
            song.NameSong.toLowerCase().includes(filterText.toLowerCase().trim()) 
            || song.NameArtist.toLowerCase().includes(filterText.toLowerCase().trim()) 
        )
    },[listSongs, filterText])

    useEffect(()=>{
        GetSongsByAlbum(nameAlbum).then((res)=>{
            setListSongs(res);
        });
    },[]);

    return (
        <>
            <SearchComponent filterText={filterText} onChangeText={setFilterText} />
            <ListMusicLayout listSongs={filteredListSongs} />
        </>
    )
}