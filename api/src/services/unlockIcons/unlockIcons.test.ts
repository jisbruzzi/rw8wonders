import {
  unlockIcons,
  unlockIcon,
  createUnlockIcon,
  updateUnlockIcon,
  deleteUnlockIcon,
} from './unlockIcons'
import type { StandardScenario } from './unlockIcons.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('unlockIcons', () => {
  scenario('returns all unlockIcons', async (scenario: StandardScenario) => {
    const result = await unlockIcons()

    expect(result.length).toEqual(Object.keys(scenario.unlockIcon).length)
  })

  scenario(
    'returns a single unlockIcon',
    async (scenario: StandardScenario) => {
      const result = await unlockIcon({ id: scenario.unlockIcon.one.id })

      expect(result).toEqual(scenario.unlockIcon.one)
    }
  )

  scenario('creates a unlockIcon', async () => {
    const result = await createUnlockIcon({
      input: { name: 'String' },
    })

    expect(result.name).toEqual('String')
  })

  scenario('updates a unlockIcon', async (scenario: StandardScenario) => {
    const original = await unlockIcon({ id: scenario.unlockIcon.one.id })
    const result = await updateUnlockIcon({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a unlockIcon', async (scenario: StandardScenario) => {
    const original = await deleteUnlockIcon({ id: scenario.unlockIcon.one.id })
    const result = await unlockIcon({ id: original.id })

    expect(result).toEqual(null)
  })
})
