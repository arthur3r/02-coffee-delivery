import styled from 'styled-components'

export const IntroContainer = styled.section`
  padding: 6.75rem 0;
`

export const IntroTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 5rem;

  > h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    font-weight: 800;
    color: ${({ theme }) => theme['base-title']};
  }

  > p {
    font-size: 1.25rem;
    color: ${({ theme }) => theme['base-subtitle']};
  }
`

export const IntroInfos = styled.div`
  display: grid;
  grid-template-columns: 231px 295px;
  grid-column-gap: 2.5rem;
  grid-row-gap: 1.25rem;
`
