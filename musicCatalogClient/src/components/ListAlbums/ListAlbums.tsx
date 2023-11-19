import { List, MenuList } from "@mui/material"
import { IAlbum } from "../../types/typesObj"
import { AlbumItem } from "./AlbumItem"

export const ListAlbums = ({ listAlbums }: { listAlbums: IAlbum[] }) => {
    return (
        <MenuList sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {
                listAlbums.map(album => <AlbumItem key={album.NameAlbum} album={album} />)
            }
        </MenuList>
    )
}