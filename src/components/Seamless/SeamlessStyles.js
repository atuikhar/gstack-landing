import styled from 'styled-components'
import { Container } from '@mui/material'
import TouchAppIcon from '@mui/icons-material/TouchApp'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import FileDownloadOffIcon from '@mui/icons-material/FileDownloadOff'

export const Wrapper = styled(Container)``
export const SeamlessWrapper = styled(Container)`
  text-align: center;
`

export const Title = styled.h1`
font-size: ${(props) => props.theme.typography.head};
  color: ${(props) => props.theme.colors.dark};
  font-family: ${(props) => props.theme.fonts.title};

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size:  ${(props) => props.theme.typography.title};

`
export const Paragraph = styled.h5`
  font-size: ${(props) => props.theme.typography.text};
  color: ${(props) => props.theme.colors.dark};
  font-family: ${(props) => props.theme.fonts.main};
  margin: 20px;
  line-height: 20px;
`

export const DevicesImages = styled.img`
  height: 100px;
`

export const Text = styled.h4`
  font-size: ${(props) => props.theme.typography.text};
  color: ${(props) => props.theme.colors.dark};
  font-family: ${(props) => props.theme.fonts.main};
`

export const ClickICon = styled(TouchAppIcon)`
  font-size: 30px;
`

export const SupportICon = styled(SupportAgentIcon)`
  font-size: 30px;
`

export const DownloadIcon = styled(FileDownloadOffIcon)`
  font-size: 30px;
`
