import { db } from 'src/lib/db'
import type {
  QueryResolvers,
  MutationResolvers,
  UnlockIconResolvers,
} from 'types/graphql'

export const unlockIcons: QueryResolvers['unlockIcons'] = () => {
  return db.unlockIcon.findMany()
}

export const unlockIcon: QueryResolvers['unlockIcon'] = ({ id }) => {
  return db.unlockIcon.findUnique({
    where: { id },
  })
}

export const createUnlockIcon: MutationResolvers['createUnlockIcon'] = ({
  input,
}) => {
  return db.unlockIcon.create({
    data: input,
  })
}

export const updateUnlockIcon: MutationResolvers['updateUnlockIcon'] = ({
  id,
  input,
}) => {
  return db.unlockIcon.update({
    data: input,
    where: { id },
  })
}

export const deleteUnlockIcon: MutationResolvers['deleteUnlockIcon'] = ({
  id,
}) => {
  return db.unlockIcon.delete({
    where: { id },
  })
}

export const UnlockIcon: UnlockIconResolvers = {
  unlocksCard: (_obj, { root }) =>
    db.unlockIcon.findUnique({ where: { id: root.id } }).unlocksCard(),
  unlockedBy: (_obj, { root }) =>
    db.unlockIcon.findUnique({ where: { id: root.id } }).unlockedBy(),
}
