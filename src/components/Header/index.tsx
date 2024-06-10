import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logoImg from '../../assets/logo.svg'
import {
  ActionsContainer,
  CartButton,
  HeaderContainer,
  LocationButton,
} from './styles'

export function Header() {
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
            <span>3</span>
          </CartButton>
        </NavLink>
      </ActionsContainer>
    </HeaderContainer>
  )
}
