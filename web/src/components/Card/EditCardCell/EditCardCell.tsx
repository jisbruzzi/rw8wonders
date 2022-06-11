import type { EditCardById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import CardForm from 'src/components/Card/CardForm'

export const QUERY = gql`
  query EditCardById($id: Int!) {
    card: card(id: $id) {
      id
      name
      colorId
      unlocksUnlockIconId
      unlockedByUnlockIconId
    }
  }
`
const UPDATE_CARD_MUTATION = gql`
  mutation UpdateCardMutation($id: Int!, $input: UpdateCardInput!) {
    updateCard(id: $id, input: $input) {
      id
      name
      colorId
      unlocksUnlockIconId
      unlockedByUnlockIconId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ card }: CellSuccessProps<EditCardById>) => {
  const [updateCard, { loading, error }] = useMutation(UPDATE_CARD_MUTATION, {
    onCompleted: () => {
      toast.success('Card updated')
      navigate(routes.cards())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { colorId: parseInt(input.colorId), unlocksUnlockIconId: parseInt(input.unlocksUnlockIconId), unlockedByUnlockIconId: parseInt(input.unlockedByUnlockIconId), })
    updateCard({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Card {card.id}</h2>
      </header>
      <div className="rw-segment-main">
        <CardForm card={card} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
