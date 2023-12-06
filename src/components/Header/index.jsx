import React from 'react';
import logo from '../../assets/logo-dio.png';
import { Button } from '../Button';

import {
   BuscarInputContainer,
   Row,
   Container,
   Input,
   Menu,
   MenuRight,
   Wrapper,
   UserPicture
} from './styles';

const Header = ({autenticado}) => {
  return (
    <Wrapper>
      <Container>
         <Row>
            <img src={logo} alt="logo da DIO" />
            {autenticado ? (
               <>
                  <BuscarInputContainer>
                     <Input placeholder='Buscar...' />
                  </BuscarInputContainer>
                  <Menu>Live Code</Menu>
                  <Menu>Global</Menu>
               </>
            ) : null}
         </Row>
         <Row>
            {autenticado ? (
               <UserPicture src="https://avatars.githubusercontent.com/u/44624583?v=4" />
            ) : (
               <>
                  <MenuRight href="#">Home</MenuRight>
                  <Button title="Entrar" />
                  <Button title="Cadastrar" />
               </>
            )}
         </Row>
      </Container>
    </Wrapper>
  )
}

export { Header }
