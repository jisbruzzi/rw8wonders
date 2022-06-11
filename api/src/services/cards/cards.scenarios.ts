import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CardCreateArgs>({
  card: {
    one: {
      data: {
        name: 'String',
        color: {
          create: { name: 'String', code: 'String', description: 'String' },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        color: {
          create: { name: 'String', code: 'String', description: 'String' },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
