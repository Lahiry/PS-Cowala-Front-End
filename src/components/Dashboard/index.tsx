import { Container, Content, Row, InputField, Button } from './styles'

export function Dashboard() {
  return (
    <Container>
      <Content>

          <Row>
            <InputField>
              <span>Nome</span>
              <input/>
            </InputField>
          </Row>

          <Row>
            <InputField>
              <span>Profissão</span>
              <input/>
            </InputField>

            <InputField>
              <span>Celular</span>
              <input />
            </InputField>
          </Row>

          <Row>
            <InputField>
              <span>Meu IP</span>
              <input type="text" disabled/>
            </InputField>
            <Button>ENCONTRAR IP</Button>
          </Row>

          <Row>
            <Button>SALVAR</Button>
            <Button>LIMPAR</Button>
          </Row>

      </Content>
    </Container>
  )
}