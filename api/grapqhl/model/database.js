const firebaseAdmin = require('firebase-admin');
const database = firebaseAdmin.firestore();
const settings = { timestampsInSnapshots: true };
database.settings(settings);

const databaseCollection = database.collection('places');

function getAllPlaces() {
  return databaseCollection.get();
}

module.exports = {
  databaseCollection: databaseCollection,
  getAllPlaces: getAllPlaces,
};
