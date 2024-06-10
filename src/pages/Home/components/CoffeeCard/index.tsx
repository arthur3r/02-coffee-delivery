import {
  BuyActions,
  BuyContainer,
  CoffeeCardContainer,
  CoffeeCardTags,
} from './styles'

import expressoImg from '../../../../assets/expresso.png'
import { ShoppingCartSimple } from 'phosphor-react'
import { Counter } from '../../../../components/Counter'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={expressoImg} alt="" />

      <CoffeeCardTags>
        <span className="tag">Tradicional</span>
      </CoffeeCardTags>

      <h2>Expresso Tradicional</h2>

      <p>O tradicional café feito com água quente e grãos moídos</p>

      <BuyContainer>
        <div className="price">
          <span>R$</span>
          <span>9,90</span>
        </div>

        <BuyActions>
          <Counter />
          <button type="button">
            <ShoppingCartSimple size={22} weight="fill" />
          </button>
        </BuyActions>
      </BuyContainer>
    </CoffeeCardContainer>
  )
}
