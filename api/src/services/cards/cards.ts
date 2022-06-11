import { db } from 'src/lib/db'
import type {
  QueryResolvers,
  MutationResolvers,
  CardResolvers,
} from 'types/graphql'

export const cards: QueryResolvers['cards'] = () => {
  return db.card.findMany()
}

export const card: QueryResolvers['card'] = ({ id }) => {
  return db.card.findUnique({
    where: { id },
  })
}

export const createCard: MutationResolvers['createCard'] = ({ input }) => {
  return db.card.create({
    data: input,
  })
}

export const updateCard: MutationResolvers['updateCard'] = ({ id, input }) => {
  return db.card.update({
    data: input,
    where: { id },
  })
}

export const deleteCard: MutationResolvers['deleteCard'] = ({ id }) => {
  return db.card.delete({
    where: { id },
  })
}

export const Card: CardResolvers = {
  color: (_obj, { root }) =>
    db.card.findUnique({ where: { id: root.id } }).color(),
  effects: (_obj, { root }) =>
    db.card.findUnique({ where: { id: root.id } }).effects(),
  unlocks: (_obj, { root }) =>
    db.card.findUnique({ where: { id: root.id } }).unlocks(),
  unlockedBy: (_obj, { root }) =>
    db.card.findUnique({ where: { id: root.id } }).unlockedBy(),
}
