import styled from 'styled-components'

export const CoffeeListContainer = styled.main`
  max-width: 70rem;
  margin: 0 auto;
  padding: 2rem 0;

  > h2 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: 800;
    color: ${({ theme }) => theme['base-subtitle']};

    margin-bottom: 3.4rem;
  }
`

export const CoffeeListContent = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2.5rem;
`
