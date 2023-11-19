import { MenuList } from "@mui/material"
import { IArtist } from "../../types/typesObj"
import { ArtistItem } from "./ArtistItem"

export const ListArtist = ({listArtist}:{listArtist: IArtist[]}) => {
    return(
        <MenuList sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {
                listArtist.map(artist => <ArtistItem key={artist.NameArtist} nameArtist={artist.NameArtist} />)
            }
        </MenuList>
    )
}