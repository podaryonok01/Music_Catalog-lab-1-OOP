import { List } from "@mui/material";
import { ISong } from "../../types/typesObj";
import { MusicItem } from "./MusicItem";

export const ListMusicLayout = ({ listSongs }: { listSongs: ISong[] }) => {
    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {
                listSongs.map(song => <MusicItem key={song.NameSong} song={song} />)
            }
        </List>
    )
}