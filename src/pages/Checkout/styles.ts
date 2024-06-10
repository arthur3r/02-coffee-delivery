import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;

  max-width: 70rem;
  margin: 2.5rem auto 15rem auto;

  h2 {
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    color: ${({ theme }) => theme['base-subtitle']};
    margin-bottom: 1rem;
  }
`
