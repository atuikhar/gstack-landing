import { Container, TextField } from '@mui/material'
import styled from 'styled-components'

export const HeroWrapper = styled(Container)`
  text-align: center;

  margin-top: 100px;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 10px;
  }
`
export const SmallImageWrapper = styled(Container)``
export const ImgWrapper = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
export const InputWrapper = styled(Container)`
  display: flex;
  justify-content: center;
  margin-top: 100px;

  @media ${(props) => props.theme.breakpoints.lg} {
    display: block;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 30px;
`

export const Title = styled.h1`
font-size: ${(props) => props.theme.typography.head};
  color: ${(props) => props.theme.colors.dark};
  font-family: ${(props) => props.theme.fonts.title};

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size:  ${(props) => props.theme.typography.title};

`

export const Text = styled.h3`
  font-size: ${(props) => props.theme.typography.text};
  color: ${(props) => props.theme.colors.dark};
  font-family: ${(props) => props.theme.fonts.title};
`
export const Paragraph = styled.h5`
  font-size: ${(props) => props.theme.typography.p};
  color: ${(props) => props.theme.colors.dark};
  font-family: ${(props) => props.theme.fonts.main};
  margin: 20px;
  line-height: 20px;
`

export const SubmitEmail = styled.button`
  font-size: ${(props) => props.theme.typography.p};
  background: transparent;
  color: #000;
  font-weight: bold;
  cursor: pointer;
  border: 2px solid black;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  border-radius: 5px;
  height: 46px;
  width: 100px;
  margin-left: 1px;

  &:hover {
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    margin-top: 20px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 10px;
  }
`
export const InputField = styled(TextField)`
  width: 50%;

  & label.Mui-focused {
    color: #000;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #000;
    }
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 100%;
  }
`

export const Image = styled.img`
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  width: 95%;
  height: 250px;
  border-radius: 50%;
  cursor: pointer;
  padding: 10px;
  margin: 10px;
  object-fit: contain;
  &:hover {
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    height: 400px;
  }
  @media ${(props) => props.theme.breakpoints.xl} {
    height: 300px;
  }
`
export const SmallImage = styled.img`
  display: none;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);

  @media ${(props) => props.theme.breakpoints.sm} {
    display: block;
    width: 100%;
    height: 300px;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
    }
  }
`
