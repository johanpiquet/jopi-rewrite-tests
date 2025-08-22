import {isBrowserSide, mustHydrate} from "jopi-rewrite-ui";

if (isBrowserSide()) {
    const ws = new WebSocket('ws://127.0.0.1:3000/test');

    ws.onopen = () => {
        console.log('Connexion établie !');
        // Envoyer un message au serveur
        console.log("Sending message to server")
        ws.send('Hello from the browser!');
    };

    ws.onmessage = (event) => {
        console.log('Received message from server : ', event.data);
    };

    ws.onerror = (event) => {
        console.error('Error WebSocket : ', event);
    };

    ws.onclose = () => {
        console.log('Connection closed !');
    };
}

const Component = () => {
    return <div>Web Socket Client</div>;
};

export default mustHydrate(import.meta, Component);