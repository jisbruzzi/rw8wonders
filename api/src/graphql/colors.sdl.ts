export const schema = gql`
  type Color {
    id: Int!
    name: String!
    code: String!
    description: String!
    Card: [Card]!
    ComplexEffectColorMap: [ComplexEffectColorMap]!
  }

  type Query {
    colors: [Color!]! @requireAuth
    color(id: Int!): Color @requireAuth
  }

  input CreateColorInput {
    name: String!
    code: String!
    description: String!
  }

  input UpdateColorInput {
    name: String
    code: String
    description: String
  }

  type Mutation {
    createColor(input: CreateColorInput!): Color! @requireAuth
    updateColor(id: Int!, input: UpdateColorInput!): Color! @requireAuth
    deleteColor(id: Int!): Color! @requireAuth
  }
`
