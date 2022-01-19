import * as React from 'react'
import { AppBar, Box, Toolbar, IconButton, Menu, Fade } from '@mui/material'
import {
  HeaderWrapper,
  Logo,
  Title,
  NavLinks,
  RightNav,
  Text,
  NavItem,
  MobileNav,
} from './HeaderStyles'

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [mobileAnchorEl, setMobileAnchorEl] = React.useState(null)

  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const openMobileNav = Boolean(mobileAnchorEl)
  const mobileHandleClick = (event) => {
    setMobileAnchorEl(event.currentTarget)
  }
  const mobileHandleClose = () => {
    setMobileAnchorEl(null)
  }
  return (
    <Box
      sx={{
        flexGrow: 1,
        borderBottom: 1,
      }}
    >
      <AppBar
        position="static"
        style={{ background: 'transparent', boxShadow: 'none' }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <Logo />
          </IconButton>
          <Title>GumStack</Title>
          <RightNav>
            <NavLinks
              id="fade-button"
              aria-controls={open ? 'fade-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              Use Cases
            </NavLinks>
            <Menu
              id="fade-menu"
              MenuListProps={{
                'aria-labelledby': 'fade-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <NavItem onClick={handleClose}>
                <Text>Retail</Text>
              </NavItem>
              <NavItem onClick={handleClose}>
                <Text>E-Commerce</Text>
              </NavItem>
              <NavItem onClick={handleClose}>
                <Text>Sass</Text>
              </NavItem>
            </Menu>
            <NavLinks size="small">Pricing</NavLinks>
            <NavLinks size="small">How It Works</NavLinks>
            <NavLinks size="small">LogIn</NavLinks>
          </RightNav>
          <MobileNav
            onClick={mobileHandleClick}
            id="fade-button"
            aria-controls={openMobileNav ? 'fade-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openMobileNav ? 'true' : undefined}
          />
          <Menu
            id="fade-menu"
            MenuListProps={{
              'aria-labelledby': 'fade-button',
            }}
            anchorEl={mobileAnchorEl}
            open={openMobileNav}
            onClose={mobileHandleClose}
            TransitionComponent={Fade}
          >
            <NavItem onClick={mobileHandleClose}>
              <Text>Pricing</Text>
            </NavItem>
            <NavItem onClick={mobileHandleClose}>
              <Text>How It Works</Text>
            </NavItem>
            <NavItem onClick={mobileHandleClose}>
              <Text>LogIn</Text>
            </NavItem>
            <NavItem onClick={handleClick}>
              <Text>Use Cases</Text>
            </NavItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
