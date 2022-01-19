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
              <Image
                src="https://images.unsplash.com/photo-1586980368323-8ce5db4c85ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1129&q=80"
                alt="img"
              />
              <Image
                src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                alt="img"
              />{' '}
              <Image
                src="https://images.unsplash.com/photo-1586985564259-6211deb4c122?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1129&q=80"
                alt="img"
              />
              <Image
                src="https://images.unsplash.com/photo-1586985564150-11ee04838034?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1129&q=80"
                alt="img"
              />{' '}
            </ImgWrapper>
            <SmallImageWrapper>
              <SmallImage
                src="https://images.unsplash.com/photo-1586980368323-8ce5db4c85ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1129&q=80"
                alt="img"
              />{' '}
            </SmallImageWrapper>
          </Grid>
        </Grid>
        <hr style={{ borderBottom: '4px solid black', margin: '50px' }} />
      </HeroWrapper>
    </>
  )
}

export default Hero
