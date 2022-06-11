import { db } from 'src/lib/db'
import type {
  QueryResolvers,
  MutationResolvers,
  ColorResolvers,
} from 'types/graphql'

export const colors: QueryResolvers['colors'] = () => {
  return db.color.findMany()
}

export const color: QueryResolvers['color'] = ({ id }) => {
  return db.color.findUnique({
    where: { id },
  })
}

export const createColor: MutationResolvers['createColor'] = ({ input }) => {
  return db.color.create({
    data: input,
  })
}

export const updateColor: MutationResolvers['updateColor'] = ({
  id,
  input,
}) => {
  return db.color.update({
    data: input,
    where: { id },
  })
}

export const deleteColor: MutationResolvers['deleteColor'] = ({ id }) => {
  return db.color.delete({
    where: { id },
  })
}

export const Color: ColorResolvers = {
  Card: (_obj, { root }) =>
    db.color.findUnique({ where: { id: root.id } }).Card(),
  ComplexEffectColorMap: (_obj, { root }) =>
    db.color.findUnique({ where: { id: root.id } }).ComplexEffectColorMap(),
}
