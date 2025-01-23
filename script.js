function sendCommand(command) {
    const url = `http://172.24.1.2:8080/cgi-bin/do.sh?key=${command}`;
    console.log(`Envoi de la commande : ${url}`);

    fetch(url, {
        method: 'GET'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`);
        }
        console.log(`Commande envoyée avec succès : ${url}`);
    })
    .catch(error => {
        console.error('Erreur lors de l’envoi de la commande :', error);
        alert('Impossible de se connecter au serveur.');
    });
}
