using System.Data;
using MySql.Data.MySqlClient;

namespace musicCatalogServer
{
    public class RequestHandler {
        ConnectionDataBase connectionDB;
        public RequestHandler(ConnectionDataBase _connectionDataBase){
            connectionDB = _connectionDataBase;
        }
        public List<Song> getAllSongs(){
            connectionDB.connection.Open();
            string sql = "SELECT s.Name NameSong, g.Name GenreSong, a.Name NameAlbum, a.DateRealise RealeseDate, art.Name NameArtist FROM `Song`as s JOIN `Genre` as g ON s.IdGenre = g.Id JOIN `Album` as a ON s.IdAlbum = a.Id JOIN `Artist` as art ON a.IdArtist = art.Id;";
            MySqlCommand command = new MySqlCommand(sql, this.connectionDB.connection);
            MySqlDataReader reader = command.ExecuteReader();

            DataTable dataTable = new DataTable();
            dataTable.Load(reader);

            List<Song> ListSong = new List<Song>();
            ListSong = (from DataRow dr in dataTable.Rows
                select new Song(
                    dr["NameSong"].ToString(),
                    dr["GenreSong"].ToString(),
                    dr["NameArtist"].ToString(),
                    dr["nameAlbum"].ToString(),
                    DateTime.Parse(dr["RealeseDate"].ToString())
                ){}
            ).ToList();
            connectionDB.connection.Close();
            return ListSong;
        }

        public List<Song> GetListSongByGenre(string _genre){
            connectionDB.connection.Open();
            string sql = "SELECT s.Name NameSong, g.Name GenreSong, a.Name NameAlbum, a.DateRealise RealeseDate, art.Name NameArtist FROM `Song`as s JOIN `Genre` as g ON s.IdGenre = g.Id JOIN `Album` as a ON s.IdAlbum = a.Id JOIN `Artist` as art ON a.IdArtist = art.Id WHERE g.Name = \"" + _genre + "\"";
            MySqlCommand command = new MySqlCommand(sql, this.connectionDB.connection);
            MySqlDataReader reader = command.ExecuteReader();

            DataTable dataTable = new DataTable();
            dataTable.Load(reader);

            List<Song> ListSong = new List<Song>();
            ListSong = (from DataRow dr in dataTable.Rows
                select new Song(
                    dr["NameSong"].ToString(),
                    dr["GenreSong"].ToString(),
                    dr["NameArtist"].ToString(),
                    dr["nameAlbum"].ToString(),
                    DateTime.Parse(dr["RealeseDate"].ToString())
                ){}
            ).ToList();
            connectionDB.connection.Close();
            return ListSong;
        }

        public List<Artist> GetAllArtists(){
            connectionDB.connection.Open();
            string sql = "SELECT Name FROM `Artist`";
            MySqlCommand command = new MySqlCommand(sql, this.connectionDB.connection);
            MySqlDataReader reader = command.ExecuteReader();

            DataTable dataTable = new DataTable();
            dataTable.Load(reader);

            List<Artist> ListArtist = new List<Artist>();
            ListArtist = (from DataRow dr in dataTable.Rows
                select new Artist(
                    dr["Name"].ToString()
                ){}
            ).ToList();
            connectionDB.connection.Close();
            return ListArtist;
        }

        public List<Album> GetAllAlbum(){
            connectionDB.connection.Open();
            string sql = "SELECT a.Name NameAlbum, a.DateRealise RealeseDate, art.Name NameArtist FROM `Album`as a JOIN `Artist`as art ON a.IdArtist = art.Id;";
            MySqlCommand command = new MySqlCommand(sql, this.connectionDB.connection);
            MySqlDataReader reader = command.ExecuteReader();

            DataTable dataTable = new DataTable();
            dataTable.Load(reader);

            List<Album> ListAlbum = new List<Album>();
            ListAlbum = (from DataRow dr in dataTable.Rows
                select new Album(
                    dr["NameArtist"].ToString(),
                    dr["NameAlbum"].ToString(),
                    DateTime.Parse(dr["RealeseDate"].ToString())

                ){}
            ).ToList();
            connectionDB.connection.Close();
            return ListAlbum;
        }

