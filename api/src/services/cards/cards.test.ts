import { cards, card, createCard, updateCard, deleteCard } from './cards'
import type { StandardScenario } from './cards.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('cards', () => {
  scenario('returns all cards', async (scenario: StandardScenario) => {
    const result = await cards()

    expect(result.length).toEqual(Object.keys(scenario.card).length)
  })

  scenario('returns a single card', async (scenario: StandardScenario) => {
    const result = await card({ id: scenario.card.one.id })

    expect(result).toEqual(scenario.card.one)
  })

  scenario('creates a card', async (scenario: StandardScenario) => {
    const result = await createCard({
      input: { name: 'String', colorId: scenario.card.two.colorId },
    })

    expect(result.name).toEqual('String')
    expect(result.colorId).toEqual(scenario.card.two.colorId)
  })

  scenario('updates a card', async (scenario: StandardScenario) => {
    const original = await card({ id: scenario.card.one.id })
    const result = await updateCard({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a card', async (scenario: StandardScenario) => {
    const original = await deleteCard({ id: scenario.card.one.id })
    const result = await card({ id: original.id })

    expect(result).toEqual(null)
  })
})
