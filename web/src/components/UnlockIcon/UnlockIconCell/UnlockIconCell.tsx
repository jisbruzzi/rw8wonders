import type { FindUnlockIconById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import UnlockIcon from 'src/components/UnlockIcon/UnlockIcon'

export const QUERY = gql`
  query FindUnlockIconById($id: Int!) {
    unlockIcon: unlockIcon(id: $id) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>UnlockIcon not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ unlockIcon }: CellSuccessProps<FindUnlockIconById>) => {
  return <UnlockIcon unlockIcon={unlockIcon} />
}
