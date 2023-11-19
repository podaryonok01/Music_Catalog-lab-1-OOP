import { useCallback, useEffect, useState } from "react";
import { IGenre } from "../../../types/typesObj";
import { GetGenres } from "../../../requests/getAllGenres";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

export const SelectGenre = ({selectedGenre, onChangeSelectedGenre}: {selectedGenre: string|null, onChangeSelectedGenre:(val: string|null)=>void}) => {
    const [listGenres, setListGenres] = useState<IGenre[]>([]);

    useEffect(()=>{
        GetGenres().then((res)=>{
            setListGenres(res)
        })
    },[]);

    const handleChange = useCallback((event: SelectChangeEvent)=>{
        const val = event.target.value as string;
        onChangeSelectedGenre(val.length ? val : null);
    },[onChangeSelectedGenre])
    
    return (
        <FormControl sx={{width: "30%"}}>
            <InputLabel id="genre-select-label">Жанр</InputLabel>
            <Select
                size="small"
                labelId="genre-select-label"
                value={selectedGenre || ""}
                label="Жанр"
                onChange={handleChange}
            >
                <MenuItem value={""}>Все</MenuItem>
                {
                    listGenres.map((genre)=>
                        <MenuItem key={genre.NameGenre} value={genre.NameGenre}>{genre.NameGenre}</MenuItem>
                    )
                }
            </Select>
        </FormControl>
    )
}