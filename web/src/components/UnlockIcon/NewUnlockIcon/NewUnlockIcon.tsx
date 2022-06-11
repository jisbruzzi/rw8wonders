import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import UnlockIconForm from 'src/components/UnlockIcon/UnlockIconForm'

const CREATE_UNLOCK_ICON_MUTATION = gql`
  mutation CreateUnlockIconMutation($input: CreateUnlockIconInput!) {
    createUnlockIcon(input: $input) {
      id
    }
  }
`

const NewUnlockIcon = () => {
  const [createUnlockIcon, { loading, error }] = useMutation(CREATE_UNLOCK_ICON_MUTATION, {
    onCompleted: () => {
      toast.success('UnlockIcon created')
      navigate(routes.unlockIcons())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createUnlockIcon({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New UnlockIcon</h2>
      </header>
      <div className="rw-segment-main">
        <UnlockIconForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewUnlockIcon
