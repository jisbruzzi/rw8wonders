export const schema = gql`
  type UnlockIcon {
    id: Int!
    name: String!
    unlocksCard: [Card]!
    unlockedBy: [Card]!
  }

  type Query {
    unlockIcons: [UnlockIcon!]! @requireAuth
    unlockIcon(id: Int!): UnlockIcon @requireAuth
  }

  input CreateUnlockIconInput {
    name: String!
  }

  input UpdateUnlockIconInput {
    name: String
  }

  type Mutation {
    createUnlockIcon(input: CreateUnlockIconInput!): UnlockIcon! @requireAuth
    updateUnlockIcon(id: Int!, input: UpdateUnlockIconInput!): UnlockIcon!
      @requireAuth
    deleteUnlockIcon(id: Int!): UnlockIcon! @requireAuth
  }
`
