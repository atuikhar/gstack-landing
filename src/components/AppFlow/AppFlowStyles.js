import styled from 'styled-components'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import { Container, ListItem, Avatar, Grid } from '@mui/material'

export const Wrapper = styled(Container)`
  text-align: center;
  margin-top: 50px;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 1px;
  }
`
export const GridWrapper = styled(Grid)`
  margin-top: 142px;

  @media ${(props) => props.theme.breakpoints.xl} {
    margin-top: 10px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 10px;
  }
`

export const WrapperContent = styled(Container)`
  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 1px;
  }
`

export const Text = styled.h1`
  font-size: ${(props) => props.theme.typography.text};
  font-family: ${(props) => props.theme.fonts.main};

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: ${(props) => props.theme.typography.p};
  }
`
export const Title = styled.h1`
  font-size: ${(props) => props.theme.typography.head};
  font-family: ${(props) => props.theme.fonts.title};

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => props.theme.typography.title};
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: ${(props) => props.theme.typography.text};
  }
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
    width: 70%;
    margin-left: 15%;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding-left: 10px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 20px;
    margin-left: 1px;
    width: 100%;
    padding: 1px;
  }
`

export const AvatarContainer = styled(Avatar)`
  background-color: #000;
  color: #fff;
`

export const GridContent = styled(Container)`
  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 0;
  }
`

export const VideoIcon = styled(OndemandVideoIcon)`
  font-size: 60px;
  margin: 20px;
`
export const TeamAdd = styled(GroupAddIcon)`
  font-size: 60px;
  margin: 20px;
`
