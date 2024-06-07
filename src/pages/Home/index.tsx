import { HomeContainer, HomeContent } from './styles'
import coffeeImg from '../../assets/coffee.png'
import { Intro } from './components/Intro'

export function Home() {
  return (
    <HomeContainer>
      <HomeContent>
        <Intro />
        <img src={coffeeImg} alt="" />
      </HomeContent>
    </HomeContainer>
  )
}
