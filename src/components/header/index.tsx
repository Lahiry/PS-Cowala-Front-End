import icone from '../../assets/icone.png'
import logo from '../../assets/logo.svg'

import { Container, Content } from './styles'

export function Header() {
  return (
    <Container>
      <Content>
        <img className="icone" src={icone} alt="icone"/>
        <img className="logo" src={logo} alt="logo"/>
      </Content>
    </Container>
  )
}