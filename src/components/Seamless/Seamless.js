import { Grid, List, ListItemAvatar } from '@mui/material'
import {
  SeamlessWrapper,
  Wrapper,
  Title,
  Paragraph,
  DevicesImages,
  Text,
  ClickICon,
  SupportICon,
  DownloadIcon,
  ListItemContainer,
} from './SeamlessStyles'

const Seamless = () => {
  return (
    <>
      <SeamlessWrapper>
        <Title>
          Seamless one-on-one conversations with your website visitors
        </Title>
        <Paragraph>
          Connect your customers to a human instantly without taking them away
          from your website.
        </Paragraph>

        <Grid container spacing={1}>
          <Grid item xs={12} md={6} lg={5} xl={6}>
            <List>
              <Wrapper>
                <ListItemContainer>
                  <ListItemAvatar>
                    <DevicesImages src="/Phone&Computer.png" />
                    <DevicesImages src="/SmartWatch.png" />
                    <DevicesImages src="/Laptop1.png" />
                  </ListItemAvatar>
                </ListItemContainer>
                <Text>Works On All Devices</Text>
              </Wrapper>

              <Wrapper>
                <ListItemContainer>
                  <ListItemAvatar>
                    <DevicesImages src="/Zoom.png" />
                  </ListItemAvatar>
                </ListItemContainer>
                <Text>
                  <SupportICon />
                  Optional Video For Customers
                </Text>
              </Wrapper>
            </List>
          </Grid>
          <Grid item xs={12} md={6} lg={7} xl={6}>
            <Wrapper>
              <ListItemContainer>
                <ListItemAvatar>
                  <DevicesImages src="/Youtube.png" />
                  <DevicesImages src="/Facebook.png" />
                  <DevicesImages src="/Browsing.png" />
                </ListItemAvatar>
              </ListItemContainer>
              <Text>
                <ClickICon /> One-Click Call From Browser
              </Text>
            </Wrapper>
            <Wrapper>
              <ListItemContainer>
                <ListItemAvatar>
                  <DevicesImages src="/Browser.png" />
                </ListItemAvatar>
                <ListItemAvatar>
                  <DevicesImages src="/VideoCalling.png" />
                </ListItemAvatar>
              </ListItemContainer>
              <Text>
                <DownloadIcon />
                No Download Needed
              </Text>
            </Wrapper>
          </Grid>
        </Grid>
      </SeamlessWrapper>
      <hr style={{ borderBottom: '4px solid black', margin: '50px' }} />
    </>
  )
}

export default Seamless
