import type { FindUnlockIcons } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import UnlockIcons from 'src/components/UnlockIcon/UnlockIcons'

export const QUERY = gql`
  query FindUnlockIcons {
    unlockIcons {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No unlockIcons yet. '}
      <Link
        to={routes.newUnlockIcon()}
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

export const Success = ({ unlockIcons }: CellSuccessProps<FindUnlockIcons>) => {
  return <UnlockIcons unlockIcons={unlockIcons} />
}
