import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { Container, Content, Row, InputField, Button } from './styles'

import { toast } from 'react-toastify';

export function Dashboard() {
  const[name, setName] = useState<string>('')
  const[profession, setProfession] = useState<string>('')
  const[cellphone, setCellphone] = useState<string>('')
  const[ip, setIp] = useState<string>('')

  async function handleGetIpAdress() {
    const response = await api.get<string>(api.defaults.baseURL as string);
    const ip = response.data;
    setIp(ip);

    toast.success('IP encontrado com sucesso!');
  }

  function handleSaveInfo() {
    const phoneRegex = /\(\d{2}\)\s[9]\d{4}-\d{4}/

    if (name || profession || cellphone || ip)  { 

      localStorage.setItem('name', name)
      localStorage.setItem('profession', profession)
      localStorage.setItem('ip', ip)

      if (cellphone.match(phoneRegex) || !cellphone) {

        localStorage.setItem('cellphone', cellphone)

      } else {

        localStorage.setItem('cellphone', '')
        
        toast.error('📱 Número inválido!', {
          theme: 'colored',
        });

      }

      toast('💾 Dados salvos!');

    } else {
      toast('😖 Não há dados para salvar!')
    }
  }

  function handleClearInfo() {
    setName('');
    setProfession('');
    setCellphone('');
    setIp('');
    localStorage.clear()

    toast('🗑️ Dados limpos!');
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

    console.log(localStorage)
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