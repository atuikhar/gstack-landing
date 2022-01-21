import { Card, CardContent } from '@mui/material'
import {
  Wrapper,
  WrapperGrid,
  Text,
  Paragraph,
  PlayStoreButton,
} from './ContactsStyles'
import { contact } from 'constants/data'

const Contacts = () => {
  return (
    <>
      <WrapperGrid>
        {contact.map((c, index) => {
          return (
            <Card key={index} sx={{ boxShadow: 'none' }}>
              <CardContent>
                <Text>{c.title}</Text>
                {c.list.map((l, i) => {
                  return <Paragraph key={i}>{l}</Paragraph>
                })}
              </CardContent>
            </Card>
          )
        })}
      </WrapperGrid>
      <Wrapper>
        <PlayStoreButton>
          <img src="/google_play.svg" alt="playstore" />
        </PlayStoreButton>
        <PlayStoreButton>
          <img src="/apple.png" alt="ios" />
        </PlayStoreButton>
      </Wrapper>
    </>
  )
}

export default Contacts
