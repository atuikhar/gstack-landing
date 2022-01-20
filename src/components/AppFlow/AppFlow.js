import React, { useEffect, useRef } from 'react'
import { Grid, ListItemAvatar } from '@mui/material'
import {
  Wrapper,
  Title,
  Text,
  Paragraph,
  CheckIcon,
  ListItemContainer,
  AvatarContainer,
  GridContent,
  VideoIcon,
  TeamAdd,
  WrapperContent,
  GridWrapper,
} from './AppFlowStyles'

const AppFlow = () => {
  const videoEl = useRef(null)
  const videoEl1 = useRef(null)

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error('Error', error)
      })
    videoEl1 &&
      videoEl1.current &&
      videoEl1.current.play().catch((error) => {
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
      <WrapperContent>
        <Grid container spacing={1}>
          <GridWrapper
            item
            xs={12}
            md={12}
            lg={5}
            xl={5}
            sx={{ marginTop: '142px' }}
          >
            <video
              style={{
                maxWidth: '100%',
                width: '800px',
                margin: '0 auto',
                borderRadius: '10px',
                cursor: 'pointer',
              }}
              playsInline
              loop
              muted
              src="/A.mp4"
              ref={videoEl}
            />
          </GridWrapper>
          <Grid item xs={12} md={12} lg={7} xl={7}>
            <VideoIcon />
            <Paragraph>
              Capture quality leads even while you're not around
            </Paragraph>
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
      </WrapperContent>
      <Wrapper>
        <Grid container spacing={1}>
          <Grid item xs={12} md={12} lg={7} xl={7}>
            <GridContent>
              <TeamAdd />
              <Paragraph>
                Add your team and scale customer conversations
              </Paragraph>
              <ListItemContainer>
                <ListItemAvatar>
                  <AvatarContainer>
                    <CheckIcon />
                  </AvatarContainer>
                </ListItemAvatar>
                <Text>Show availability across your agents’ calendars</Text>
              </ListItemContainer>
              <ListItemContainer>
                <ListItemAvatar>
                  <AvatarContainer>
                    <CheckIcon />
                  </AvatarContainer>
                </ListItemAvatar>
                <Text>Route calls to the right team or agent.</Text>
              </ListItemContainer>
              <ListItemContainer>
                <ListItemAvatar>
                  <AvatarContainer>
                    <CheckIcon />
                  </AvatarContainer>
                </ListItemAvatar>
                <Text>Hand off calls to the qualified agent.</Text>
              </ListItemContainer>
            </GridContent>
          </Grid>
          <GridWrapper
            item
            xs={12}
            md={12}
            lg={5}
            xl={5}
            sx={{ marginTop: '142px' }}
          >
            <video
              style={{
                maxWidth: '100%',
                width: '800px',
                margin: '0 auto',
                borderRadius: '10px',
                cursor: 'pointer',
              }}
              playsInline
              loop
              muted
              src="/B.mp4"
              ref={videoEl1}
            />
          </GridWrapper>
        </Grid>
      </Wrapper>
      <hr style={{ borderBottom: '4px solid black', margin: '50px' }} />
    </Wrapper>
  )
}

export default AppFlow
