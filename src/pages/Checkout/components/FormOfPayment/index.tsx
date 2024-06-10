import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import {
  FormOfPaymentContainer,
  FormOfPaymentContent,
  FormOfPaymentHeader,
  FormOfPaymentSelect,
} from './styles'

export function FormOfPayment() {
  return (
    <FormOfPaymentContainer>
      <FormOfPaymentHeader>
        <CurrencyDollar size={22} />
        <div>
          <h3>Pagamento</h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </FormOfPaymentHeader>
      <FormOfPaymentContent>
        <FormOfPaymentSelect value="credit-card">
          <CreditCard size={17} />
          <span>Cartão de crédito</span>
        </FormOfPaymentSelect>

        <FormOfPaymentSelect value="debit-card">
          <Bank size={17} />
          <span>Cartão de débito</span>
        </FormOfPaymentSelect>

        <FormOfPaymentSelect value="12">
          <Money size={17} />
          <span>Dinheiro</span>
        </FormOfPaymentSelect>
      </FormOfPaymentContent>
    </FormOfPaymentContainer>
  )
}
