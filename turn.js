// Relais pour les joueurs dont le réseau bloque les connexions directes (compte ExpressTURN gratuit).
// Collez entre les guillemets le « Username » et le « Password » de votre tableau de bord ExpressTURN.
// Ces deux valeurs seront visibles par tous les joueurs : n'utilisez pas le mot de passe de votre compte.
window.TURN_CONFIG = {
  urls: ['turn:free.expressturn.com:3478', 'turn:free.expressturn.com:3478?transport=tcp'],
  username: '',
  credential: '',
};
