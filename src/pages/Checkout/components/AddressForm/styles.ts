import styled from 'styled-components'

export const AddressFormContainer = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  background: ${({ theme }) => theme['base-card']};
  border-radius: 6px;
`

export const AddressFormHeader = styled.header`
  display: flex;
  gap: 0.5rem;

  > svg {
    color: ${({ theme }) => theme['yellow-dark']};
  }

  h3 {
    color: ${({ theme }) => theme['base-subtitle']};
    font-size: 1rem;
    font-weight: 400;
  }

  > p {
    font-size: 0.875rem;
  }
`

export const AddressFormContent = styled.div`
  display: grid;
  grid-template-columns: 200px 276px 60px;
  grid-row-gap: 1rem;
  grid-column-gap: 0.75rem;

  .cep {
    width: 200px;
    grid-column: span 3;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }
`
