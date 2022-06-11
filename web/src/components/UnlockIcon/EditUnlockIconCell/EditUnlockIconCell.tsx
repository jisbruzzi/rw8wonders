import type { EditUnlockIconById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import UnlockIconForm from 'src/components/UnlockIcon/UnlockIconForm'

export const QUERY = gql`
  query EditUnlockIconById($id: Int!) {
    unlockIcon: unlockIcon(id: $id) {
      id
      name
    }
  }
`
const UPDATE_UNLOCK_ICON_MUTATION = gql`
  mutation UpdateUnlockIconMutation($id: Int!, $input: UpdateUnlockIconInput!) {
    updateUnlockIcon(id: $id, input: $input) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ unlockIcon }: CellSuccessProps<EditUnlockIconById>) => {
  const [updateUnlockIcon, { loading, error }] = useMutation(UPDATE_UNLOCK_ICON_MUTATION, {
    onCompleted: () => {
      toast.success('UnlockIcon updated')
      navigate(routes.unlockIcons())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateUnlockIcon({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit UnlockIcon {unlockIcon.id}</h2>
      </header>
      <div className="rw-segment-main">
        <UnlockIconForm unlockIcon={unlockIcon} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
