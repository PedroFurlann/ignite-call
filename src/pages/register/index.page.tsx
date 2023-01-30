import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { Form, Header, RegisterContainer } from './styles'

export default function Register() {
  return (
    <RegisterContainer>
      <Header>
        <Heading as="strong">Bem vindo ao Ignite Call</Heading>
        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois
        </Text>

        <MultiStep size={4} currentStep={1} />
      </Header>

      <Form as="form">
        <label>
          <Text size="sm">Nome de usuário</Text>
          <TextInput prefix="ignite.com/" placeholder="username" />
        </label>
        <label>
          <Text size="sm">Nome Complet</Text>
          <TextInput placeholder="Digite seu nome completo" />
        </label>

        <Button type="submit">
          Próximo Passo
          <ArrowRight />
        </Button>
      </Form>
    </RegisterContainer>
  )
}
