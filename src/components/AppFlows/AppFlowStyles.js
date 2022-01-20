import styled from 'styled-components'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { Container, ListItem, Avatar, Grid } from '@mui/material'

export const Wrapper = styled(Container)`
  text-align: center;
  margin-top: 100px;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 1px;
  }
`

export const Text = styled.h1`
  font-size: ${(props) => props.theme.typography.text};
  font-family: ${(props) => props.theme.fonts.main};
`
export const Title = styled.h1`
font-size: ${(props) => props.theme.typography.head};
  font-family: ${(props) => props.theme.fonts.title};

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size:  ${(props) => props.theme.typography.title};

`
export const Paragraph = styled.h5`
  font-size: ${(props) => props.theme.typography.text};
  font-family: ${(props) => props.theme.fonts.title};
`

export const CheckIcon = styled(CheckCircleIcon)`
  font-size: 30px;
`

export const ListItemContainer = styled(ListItem)`
  background-color: rgba(187, 191, 188, 0.3);
  margin-top: 20px;
  border-radius: 10px;

  @media ${(props) => props.theme.breakpoints.xl} {
    padding-left: 10%;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding-left: 10px;
  }
`

export const AvatarContainer = styled(Avatar)`
  background-color: #000;
  color: #fff;
`

export const GridContent = styled(Container)`
  @media ${(props) => props.theme.breakpoints.xl} {
  }
`
