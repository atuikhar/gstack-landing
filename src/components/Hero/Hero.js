import { Grid } from '@mui/material'
import {
  HeroWrapper,
  Title,
  Text,
  Paragraph,
  SubmitEmail,
  InputWrapper,
  InputField,
  ImgWrapper,
  Image,
  SmallImage,
  SmallImageWrapper,
} from './HeroStyles'

const Hero = () => {
  return (
    <>
      <HeroWrapper>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={5}>
            <Title>Meet Your Customers Face-to-Face</Title>
            <Text>Instantly on your website or app</Text>
            <Paragraph>
              Integrate video calling on your website or app in under 5 minutes.
              Showcase your products, assist customers with their purchase or
              help resolve issues faster with video.
            </Paragraph>
            <InputWrapper>
              <InputField
                sx={{ borderColor: 'grey.500' }}
                id="outlined-basic"
                label="Email Address"
                variant="outlined"
                focused
              />
              <SubmitEmail variant="contained">Get Started</SubmitEmail>
            </InputWrapper>
          </Grid>
          <Grid item xs={12} md={12} lg={7}>
            <ImgWrapper>
              <Image src="/Call2.jpg" alt="img" />
              <Image src="/Call.jpg" alt="img" />{' '}
              <Image src="/Call1.jpg" alt="img" />
              <Image src="/VideoCalling.png" alt="img" />{' '}
            </ImgWrapper>
            <SmallImageWrapper>
              <SmallImage src="/Call2.jpg" alt="img" />{' '}
            </SmallImageWrapper>
          </Grid>
        </Grid>
        <hr style={{ borderBottom: '4px solid black', margin: '50px' }} />
      </HeroWrapper>
    </>
  )
}

export default Hero
