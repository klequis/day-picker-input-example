import React from 'react'
import styled from 'styled-components'
import { Example } from './Example'
import IDateFnsLogo from './media/date-fns.svg'
import IReactLogo from './media/react-logo.svg'
import IBootstrapLogo from './media/bootstrap.svg'

const AppDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 50px;
`

const PromoLogo = styled.div`
  height: 33px;
  display: flex;
  justify-content: center;
`

const DateFnsLogo = styled.img`
  width: 40px;
`

const PromoLogoName = styled.div`
  color: rgb(232, 230, 227);
`

const Logos = styled.div`
  margin-top: 50px;
`

// git push -u origin main

const ReactLogo = styled.img`

`

const BootstrapLogo = styled.img``

export const App = () => {
  return (
    <AppDiv>

      <h1> DayPickerInput Example</h1>
      <h1><a href="https://date-fns.org/"><code>react-day-picker</code></a></h1>
      <Example />

      <Logos>
        <PromoLogo>
          <DateFnsLogo src={IDateFnsLogo} />
          <PromoLogoName>&nbsp;&nbsp;date-fns</PromoLogoName>
          <ReactLogo src={IReactLogo} />
          <BootstrapLogo src={IBootstrapLogo} />
        </PromoLogo>
      </Logos>
    </AppDiv>
  )
}