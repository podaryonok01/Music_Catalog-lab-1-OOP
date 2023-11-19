import React from 'react';
import './App.css';
import { ListMusicPage } from "./components/Pages/ListMusicPage/ListMusicPage";
import * as ReactDOM from "react-dom/client";

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import { MainLayout } from './components/Pages/MainLayout/MainLayout';
import { ArtistListPage } from './components/Pages/ListArtistPage/ArtistListPage';
import { AlbumListPage } from './components/Pages/ListAlbumPage/AlbumListPage';
import { theme } from './ThemeUI';
import { ThemeProvider } from '@mui/material';
import { AlbumItemPage } from './components/Pages/ListAlbumPage/AlbumItemPage';
import { CollectionsPage } from './components/Pages/ListCollectionsPage/CollectionsPage';
import { CollectionItemPage } from './components/Pages/ListCollectionsPage/CollectionItemPage';
import { ArtistItemPage } from './components/Pages/ListArtistPage/ArtistItemPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
  },
  {
    path: "/listMusic",
    element: <ListMusicPage/>,
  },
  {
    path: "/collectionsList",
    element: <CollectionsPage/>,
  },
  {
    path:"collectionItem",
    element: <CollectionItemPage />
  },
  {
    path: "/artistList",
    element: <ArtistListPage />
  },
  {
    path: "/albumList",
    element: <AlbumListPage/>
  },
  {
    path: "/albumItem/:albumName",
    element: <AlbumItemPage/>
  },
  {
    path: "/artistItem/:artistName",
    element: <ArtistItemPage/>
  }
]);

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
      
    </React.StrictMode>
  );
}

export default App;
