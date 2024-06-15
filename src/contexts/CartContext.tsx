import { ReactNode, useState } from 'react'
import { createContext } from 'use-context-selector'
import { produce } from 'immer'
import { Coffee } from '../pages/Home/components/CoffeeList'

interface CartCoffeeType extends Coffee {
  quantity: number
}

interface CartContextProps {
  cartCoffees: CartCoffeeType[]
  addCoffeeToCart: (coffee: CartCoffeeType) => void
}

export const CartContext = createContext({} as CartContextProps)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartCoffees, setCartCoffees] = useState<CartCoffeeType[]>([])

  function addCoffeeToCart(addCoffee: CartCoffeeType) {
    const coffeeIndex = cartCoffees.findIndex(
      (coffee) => coffee.id === addCoffee.id,
    )

    if (coffeeIndex === -1) {
      setCartCoffees(
        produce(cartCoffees, (draft) => {
          draft.push(addCoffee)
        }),
      )
    } else {
      setCartCoffees(
        produce(cartCoffees, (draft) => {
          draft[coffeeIndex].quantity += addCoffee.quantity
        }),
      )
    }
  }

  return (
    <CartContext.Provider
      value={{
        cartCoffees,
        addCoffeeToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
