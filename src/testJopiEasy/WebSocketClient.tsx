import {isBrowserSide, mustHydrate} from "jopi-rewrite-ui";

if (isBrowserSide()) {
    const ws = await NodeSpace.webSocket.openConnection('ws://127.0.0.1:3000/test');

    NodeSpace.webSocket.onMessage(ws, message => {
        console.log('Received message from server : ', message);
    });

    NodeSpace.webSocket.onClosed(ws, () => {
        console.log('Connection closed !');
    });

    console.log('Connexion établie !');
    // Envoyer un message au serveur
    console.log("Sending message to server")
    ws.send('Hello from the browser!');
}

const Component = () => {
    return <div>Web Socket Client</div>;
};

export default mustHydrate(import.meta, Component);