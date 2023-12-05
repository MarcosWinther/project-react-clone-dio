import React from 'react';
import { 
  EmailSVGIcon,
  LockSVGIcon
 } from '@react-md/material-icons';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from './styles';

const Login = () => {
  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
          A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais 
          rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
            <form>
              <Input placeholder="E-mail" />
              <Input placeholder="Senha" type="password" leftIcon={<EmailSVGIcon />}/>
              <Button title="Entrar" variant='secondary' leftIcon={<LockSVGIcon />} />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  )
}

export { Login };