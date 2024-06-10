import styled from 'styled-components'
import bgImg from '../../../../assets/background.png'

export const IntroContainer = styled.section`
  background-image: url(${bgImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const IntroContent = styled.section`
  max-width: 70rem;
  margin: 0 auto;
  padding: 6.75rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
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
