function sendCommand(command) {
    const url = `http://172.24.1.2:8080/cgi-bin/do.sh?key=${command}`;

    fetch(url, {
        method: 'GET', // Envoie une requête GET
        mode: 'no-cors' // Désactive la vérification CORS
    })
    .then(() => {
        console.log(`Commande envoyée : ${url}`);
    })
    .catch(error => {
        console.error('Erreur lors de l’envoi de la commande :', error);
        alert('Impossible de se connecter au serveur.');
    });
}
