import { colors, color, createColor, updateColor, deleteColor } from './colors'
import type { StandardScenario } from './colors.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('colors', () => {
  scenario('returns all colors', async (scenario: StandardScenario) => {
    const result = await colors()

    expect(result.length).toEqual(Object.keys(scenario.color).length)
  })

  scenario('returns a single color', async (scenario: StandardScenario) => {
    const result = await color({ id: scenario.color.one.id })

    expect(result).toEqual(scenario.color.one)
  })

  scenario('creates a color', async () => {
    const result = await createColor({
      input: { name: 'String', code: 'String', description: 'String' },
    })

    expect(result.name).toEqual('String')
    expect(result.code).toEqual('String')
    expect(result.description).toEqual('String')
  })

  scenario('updates a color', async (scenario: StandardScenario) => {
    const original = await color({ id: scenario.color.one.id })
    const result = await updateColor({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a color', async (scenario: StandardScenario) => {
    const original = await deleteColor({ id: scenario.color.one.id })
    const result = await color({ id: original.id })

    expect(result).toEqual(null)
  })
})
