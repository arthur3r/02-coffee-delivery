import styled from 'styled-components'
import bgImg from '../../assets/background.png'

export const HomeContainer = styled.section`
  background-image: url(${bgImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const HomeContent = styled.div`
  max-width: 70rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`
