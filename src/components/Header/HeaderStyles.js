import styled from 'styled-components'
import { Button, Container, MenuItem } from '@mui/material'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'
import WidgetsIcon from '@mui/icons-material/Widgets'

export const HeaderWrapper = styled(Container)``
export const RightNav = styled(Container)`
  display: flex;
  justify-content: end;
  padding: 0;
  @media ${(props) => props.theme.breakpoints.sm} {
`

export const Logo = styled(CatchingPokemonIcon)`
  color: ${(props) => props.theme.colors.dark};
  font-size: 50px;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 40px;
`

export const Title = styled.h1`
  font-size: ${(props) => props.theme.typography.text};
  color: ${(props) => props.theme.colors.dark};
  font-family: ${(props) => props.theme.fonts.title};

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size:  ${(props) => props.theme.typography.p};
`
export const NavLinks = styled(Button)`
  font-size: ${(props) => props.theme.typography.p};
  color: ${(props) => props.theme.colors.dark};
  font-family: ${(props) => props.theme.fonts.title};
  font-weight: bold;
  text-transform: none;
  margin-left: ${(props) => props.theme.gap.sm};
  width: 10vw;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`
export const Text = styled.h4`
  font-size: ${(props) => props.theme.typography.p};
  color: ${(props) => props.theme.colors.dark};
  font-family: ${(props) => props.theme.fonts.title};
`
export const NavItem = styled(MenuItem)`
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
`

export const MobileNav = styled(WidgetsIcon)`
  display: none;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: block;
    font-size: 40px;
    color: ${(props) => props.theme.colors.dark};
  }
`
