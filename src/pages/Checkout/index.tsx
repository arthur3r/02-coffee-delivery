import { AddressForm } from './components/AddressForm'
import { FormOfPayment } from './components/FormOfPayment'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <section>
        <h2>Complete seu pedido</h2>
        <AddressForm />
        <FormOfPayment />
      </section>
    </CheckoutContainer>
  )
}
