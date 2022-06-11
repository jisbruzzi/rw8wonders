import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ColorCreateArgs>({
  color: {
    one: { data: { name: 'String', code: 'String', description: 'String' } },
    two: { data: { name: 'String', code: 'String', description: 'String' } },
  },
})

export type StandardScenario = typeof standard
