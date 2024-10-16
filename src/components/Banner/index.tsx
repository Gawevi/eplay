import { formataPreco } from '../ProductsList'
import Button from '../Button'
import { Imagem, Precos, Titulo } from './styles'
import Tag from '../Tag'
import { useGetFeaturedGameQuery } from '../../services/api'

const Banner = () => {
  const { data: game, isLoading } = useGetFeaturedGameQuery()

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do Dia</Tag>
        <div>
          <Titulo>{game.name}</Titulo>
          <Precos>
            De <span>{formataPreco(game.prices.old)}</span> <br />
            por apenas {formataPreco(game.prices.current)}
          </Precos>
        </div>
        <Button
          title="Clique aqui para aproveitar esta orfeta"
          type="link"
          to={`/product/${game.id}`}
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}
export default Banner
