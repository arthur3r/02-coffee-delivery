import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logoImg from '../../assets/logo.svg'
import {
  ActionsContainer,
  CartButton,
  HeaderContainer,
  LocationButton,
} from './styles'
import { useContextSelector } from 'use-context-selector'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const cartCoffees = useContextSelector(
    CartContext,
    (context) => context.cartCoffees,
  )

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoImg} alt="" />
      </NavLink>

      <ActionsContainer>
        <LocationButton>
          <MapPin weight="fill" size={22} />
          <span>Porto Alegre, RS</span>
        </LocationButton>

        <NavLink to="/checkout">
          <CartButton>
            <ShoppingCart weight="fill" size={22} />
            {cartCoffees.length > 0 && <span>{cartCoffees.length}</span>}
          </CartButton>
        </NavLink>
      </ActionsContainer>
    </HeaderContainer>
  )
}
