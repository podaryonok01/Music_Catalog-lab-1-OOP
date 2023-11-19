import { Avatar, ListItemAvatar, ListItemText, MenuItem } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import { useCallback } from "react";
import { ICollectionSongs } from "../../types/typesObj";

export const CollectionItem = ({ collection }: { collection: ICollectionSongs }) => {
    const navigate = useNavigate();

    const handler = useCallback(()=>{
        navigate('/collectionItem', { state: collection });
    },[navigate, collection]);

    return (
        // <Link className="link-router" to={`/collectionItem/${collectionName.replace(/ /g, '_')}`} >
            <MenuItem onClick={handler}>
            <ListItemAvatar>
                <Avatar>
                    <QueueMusicIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText 
                primary={collection.NameCollection} 
            />
            </MenuItem>
        // </Link>
        
    )
}