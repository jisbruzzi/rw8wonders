import type { FindCardById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Card from 'src/components/Card/Card'

export const QUERY = gql`
  query FindCardById($id: Int!) {
    card: card(id: $id) {
      id
      name
      colorId
      unlocksUnlockIconId
      unlockedByUnlockIconId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Card not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ card }: CellSuccessProps<FindCardById>) => {
  return <Card card={card} />
}
