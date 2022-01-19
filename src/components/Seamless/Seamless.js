import { Grid } from '@mui/material'
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
} from './SeamlessStyles'

const Seamless = () => {
  return (
    <SeamlessWrapper>
      <Title>
        Seamless one-on-one conversations with your website visitors
      </Title>
      <Paragraph>
        Connect your customers to a human instantly without taking them away
        from your website.
      </Paragraph>

      <Grid container spacing={1}>
        <Grid item xs={12} md={12} lg={6} xl={6}>
          <DevicesImages src="/Phone&Computer.png" />
          <DevicesImages src="/SmartWatch.png" />

          <DevicesImages src="/Zoom.png" />
          <Text>Works On All Devices</Text>

          <Text>
            {/* <ClickICon /> */}
            One-Click Video Calls Directly From Browser
          </Text>

          <Text>
            {/* <SupportICon /> */}
            Optional Video For Customers
          </Text>
          <Text>
            {/* <DownloadIcon /> */}
            No Download Needed
          </Text>
        </Grid>
        <Grid item xs={12} md={12} lg={6} xl={6}>
          HEllo
        </Grid>
      </Grid>
    </SeamlessWrapper>
  )
}

export default Seamless
