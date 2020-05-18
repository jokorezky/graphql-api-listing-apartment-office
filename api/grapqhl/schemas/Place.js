const { buildSchema } = require('graphql');
module.exports = buildSchema(
  `
        type Others {
            url : String!
        }
        type Image {
            primary : String!
            other : [Others!]!
        }
        type Facility {
            id : String!
        }
        type Address {
            street : String!
            city : String!
            country : String!
            longitude : Float!
            latitude : Float!
        }
        type Place {
            id: String!
            name: String!
            description: String!
            type: String!
        }

        input PlaceInput {
            id: String!
            name: String!
            description: String!
            type: String!
        }

        type RootQuery{
            places: [Place!]!
        }

        type RootMutation {
            createPlace(placeInput: PlaceInput):Place
        }

        schema {
            query: RootQuery
            mutation: RootMutation
        }
    `
);
