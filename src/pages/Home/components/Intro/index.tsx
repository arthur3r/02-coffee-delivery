import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { CircleInfo } from '../../../../components/CircleInfo'
import { IntroContainer, IntroInfos, IntroTitle } from './styles'

export function Intro() {
  return (
    <IntroContainer>
      <IntroTitle>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
      </IntroTitle>

      <IntroInfos>
        <CircleInfo
          variant="yellow-dark"
          icon={ShoppingCart}
          text={<p>Compra simples e segura</p>}
        />

        <CircleInfo
          variant="base-text"
          icon={Package}
          text={<p>Embalagem mantém o café intacto</p>}
        />

        <CircleInfo
          variant="yellow"
          icon={Timer}
          text={<p>Entrega rápida e rastreada</p>}
        />

        <CircleInfo
          variant="purple"
          icon={Coffee}
          text={<p>O café chega fresquinho até você</p>}
        />
      </IntroInfos>
    </IntroContainer>
  )
}
