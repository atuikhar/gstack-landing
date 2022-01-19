import { ThemeProvider } from 'styled-components';

import GlobalTheme from './globalTheme';
import GlobalStyles from './globalStyle';

const Theme = ({ children }) => (
  <ThemeProvider theme={GlobalTheme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;
