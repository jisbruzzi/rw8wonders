import type { FindCards } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Cards from 'src/components/Card/Cards'

export const QUERY = gql`
  query FindCards {
    cards {
      id
      name
      colorId
      unlocksUnlockIconId
      unlockedByUnlockIconId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No cards yet. '}
      <Link
        to={routes.newCard()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ cards }: CellSuccessProps<FindCards>) => {
  return <Cards cards={cards} />
}
