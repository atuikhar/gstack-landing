import styled from 'styled-components';
import { Container } from '@mui/material';

export const LayoutWrapper = styled(Container)`
  margin-top: ${(props) => props.theme.gap.xl};
  min-height: 100vh;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: ${(props) => props.theme.gap.xl};
  }
`;
