import CopyrightIcon from '@mui/icons-material/Copyright'
import {
  FooterWrapper,
  Text,
  Navs,
  FooterNavLink,
  Facebook,
  Twitter,
  LinkedIn,
  GoTop,
} from './FooterStyle'

const Footer = () => {
  const handleClick = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
  return (
    <FooterWrapper>
      <Navs>
        <LinkedIn />
        <Twitter />
        <Facebook />
      </Navs>
      <Navs>
        <CopyrightIcon fontSize="large" />
        <Text>GumStack Inc. 2022. All Rights Reserverd</Text>
      </Navs>
      <Navs>
        <FooterNavLink>Privacy Policy</FooterNavLink>
        <FooterNavLink>Terms&Conditions</FooterNavLink>
      </Navs>

      <Navs sx={{ justifyContent: 'flex-end', width: '30vw' }}>
        <GoTop onClick={() => handleClick()} />
      </Navs>
    </FooterWrapper>
  )
}

export default Footer
