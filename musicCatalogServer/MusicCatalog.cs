namespace musicCatalogServer {
    public class Artist {
        private string _name;

        public string NameArtist {
            get { return _name; }
            set { _name = value; }
        }

        public Artist(string name){
            _name = name;
        }
    }

    public class Album : Artist {
        private string _nameAlbum;

        public string NameAlbum {
            get { return _nameAlbum; }
            set { _nameAlbum = value; }
        }
        private DateTime _releaseDate;

        public DateTime RealeseDate {
            get { return _releaseDate; }
            set { _releaseDate = value; }
        }

        public Album(string nameArtist, string nameAlbum, DateTime realeseDate)
        :base(nameArtist) {
            _nameAlbum = nameAlbum;
            _releaseDate = realeseDate;
        }
    }

    public class Song : Album {
        private string _nameSong;
        
        public string NameSong {
            get { return _nameSong; }
            set { _nameSong = value; }
        }

        private Genre _genre;

        public string GenreSong {
            get { return _genre.NameGenre; }
            set { _genre = new Genre(value); }
        }

        public Song(string nameSong, string genreName, string nameArtist, string nameAlbum, DateTime realeseDate)
        : base(nameArtist, nameAlbum, realeseDate) {
            _nameSong = nameSong;
            _genre = new Genre(genreName);
        }
    }

    public class Genre {
        private string _nameGenre;

        public string NameGenre {
            get { return _nameGenre; }
            set { _nameGenre = value; }
        }

        public Genre(string nameGenre) {
            _nameGenre = nameGenre;
        }
    }

    public class CollectionSongs {
        private string _nameCollection;

        public string NameCollection {
            get { return _nameCollection; }
            set { _nameCollection = value; }
        }

        private Song[] _songs;

        public Song[] Songs {
            get { return _songs; }
            set { _songs = value; }
        }

        public CollectionSongs(string name, Song[] songs) {
            _nameCollection = name;
            _songs = songs;
        }
    }
}