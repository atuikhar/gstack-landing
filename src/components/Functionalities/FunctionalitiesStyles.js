import styled from 'styled-components'
import { Container } from '@mui/material'

export const Wrapper = styled(Container)`
  text-align: center;
  margin-top: 100px;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 50px;
  }
`
export const WrapperGrid = styled(Container)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-row-gap: 20px;
`

export const Text = styled.h1`
  font-size: ${(props) => props.theme.typography.text};
  font-family: ${(props) => props.theme.fonts.title};

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
export const Paragraph = styled.h3`
  font-size: ${(props) => props.theme.typography.p};
  font-family: ${(props) => props.theme.fonts.main};
  line-height: 20px;
`

export const Image = styled.img`
  object: cover;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  cursor: pointer;
`
