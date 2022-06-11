import CardCell from 'src/components/Card/CardCell'

type CardPageProps = {
  id: number
}

const CardPage = ({ id }: CardPageProps) => {
  return <CardCell id={id} />
}

export default CardPage
