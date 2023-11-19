using System.Net;
using System.Text;
using Newtonsoft.Json;

namespace musicCatalogServer  {
    public class HttpServer {
        private int port;
        private HttpListener listener;
        private ConnectionDataBase connectionDB;
        private RequestHandler handler;
        public HttpServer(int _port = 2407) {
            port = _port;
            listener = new HttpListener();
            
            connectionDB = new ConnectionDataBase();
            handler = new RequestHandler(connectionDB);
        }

        public void Start() {
            listener.Prefixes.Add("http://127.0.0.1:" + port.ToString() + "/");
            listener.Start();
            Receive();
        }

        public void Stop() {
            listener.Stop();
        }

        private void Receive() {
            listener.BeginGetContext(new AsyncCallback(ListenerCallback), listener);
        }

        private void ListenerCallback(IAsyncResult result) {
            if (listener.IsListening) {
                
                HttpListenerContext context = listener.EndGetContext(result);
                
                HttpListenerRequest request = context.Request;
                HttpListenerResponse response = context.Response;
                response.Headers.Add("Access-Control-Allow-Origin", "*");
                if (request.HasEntityBody) {
                    Stream body = request.InputStream;
                    StreamReader reader = new StreamReader(request.InputStream);
                    string requestBody = reader.ReadToEnd();
                    Request requestJson = JsonConvert.DeserializeObject<Request>(requestBody);
                    Console.WriteLine(requestBody);
                    string resp = "";
                    switch(requestJson?.Type){
                            case "GET_ALL_SONGS":{
                                resp = JsonConvert.SerializeObject(handler.getAllSongs());
                                break;
                            }
                            case "GET_SONGS_BY_GENRE": {
                                resp = JsonConvert.SerializeObject(handler.GetListSongByGenre(requestJson.ParamSearch));
                                break;
                            }
                            case "GET_ALL_ARTISTS": {
                                resp = JsonConvert.SerializeObject(handler.GetAllArtists());
                                break;
                            }
                            case "GET_ALL_ALBUMS": {
                                resp = JsonConvert.SerializeObject(handler.GetAllAlbum());
                                break;
                            }
                            case "GET_ALBUMS_BY_ARTIST": {
                                resp = JsonConvert.SerializeObject(handler.GetAlbumsByArtistName(requestJson.ParamSearch));
                                break;
                            }
                            case "GET_ALL_COLLECTIONS": {
                                resp = JsonConvert.SerializeObject(handler.GetCollections());
                                break;
                            }
                            case "GET_ALL_GENRES": {
                                resp = JsonConvert.SerializeObject(handler.GetGenres());
                                break;
                            }
                            case "GET_SONGS_BY_ALBUM": {
                                resp = JsonConvert.SerializeObject(handler.GetSongsByAlbum(requestJson.ParamSearch));
                                break;
                            }

                        }

                        // Construct a response.
                        response.StatusCode = (int) HttpStatusCode.OK;
                        response.StatusDescription = "OK";
                        byte[] buffer = Encoding.UTF8.GetBytes(resp);
                        response.ContentLength64 = buffer.Length;
                        response.ContentType = "application/json";
                        response.ContentEncoding = Encoding.UTF8;
                        Stream output = response.OutputStream;
                        output.Write(buffer, 0, buffer.Length);
                        output.Close();

                        reader.Close();
                        body.Close();
                    }
                Receive();
            }
        }
    }
}
