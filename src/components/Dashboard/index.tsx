import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { Container, Content, Row, InputField, Button } from './styles'

export function Dashboard() {
  const[name, setName] = useState<string>('')
  const[profession, setProfession] = useState<string>('')
  const[cellphone, setCellphone] = useState<string>('')
  const[ip, setIp] = useState<string>('')

  async function handleGetIpAdress() {
    const response = await api.get<string>(api.defaults.baseURL as string);
    const ip = response.data;
    setIp(ip);
  }

  function handleSaveInfo() {
    localStorage.setItem('name', String(name))
    localStorage.setItem('profession', String(profession))
    localStorage.setItem('cellphone', String(cellphone))
    localStorage.setItem('ip', String(ip))
  }

  function handleClearInfo() {
    setName('');
    setProfession('');
    setCellphone('');
    setIp('');
    localStorage.clear()
  }

  function setInfo() {
    setName(String(localStorage.getItem('name')));
    setProfession(String(localStorage.getItem('profession')));
    setCellphone(String(localStorage.getItem('cellphone')));
    setIp(String(localStorage.getItem('ip')));
  }

  function handleChangeCellphone(value: string) {
    const number = value.replace(/\D/g, '');
    
    if (number.length === 0) return '';
    if (number.length <= 2) return `(${number}`;
    if (number.length > 2 && number.length <= 7) return `(${number.slice(0, 2)}) ${number.slice(2)}`;
    if (number.length > 7) return `(${number.slice(0, 2)}) ${number.slice(2, 7)}-${number.slice(7, 11)}`;
  }

  function setFormatedCellphone(value: string) {
    setCellphone(handleChangeCellphone(value) as string)
  }
  
  useEffect(() => {
    if (localStorage.length > 0) {
      setInfo()
    }
  }, [])

  return (
    <Container>
      <Content>

          <Row>
            <InputField>
              <span>Nome</span>
              <input 
                type="text"
                value={name} 
                onChange={event => setName(event.target.value)}
              />
            </InputField>
          </Row>

          <Row>
            <InputField>
              <span>Profissão</span>
              <input 
                type="text"
                value={profession} 
                onChange={event => setProfession(event.target.value)}
              />
            </InputField>

            <InputField>
              <span>Celular</span>
              <input 
                type="text"
                value={cellphone} 
                onChange={event => setFormatedCellphone(event.target.value)} 
              />
            </InputField>
          </Row>

          <Row>
            <InputField>
              <span>Meu IP</span>
              <input
                type="text" 
                value={ip}
                disabled
              />
            </InputField>
            <Button
              onClick={handleGetIpAdress}
            >
              ENCONTRAR IP
            </Button>
          </Row>

          <Row>
            <Button
              onClick={handleSaveInfo}
            >
              SALVAR
            </Button>
            <Button
              onClick={handleClearInfo}
            >
              LIMPAR
            </Button>
          </Row>

      </Content>
    </Container>
  )
}