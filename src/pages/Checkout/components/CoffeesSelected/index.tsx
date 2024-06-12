import { CoffeeCard } from '../CoffeeCard'
import {
  CoffeesSelectedContainer,
  ConfirmOrderButton,
  Separator,
  TotalPriceContainer,
} from './styles'

export function CoffeesSelected() {
  return (
    <CoffeesSelectedContainer>
      <CoffeeCard />
      <Separator />
      <CoffeeCard />
      <Separator />

      <TotalPriceContainer>
        <p>
          Total de itens <span>R$ 29,70</span>
        </p>
        <p>
          Entrega <span>R$ 3,50</span>
        </p>
        <strong>
          Total <span>R$ 33,20</span>
        </strong>
      </TotalPriceContainer>

      <ConfirmOrderButton type="submit">confirmar pedido</ConfirmOrderButton>
    </CoffeesSelectedContainer>
  )
}
