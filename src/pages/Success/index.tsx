import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { CircleInfo } from '../../components/CircleInfo'
import illustrationImg from '../../assets/illustration.png'
import {
  OrderInfo,
  SuccessContainer,
  SuccessContent,
  SuccessHeader,
} from './styles'

export function Success() {
  return (
    <SuccessContainer>
      <SuccessHeader>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </SuccessHeader>
      <SuccessContent>
        <OrderInfo>
          <CircleInfo
            icon={MapPin}
            variant="purple"
            text={
              <p>
                Entrega em <span>Rua João Daniel Martinelli, 102</span> <br />
                Farrapos - Porto Alegre, RS
              </p>
            }
          />

          <CircleInfo
            icon={Timer}
            variant="yellow"
            text={
              <p>
                Previsão de entrega <br /> <span>20 min - 30 min</span>
              </p>
            }
          />

          <CircleInfo
            icon={CurrencyDollar}
            variant="yellow-dark"
            text={
              <p>
                Pagamento na entrega <br /> <span>Cartão de Crédito</span>
              </p>
            }
          />
        </OrderInfo>

        <img src={illustrationImg} alt="" />
      </SuccessContent>
    </SuccessContainer>
  )
}
