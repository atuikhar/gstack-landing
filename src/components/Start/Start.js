import { Wrapper, Title, Image, StartTrailButton } from './StartStyles'

const Start = () => {
  return (
    <>
      <Wrapper>
        <Title>
          Ready to meet your customers ?
          <StartTrailButton>Start Free Trial</StartTrailButton>
        </Title>
        <Image src="/VideoCalling.png" />
      </Wrapper>

      <hr style={{ borderBottom: '4px solid black', margin: '50px' }} />
    </>
  )
}

export default Start
