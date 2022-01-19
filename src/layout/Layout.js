import { LayoutWrapper } from './LayoutStyles';

export const Layout = ({ children }) => {
  return (
    <>
      <LayoutWrapper>
        <main>{children}</main>
      </LayoutWrapper>
    </>
  );
};
