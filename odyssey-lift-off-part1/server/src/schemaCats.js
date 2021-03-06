import { gql } from 'apollo-server';

const typeCats = gql`
  type Query {
    spaceCats: [SpaceCat]
  }

  type SpaceCat {
    id: ID!
    name: String!
    age: Int
    missions: [Mission]
  }

  type Mission {
    id: ID!
    name: String!
    description: String!
  }
`;

export default typeDefs;