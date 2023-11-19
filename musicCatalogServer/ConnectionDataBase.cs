using MySql.Data.MySqlClient;

namespace musicCatalogServer {
    public class ConnectionDataBase {
        private string connectionStr = "server=localhost;user=Darya;database=music_catalog;password=Darya;";
        public MySqlConnection connection ;
        public ConnectionDataBase(){
            this.connection = new MySqlConnection(this.connectionStr);
        }
        public ConnectionDataBase(string _strConnection){
            this.connectionStr = _strConnection;
            this.connection = new MySqlConnection(this.connectionStr);
        }
    }
}