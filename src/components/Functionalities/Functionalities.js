import { Card, CardContent } from '@mui/material'
import {
  Wrapper,
  Title,
  Text,
  Paragraph,
  WrapperGrid,
  Image,
} from './FunctionalitiesStyles'
import { data } from 'constants/data'

const Functionalities = () => {
  return (
    <>
      <Wrapper>
        <Title>
          Everything you need to delight your customers over video call
        </Title>
        <Text>Install Gumstack and get busy talking to your customers</Text>
      </Wrapper>
      <Wrapper>
        <WrapperGrid>
          {data.map((d, index) => {
            return (
              <Card key={index} sx={{ boxShadow: 'none' }}>
                <Image src={d.img} alt="img" />
                <CardContent>
                  <Text>{d.title}</Text>
                  <Paragraph>{d.description}</Paragraph>
                </CardContent>
              </Card>
            )
          })}
        </WrapperGrid>
      </Wrapper>
      <hr style={{ borderBottom: '4px solid black', margin: '50px' }} />
    </>
  )
}

export default Functionalities
