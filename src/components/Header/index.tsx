import { MapPin, ShoppingCart } from 'phosphor-react'
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
      <a href="/">
        <img src={logoImg} alt="" />
      </a>

      <ActionsContainer>
        <LocationButton>
          <MapPin weight="fill" size={22} />
          <span>Porto Alegre, RS</span>
        </LocationButton>

        <a href="/cart">
          <CartButton>
            <ShoppingCart weight="fill" size={22} />
            <span>3</span>
          </CartButton>
        </a>
      </ActionsContainer>
    </HeaderContainer>
  )
}
