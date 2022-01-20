import styled from 'styled-components'
import Carousel from 'react-material-ui-carousel'

import { Container } from '@mui/material'

export const Wrapper = styled(Container)`
  height: 500px;
`
export const WrapperContainer = styled(Container)`
  text-align: center;
`

export const CarouselContainer = styled(Carousel)`
  background-image: url('/Star.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 80%;
  width: 100%;
  border-radius: 20px;
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
  font-size: ${(props) => props.theme.typography.text};
  font-family: ${(props) => props.theme.fonts.main};
  line-height: 20px;
`

export const ImageWrapper = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 40%;
  margin-top: 20px;
`
