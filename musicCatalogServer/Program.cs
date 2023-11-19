namespace musicCatalogServer
{
    class Program {
        private static bool _keepRunning = true;

        static void Main() {
            Console.CancelKeyPress += delegate(object sender, ConsoleCancelEventArgs e) {
                e.Cancel = true;
                _keepRunning = false;
            };

            Console.WriteLine("Starting HTTP listener...");

            var httpServer = new HttpServer();
            httpServer.Start();

            while (_keepRunning) { }

            httpServer.Stop();

            Console.WriteLine("Exiting gracefully...");
        }
    }
}