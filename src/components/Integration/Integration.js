import { Grid, ListItemAvatar } from '@mui/material'
import {
  Wrapper,
  Title,
  Text,
  ListItemContainer,
  AvatarContainer,
  CheckIcon,
  IntegrationTechImage,
} from './IntegrationStyles'

const Integration = () => {
  return (
    <Wrapper>
      <Grid container spacing={4}>
        <Grid item sm={12} md={12} lg={7}>
          <Wrapper>
            <Title>Integrate in under 5 minutes</Title>
            <ListItemContainer>
              <ListItemAvatar>
                <AvatarContainer>
                  <CheckIcon />
                </AvatarContainer>
              </ListItemAvatar>
              <Text>
                Add just a few lines of script to your website and get going.
              </Text>
            </ListItemContainer>
            <ListItemContainer>
              <ListItemAvatar>
                <AvatarContainer>
                  <CheckIcon />
                </AvatarContainer>
              </ListItemAvatar>
              <Text>
                No-code installation for Shopify, Wordpress and via Google Tag
                Manager.
              </Text>
            </ListItemContainer>
            <ListItemContainer>
              <ListItemAvatar>
                <AvatarContainer>
                  <CheckIcon />
                </AvatarContainer>
              </ListItemAvatar>
              <Text>
                Use our javascript API and integrate video calling from any
                workflow.
              </Text>
            </ListItemContainer>
          </Wrapper>
        </Grid>
        <Grid item sm={12} md={12} lg={5}>
          <IntegrationTechImage src="/integration.png" />
        </Grid>
      </Grid>
      <hr style={{ borderBottom: '4px solid black', margin: '50px' }} />
    </Wrapper>
  )
}

export default Integration
