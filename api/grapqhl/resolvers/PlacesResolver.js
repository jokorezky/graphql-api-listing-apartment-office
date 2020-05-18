const { databaseCollection, getAllPlaces } = require('../model/database');

module.exports = {
  createPlace: async (args) => {
    try {
      const place = {
        id: args.placeInput.id,
        name: args.placeInput.name,
        description: args.placeInput.description,
        type: args.placeInput.type,
      };
      await databaseCollection.add(place);
      return {
        id: place.id,
        name: place.name,
        description: place.description,
        type: place.type,
      };
    } catch (err) {
      throw err;
    }
  },

  places: async () => {
    try {
      const fetchedPlaces = await getAllPlaces();

      return await fetchedPlaces.docs.map((places) => {
        return {
          id: places._fieldsProto.id.stringValue,
          description: places._fieldsProto.description.stringValue,
          name: places._fieldsProto.name.stringValue,
          type: places._fieldsProto.type.stringValue,
        };
      });
    } catch (err) {
      throw err;
    }
  },
};
