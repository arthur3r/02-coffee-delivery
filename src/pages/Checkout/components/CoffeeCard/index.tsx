import { Trash } from 'phosphor-react'
import expressoImg from '../../../../assets/expresso.png'
import { Counter } from '../../../../components/Counter'
import {
  CoffeeCardContainer,
  CoffeeCardInfo,
  CoffeeCardDetails,
  RemoveButton,
} from './styles'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <CoffeeCardInfo>
        <img src={expressoImg} alt="" />

        <CoffeeCardDetails>
          <h3>Expresso Tradicional</h3>

          <div className="actions">
            <Counter />
            <RemoveButton type="button">
              <Trash size={16} />
              Remover
            </RemoveButton>
          </div>
        </CoffeeCardDetails>
      </CoffeeCardInfo>

      <span>R$ 9,90</span>
    </CoffeeCardContainer>
  )
}
