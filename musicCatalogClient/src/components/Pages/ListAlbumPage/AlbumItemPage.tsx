import { useNavigate, useParams } from "react-router-dom";
import { ToolbarToBackComponent } from "../../Toolbar/ToolbarToBack";
import { AlbumSongs } from "../../ListAlbums/AlbumSongs";

export const AlbumItemPage = () => {
    const { albumName } = useParams();
    const name = albumName?.replace(/[_]/g, " " );
    const navigate = useNavigate();

    if(!albumName){
        navigate("/albumList");
    };
    
    return (
        <>
            <ToolbarToBackComponent title={`Альбом: ${name}` || ""}/>
            <AlbumSongs nameAlbum={name || ""} />
        </>
    )
}