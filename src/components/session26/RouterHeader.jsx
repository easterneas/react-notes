import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import AppLink from '../AppLink';

export default function RouterHeader() {
  const { reduxMenus, reduxAuthenticatedMenus, userState } = useSelector(({ base }) => base)
  const [ loginState, setLoginState ] = useState(false)

  useEffect(() => {
    setLoginState(!!userState.name)
  }, [ userState ])
  return (
    <>
      {
        loginState ?
        (
          <Navbar variant="light">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  {
                    reduxAuthenticatedMenus.map(({ name, to, type }) => (
                      <Nav.Link key={to} as={AppLink} to={to} name={name} type={type}></Nav.Link>
                    ))
                  }
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        ) :
        (
          <Navbar variant="light">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  {
                    reduxMenus.map(({ name, to, type }) => (
                      <Nav.Link key={to} as={AppLink} to={to} name={name} type={type}></Nav.Link>
                    ))
                  }
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        )
      }
    </>
  )
}
