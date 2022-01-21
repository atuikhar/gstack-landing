import styled from 'styled-components'

import { Container } from '@mui/material'

export const Wrapper = styled(Container)`
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  margin-bottom: 100px;
`

export const Image = styled.img`
  flex: 1;
  cursor: pointer;
  border-radius: 20px;
  margin-top: 20px;
  height: 500px;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 300px;
  }
`

export const Title = styled.h1`
  flex: 1;
  font-size: ${(props) => props.theme.typography.title};
  font-family: ${(props) => props.theme.fonts.title};
  margin-top: 200px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => props.theme.typography.title};
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: ${(props) => props.theme.typography.text};
    margin-bottom: 30px;
    margin-top: 20px;
  }
`

export const StartTrailButton = styled.button`
  font-size: ${(props) => props.theme.typography.p};
  background: transparent;
  color: #000;
  font-weight: bold;
  cursor: pointer;
  border: 2px solid black;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  border-radius: 5px;
  height: 46px;
  width: 300px;
  margin-top: 50px;

  &:hover {
  }
  @media ${(props) => props.theme.breakpoints.lg} {
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 150px;
  }
`
