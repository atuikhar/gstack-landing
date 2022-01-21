import styled from 'styled-components'
import { Container } from '@mui/material'

export const Wrapper = styled(Container)`
  text-align: end;
  margin-bottom: 20px;

  @media ${(props) => props.theme.breakpoints.sm} {
    text-align: center;
  }
`
export const WrapperGrid = styled(Container)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  @media ${(props) => props.theme.breakpoints.md} {
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
  }
`
export const Text = styled.h1`
  font-size: ${(props) => props.theme.typography.text};
  font-family: ${(props) => props.theme.fonts.title};

  @media ${(props) => props.theme.breakpoints.sm} {
  }
`
export const Paragraph = styled.h3`
  font-size: ${(props) => props.theme.typography.p};
  font-family: ${(props) => props.theme.fonts.title};
  line-height: 20px;
  margin-top: 20px;
  cursor: pointer;
`

export const PlayStoreButton = styled.button`
  font-size: ${(props) => props.theme.typography.p};
  background: transparent;
  color: #000;
  font-weight: bold;
  cursor: pointer;
  border: 2px solid black;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  border-radius: 5px;
  height: 46px;
  width: 50px;
  margin: 20px;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
  @media ${(props) => props.theme.breakpoints.lg} {
  }
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`
