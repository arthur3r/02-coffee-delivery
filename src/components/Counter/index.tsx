import { Minus, Plus } from 'phosphor-react'
import { CounterContainer } from './styles'

interface CounterProps {
  quantity: number
  incrementQuantity: () => void
  decrementQuantity: () => void
}

export function Counter({
  quantity,
  incrementQuantity,
  decrementQuantity,
}: CounterProps) {
  function handleIncrementQuantity() {
    incrementQuantity()
  }

  function handleDecrementQuantity() {
    decrementQuantity()
  }

  return (
    <CounterContainer>
      <button type="button" onClick={handleDecrementQuantity}>
        <Minus size={14} weight="bold" />
      </button>
      <span>{quantity}</span>
      <button type="button" onClick={handleIncrementQuantity}>
        <Plus size={14} weight="bold" />
      </button>
    </CounterContainer>
  )
}
