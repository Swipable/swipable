import React from "react";
import "../index.css";
import Header from "../components/Header/header"
import Form from "../components/Form/form";
import Footer from "../components/Footer/footer";
import Wrapper from "../components/Wrapper/wrapper";

function Signup() {
  return (
    <Wrapper>
    <Header></Header>
      <Form></Form>
      <Footer></Footer>
    </Wrapper>
  );
}

export default Signup;
