import { Fragment } from "react";
import { Container } from "reactstrap";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <Container>{children}</Container>
    </Fragment>
  );
};

export default Layout;
