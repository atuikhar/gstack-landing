import styled from 'styled-components'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

import { Container, ListItem, Avatar } from '@mui/material'

export const Wrapper = styled(Container)`
  text-align: center;
`

export const Text = styled.h4`
  font-size: ${(props) => props.theme.typography.text};
  font-family: ${(props) => props.theme.fonts.main};

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: ${(props) => props.theme.typography.p};
  }
`

export const Title = styled.h1`
  font-size: ${(props) => props.theme.typography.head};
  font-family: ${(props) => props.theme.fonts.title};
  margin-bottom: 70px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => props.theme.typography.title};
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: ${(props) => props.theme.typography.text};
    margin-bottom: 30px;
  }
`

export const AvatarContainer = styled(Avatar)`
  background-color: #000;
  color: #fff;
`
export const ListItemContainer = styled(ListItem)`
  background-color: rgba(187, 191, 188, 0.3);
  margin-top: 20px;
  border-radius: 10px;

  @media ${(props) => props.theme.breakpoints.xl} {
    width: 70%;
    margin-left: 15%;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding-left: 10px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 10px;
    width: 100%;
    padding: 1px;
  }
`
export const CheckIcon = styled(CheckCircleIcon)`
  font-size: 30px;
`

export const IntegrationTechImage = styled.img`
  cursor: pointer;
  border-radius: 50%;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`
