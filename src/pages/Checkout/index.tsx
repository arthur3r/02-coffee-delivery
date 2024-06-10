import { AddressForm } from './components/AddressForm'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <section>
        <h2>Complete seu pedido</h2>
        <AddressForm />
      </section>
    </CheckoutContainer>
  )
}
