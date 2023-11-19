export interface IArtist {
    NameArtist: string;
}

export interface IAlbum extends IArtist {
    NameAlbum: string;
    RealeseDate: Date;
}

export interface ISong extends IAlbum {
    NameSong: string;
    GenreSong: string;
}

export interface ICollectionSongs {
    NameCollection: string;
    Songs: ISong[];
}

export interface IGenre {
    NameGenre: string;
}