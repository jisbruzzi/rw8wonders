import EditCardCell from 'src/components/Card/EditCardCell'

type CardPageProps = {
  id: number
}

const EditCardPage = ({ id }: CardPageProps) => {
  return <EditCardCell id={id} />
}

export default EditCardPage
