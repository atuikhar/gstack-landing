import styled from 'styled-components'
import { Container, Button } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import NavigationIcon from '@mui/icons-material/Navigation'

export const FooterWrapper = styled(Container)`
  border-top: 4px solid black;
  display: flex;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: block;
  }
`

export const Navs = styled(Container)`
  padding: 0;
  display: flex;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    justify-content: center;
    margin: 10px;
    width: 100%;
  }
`

export const Text = styled.h4`
  font-size: ${(props) => props.theme.typography.p};
  color: ${(props) => props.theme.colors.dark};
  font-family: ${(props) => props.theme.fonts.title};
`
export const FooterNavLink = styled(Button)`
  font-size: ${(props) => props.theme.typography.p};
  color: ${(props) => props.theme.colors.dark};
  font-family: ${(props) => props.theme.fonts.title};
  font-weight: bold;
  text-transform: none;
  width: 15vw;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 40vw;
  }
`

export const Facebook = styled(FacebookIcon)`
  cursor: pointer;
  margin: 10px;
  font-size: 30px;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`

export const Twitter = styled(TwitterIcon)`
  cursor: pointer;
  margin: 10px;
  font-size: 30px;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`

export const LinkedIn = styled(LinkedInIcon)`
  cursor: pointer;
  margin: 10px;
  font-size: 30px;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`

export const GoTop = styled(NavigationIcon)`
  cursor: pointer;
  font-size: 40px;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
  }
`
