import { ToolbarComponent } from "../../Toolbar/Toolbar";
import CardLayout from "./CardLayout";
import { Stack } from "@mui/material";
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import SpatialAudioOffIcon from '@mui/icons-material/SpatialAudioOff';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import "../../../styles/mainLayoutStyle.css"

export const MainLayout = () => {
    return (
        <>
            <ToolbarComponent title="Главная"/>
            <Stack spacing={2} className="main-layout" >
                <CardLayout 
                    title="Треки"
                    linkTo="/listMusic" 
                    icon={<AudiotrackIcon/>}
                />
                <CardLayout 
                    title="Исполнители"
                    linkTo="/artistList" 
                    icon={<SpatialAudioOffIcon/>}
                />
                <CardLayout 
                    title="Альбомы"
                    linkTo="/albumList" 
                    icon={<LibraryMusicIcon/>}
                />
                <CardLayout 
                    title="Сборники"
                    linkTo="/collectionsList" 
                    icon={<QueueMusicIcon/>}
                />
            </Stack>
            
        </>
    )
}