        public List<Album> GetAlbumsByArtistName(string _nameArtist){
            connectionDB.connection.Open();
            string sql = "SELECT a.Name NameAlbum, a.DateRealise RealeseDate, art.Name NameArtist FROM `Album`as a JOIN `Artist`as art ON a.IdArtist = art.Id WHERE art.Name = \"" + _nameArtist + "\"";
            MySqlCommand command = new MySqlCommand(sql, this.connectionDB.connection);
            MySqlDataReader reader = command.ExecuteReader();

            DataTable dataTable = new DataTable();
            dataTable.Load(reader);

            List<Album> ListAlbum = new List<Album>();
            ListAlbum = (from DataRow dr in dataTable.Rows
                select new Album(
                    dr["NameArtist"].ToString(),
                    dr["NameAlbum"].ToString(),
                    DateTime.Parse(dr["RealeseDate"].ToString())

                ){}
            ).ToList();
            connectionDB.connection.Close();
            return ListAlbum;
        }

        public List<Song> GetSongsByAlbum(string _nameAlbum){
            connectionDB.connection.Open();
            string sql = "SELECT s.Name NameSong, g.Name GenreSong, a.Name NameAlbum, a.DateRealise RealeseDate, art.Name NameArtist FROM `Song`as s JOIN `Genre` as g ON s.IdGenre = g.Id JOIN `Album` as a ON s.IdAlbum = a.Id JOIN `Artist` as art ON a.IdArtist = art.Id WHERE a.Name = \"" + _nameAlbum + "\";";

            MySqlCommand command = new MySqlCommand(sql, this.connectionDB.connection);
            MySqlDataReader reader = command.ExecuteReader();

            DataTable dataTable = new DataTable();
            dataTable.Load(reader);

            List<Song> ListSongs = new List<Song>();
            ListSongs = (from DataRow dr in dataTable.Rows
                select new Song(
                    dr["NameSong"].ToString(),
                    dr["GenreSong"].ToString(),
                    dr["NameArtist"].ToString(),
                    dr["nameAlbum"].ToString(),
                    DateTime.Parse(dr["RealeseDate"].ToString())
                ){}
            ).ToList();
            connectionDB.connection.Close();
            return ListSongs;

        }

        public List<CollectionSongs> GetCollections(){
            connectionDB.connection.Open();
            string sqlGetCollections = "SELECT Id, Name FROM `Collection`;";
            MySqlCommand command = new MySqlCommand(sqlGetCollections, this.connectionDB.connection);
            MySqlDataReader reader = command.ExecuteReader();
            
            DataTable dataTableCollections = new DataTable();
            dataTableCollections.Load(reader);

            connectionDB.connection.Close();
            List<CollectionSongs> ListCollections = new List<CollectionSongs>();
            foreach(DataRow row in dataTableCollections.Rows){
                connectionDB.connection.Open();
                int idCollection = Convert.ToInt32(row["Id"]);
                string sql = "SELECT s.Name NameSong, g.Name GenreSong, a.Name NameAlbum, a.DateRealise RealeseDate, art.Name NameArtist FROM `Song`as s JOIN `Genre` as g ON s.IdGenre = g.Id JOIN `Album` as a ON s.IdAlbum = a.Id JOIN `Artist` as art ON a.IdArtist = art.Id JOIN `Collection_Song` as c_s ON c_s.IdSong=s.Id WHERE c_s.IdCollection = \"" + idCollection + "\"";
                MySqlCommand commandSongs = new MySqlCommand(sql, this.connectionDB.connection);
                MySqlDataReader readerSongs = commandSongs.ExecuteReader();

                DataTable dataTable = new DataTable();
                dataTable.Load(readerSongs);

                List<Song> ListSong = new List<Song>();
                ListSong = (from DataRow dr in dataTable.Rows
                    select new Song(
                        dr["NameSong"].ToString(),
                        dr["GenreSong"].ToString(),
                        dr["NameArtist"].ToString(),
                        dr["nameAlbum"].ToString(),
                        DateTime.Parse(dr["RealeseDate"].ToString())
                    ){}
                ).ToList();

                ListCollections.Add(new CollectionSongs(
                    row["Name"].ToString(),
                    ListSong.ToArray()
                ));
                connectionDB.connection.Close();
            }
            
            return ListCollections;
        }

        public List<Genre> GetGenres() {
            connectionDB.connection.Open();
            string sql = "SELECT Name NameGenre FROM `Genre`;";
            MySqlCommand command = new MySqlCommand(sql, this.connectionDB.connection);
            MySqlDataReader reader = command.ExecuteReader();

            DataTable dataTable = new DataTable();
            dataTable.Load(reader);

            List<Genre> ListGenre = new List<Genre>();
            ListGenre = (from DataRow dr in dataTable.Rows
                select new Genre(
                    dr["NameGenre"].ToString()
                ){}
            ).ToList();
            connectionDB.connection.Close();
            return ListGenre;
        }
    }
}