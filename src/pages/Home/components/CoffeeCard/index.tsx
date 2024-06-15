import { useState } from 'react'
import { useContextSelector } from 'use-context-selector'
import { CartContext } from '../../../../contexts/CartContext'
import { ShoppingCartSimple } from 'phosphor-react'
import { Counter } from '../../../../components/Counter'
import { Coffee } from '../CoffeeList'
import {
  BuyActions,
  BuyContainer,
  CoffeeCardContainer,
  CoffeeCardTags,
} from './styles'

interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1)
  const addCoffeeToCart = useContextSelector(
    CartContext,
    (context) => context.addCoffeeToCart,
  )

  function incrementQuantity() {
    setQuantity((state) => state + 1)
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => (state -= 1))
    }
  }

  function handleAddCoffeeToCart() {
    const newCoffee = {
      ...coffee,
      quantity,
    }

    addCoffeeToCart(newCoffee)
  }

  return (
    <CoffeeCardContainer>
      <img src={coffee.imageUrl} alt="" />

      <CoffeeCardTags>
        {coffee.tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </CoffeeCardTags>

      <h2>{coffee.name}</h2>

      <p>{coffee.description}</p>

      <BuyContainer>
        <div className="price">
          <span>R$</span>
          <span>{coffee.price}</span>
        </div>

        <BuyActions>
          <Counter
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
            quantity={quantity}
          />
          <button type="button" onClick={handleAddCoffeeToCart}>
            <ShoppingCartSimple size={22} weight="fill" />
          </button>
        </BuyActions>
      </BuyContainer>
    </CoffeeCardContainer>
  )
}
