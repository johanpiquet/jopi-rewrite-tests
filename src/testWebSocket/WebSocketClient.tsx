import {isBrowserSide, mustHydrate} from "jopi-rewrite-ui";

if (isBrowserSide()) {
    const ws = new WebSocket('ws://127.0.0.1:3000');

    ws.onopen = (event) => {
        console.log('Connexion établie !');
        // Envoyer un message au serveur
        ws.send('Bonjour, serveur !');
    };

    ws.onmessage = (event) => {
        console.log('Message from serveur : ', event.data);
    };

    ws.onerror = (event) => {
        console.error('Error WebSocket : ', event);
    };

    ws.onclose = () => {
        console.log('Connection close !');
    };
}

const Component = () => {
    return <div>Web Socket Client</div>;
};

export default mustHydrate(import.meta, Component);