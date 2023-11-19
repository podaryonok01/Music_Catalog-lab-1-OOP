import { Avatar, ListItemAvatar, ListItemText, MenuItem } from "@mui/material"
import { Link } from "react-router-dom"
import SpatialAudioOffIcon from '@mui/icons-material/SpatialAudioOff';

export const ArtistItem = ({nameArtist}:{nameArtist:string}) => {
    return (
        <Link className="link-router" to={`/artistItem/${nameArtist.replace(/ /g, '_')}`} >
            <MenuItem>
            <ListItemAvatar>
                <Avatar>
                    <SpatialAudioOffIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText 
                primary={nameArtist} 
            />
            </MenuItem>
        </Link>
        
    )
}