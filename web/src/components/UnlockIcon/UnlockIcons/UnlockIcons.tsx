import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/UnlockIcon/UnlockIconsCell'

const DELETE_UNLOCK_ICON_MUTATION = gql`
  mutation DeleteUnlockIconMutation($id: Int!) {
    deleteUnlockIcon(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const formatEnum = (values: string | string[] | null | undefined) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values as string)
    }
  }
}

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const UnlockIconsList = ({ unlockIcons }) => {
  const [deleteUnlockIcon] = useMutation(DELETE_UNLOCK_ICON_MUTATION, {
    onCompleted: () => {
      toast.success('UnlockIcon deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete unlockIcon ' + id + '?')) {
      deleteUnlockIcon({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {unlockIcons.map((unlockIcon) => (
            <tr key={unlockIcon.id}>
              <td>{truncate(unlockIcon.id)}</td>
              <td>{truncate(unlockIcon.name)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.unlockIcon({ id: unlockIcon.id })}
                    title={'Show unlockIcon ' + unlockIcon.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editUnlockIcon({ id: unlockIcon.id })}
                    title={'Edit unlockIcon ' + unlockIcon.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete unlockIcon ' + unlockIcon.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(unlockIcon.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UnlockIconsList
