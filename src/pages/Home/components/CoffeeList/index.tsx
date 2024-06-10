import { CoffeeCard } from '../CoffeeCard'
import { CoffeeListContainer, CoffeeListContent } from './styles'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>

      <CoffeeListContent>
        <CoffeeCard />
      </CoffeeListContent>
    </CoffeeListContainer>
  )
}
