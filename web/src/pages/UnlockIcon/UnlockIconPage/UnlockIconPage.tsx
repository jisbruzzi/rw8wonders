import UnlockIconCell from 'src/components/UnlockIcon/UnlockIconCell'

type UnlockIconPageProps = {
  id: number
}

const UnlockIconPage = ({ id }: UnlockIconPageProps) => {
  return <UnlockIconCell id={id} />
}

export default UnlockIconPage
