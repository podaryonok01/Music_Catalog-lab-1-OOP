import { Avatar, ListItem, ListItemAvatar, ListItemText, MenuItem } from "@mui/material";
import { IAlbum } from "../../types/typesObj";
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { Link } from "react-router-dom";
import "../../styles/linkStyle.css"

export const AlbumItem = ({ album }: { album: IAlbum }) => {
    return (
        <Link className="link-router" to={`/albumItem/${album.NameAlbum.replace(/ /g, '_')}`} >
            <MenuItem>
            <ListItemAvatar>
                <Avatar>
                    <LibraryMusicIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText 
                primary={album.NameAlbum} 
                secondary={album.NameArtist}
            />
            </MenuItem>
        </Link>
        
    )
}