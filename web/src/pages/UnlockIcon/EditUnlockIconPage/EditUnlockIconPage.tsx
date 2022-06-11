import EditUnlockIconCell from 'src/components/UnlockIcon/EditUnlockIconCell'

type UnlockIconPageProps = {
  id: number
}

const EditUnlockIconPage = ({ id }: UnlockIconPageProps) => {
  return <EditUnlockIconCell id={id} />
}

export default EditUnlockIconPage
