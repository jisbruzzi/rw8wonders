export const schema = gql`
  type Card {
    id: Int!
    name: String!
    color: Color!
    colorId: Int!
    effects: [CardEffectMap]!
    unlocks: UnlockIcon
    unlockedBy: UnlockIcon
    unlocksUnlockIconId: Int
    unlockedByUnlockIconId: Int
  }

  type Query {
    cards: [Card!]! @requireAuth
    card(id: Int!): Card @requireAuth
  }

  input CreateCardInput {
    name: String!
    colorId: Int!
    unlocksUnlockIconId: Int
    unlockedByUnlockIconId: Int
  }

  input UpdateCardInput {
    name: String
    colorId: Int
    unlocksUnlockIconId: Int
    unlockedByUnlockIconId: Int
  }

  type Mutation {
    createCard(input: CreateCardInput!): Card! @requireAuth
    updateCard(id: Int!, input: UpdateCardInput!): Card! @requireAuth
    deleteCard(id: Int!): Card! @requireAuth
  }
`
