import { MenuList } from "@mui/material"
import { ICollectionSongs } from "../../types/typesObj"
import { CollectionItem } from "./CollectionItem"

export const ListCollections = ({ listCollections }: { listCollections: ICollectionSongs[] }) => {
    return(
        <MenuList sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {
                listCollections.map(collection => <CollectionItem key={collection.NameCollection} collection={collection} />)
            }
        </MenuList>
    )
}