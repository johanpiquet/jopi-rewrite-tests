import {jopiApp} from "jopi-rewrite";

jopiApp.startApp(jopiEasy => {
    jopiEasy.new_webSite("http://127.0.0.1")
        .add_sourceServer()
        .useOrigin("http://my-source-server-a.local")

        // Is called to start the remote server.
        .do_startServer(async () => {
            console.log("Starting server A");

            // Start the docker.
            await Bun.$`cd wordpressDocker; docker compose up -d`;

            // Allows stopping the server after 10 minutes
            // if not request are emitted for this server.
            return NodeSpace.timer.ONE_MINUTE * 10;
        })

        // Allow stopping the remote server.
        .do_stopServer(async () => {
            console.log("Stopping server A");

            // Stop the docker.
            await Bun.$`cd wordpressDocker; docker compose down`;
        })

        .END_add_sourceServer()

        // directProxyToServer allows sending the request to the server.
        .add_path_GET("/**", req => req.directProxyToServer())
});