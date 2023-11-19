import { useNavigate, useParams } from "react-router-dom";
import { ToolbarToBackComponent } from "../../Toolbar/ToolbarToBack";
import { ArtistAlbums } from "../../ListArtist/ArtistAlbums";

export const ArtistItemPage = () => {
    const { artistName } = useParams();
    const name = artistName?.replace(/[_]/g, " " );
    const navigate = useNavigate();

    if(!artistName){
        navigate("/artistList");
    };
    
    return (
        <>
            <ToolbarToBackComponent title={`${name} - Альбомы` || ""}/>
            <ArtistAlbums nameArtist={name || ""} />
        </>
    )
}