import React, { useEffect, useRef } from 'react'
import { Grid, List, ListItemAvatar, Avatar, ListItemText } from '@mui/material'
import {
  Wrapper,
  Title,
  Text,
  Paragraph,
  CheckIcon,
  ListItemContainer,
  AvatarContainer,
  GridContent,
} from './AppFlowStyles'

const AppFlow = () => {
  const videoEl = useRef(null)

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error('Error', error)
      })
  }

  useEffect(() => {
    attemptPlay()
  }, [])
  return (
    <Wrapper>
      <Wrapper>
        <Paragraph>Worried about missing calls from customers?</Paragraph>
        <Title>Book Calls. Unblock Experience.</Title>
      </Wrapper>
      <Wrapper>
        <Grid container spacing={1}>
          <Grid item xs={12} md={12} lg={5} xl={5}>
            <video
              style={{
                maxWidth: '100%',
                width: '800px',
                margin: '0 auto',
                borderRadius: '10px',
              }}
              playsInline
              loop
              muted
              alt="All the devices"
              src="/V.mp4"
              ref={videoEl}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={7} xl={7}>
            <GridContent>
              <ListItemContainer>
                <ListItemAvatar>
                  <AvatarContainer>
                    <CheckIcon />
                  </AvatarContainer>
                </ListItemAvatar>
                <Text>Schedule callback appointments during office hours</Text>
              </ListItemContainer>
              <ListItemContainer>
                <ListItemAvatar>
                  <AvatarContainer>
                    <CheckIcon />
                  </AvatarContainer>
                </ListItemAvatar>
                <Text>Sync appointments to your calendar and CRM</Text>
              </ListItemContainer>
              <ListItemContainer>
                <ListItemAvatar>
                  <AvatarContainer>
                    <CheckIcon />
                  </AvatarContainer>
                </ListItemAvatar>
                <Text>Reminders & notifications for callback appointments</Text>
              </ListItemContainer>
            </GridContent>
          </Grid>
        </Grid>
      </Wrapper>
      <Wrapper>
        <Grid container spacing={1}>
          <Grid item xs={12} md={12} lg={7} xl={7}>
            <GridContent>
              <ListItemContainer>
                <ListItemAvatar>
                  <AvatarContainer>
                    <CheckIcon />
                  </AvatarContainer>
                </ListItemAvatar>
                <Text>Schedule callback appointments during office hours</Text>
              </ListItemContainer>
              <ListItemContainer>
                <ListItemAvatar>
                  <AvatarContainer>
                    <CheckIcon />
                  </AvatarContainer>
                </ListItemAvatar>
                <Text>Sync appointments to your calendar and CRM</Text>
              </ListItemContainer>
              <ListItemContainer>
                <ListItemAvatar>
                  <AvatarContainer>
                    <CheckIcon />
                  </AvatarContainer>
                </ListItemAvatar>
                <Text>Reminders & notifications for callback appointments</Text>
              </ListItemContainer>
            </GridContent>
          </Grid>
          <Grid item xs={12} md={12} lg={5} xl={5}>
            <video
              style={{
                maxWidth: '100%',
                width: '800px',
                margin: '0 auto',
                borderRadius: '10px',
              }}
              playsInline
              loop
              muted
              alt="All the devices"
              src="/V.mp4"
              ref={videoEl}
            />
          </Grid>
        </Grid>
      </Wrapper>
      <hr style={{ borderBottom: '4px solid black', margin: '50px' }} />
    </Wrapper>
  )
}

export default AppFlow
