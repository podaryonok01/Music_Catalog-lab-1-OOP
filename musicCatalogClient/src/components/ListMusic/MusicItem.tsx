import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material"
import { ISong } from "../../types/typesObj"
import AudiotrackIcon from '@mui/icons-material/Audiotrack';

export const MusicItem = ({ song }: { song: ISong }) => {
    return (
        <ListItem>
        <ListItemAvatar>
            <Avatar>
                <AudiotrackIcon />
            </Avatar>
        </ListItemAvatar>
        <ListItemText 
            primary={song.NameSong} 
            secondary={song.NameArtist}
        />
        </ListItem>
    )
}