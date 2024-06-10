import { MapPinLine } from 'phosphor-react'
import {
  AddressFormContainer,
  AddressFormContent,
  AddressFormHeader,
} from './styles'
import { Input } from '../Input'

export function AddressForm() {
  return (
    <AddressFormContainer>
      <AddressFormHeader>
        <MapPinLine size={22} />
        <div>
          <h3>Endereço de Entrega</h3>
          Informe o endereço onde deseja receber seu pedido
        </div>
      </AddressFormHeader>
      <AddressFormContent>
        <Input className="cep" placeholder="CEP" />
        <Input className="street" placeholder="Rua" />
        <Input placeholder="Número" />
        <Input className="complement" placeholder="Complemento" optional />
        <Input placeholder="Bairro" />
        <Input placeholder="Cidade" />
        <Input placeholder="UF" />
      </AddressFormContent>
    </AddressFormContainer>
  )
}
