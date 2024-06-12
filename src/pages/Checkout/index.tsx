import { AddressForm } from './components/AddressForm'
import { FormOfPayment } from './components/FormOfPayment'
import { CoffeesSelected } from './components/CoffeesSelected'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <section>
        <h2>Complete seu pedido</h2>
        <AddressForm />
        <FormOfPayment />
      </section>

      <section>
        <h2>Cafés selecionados</h2>
        <CoffeesSelected />
      </section>
    </CheckoutContainer>
  )
}
