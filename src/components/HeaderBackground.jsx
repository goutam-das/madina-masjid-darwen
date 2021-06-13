import React from "react";
import styled from "styled-components";

const HeaderBackground = () => {
  return (
    <Cover>
      <Title>HOME</Title>
    </Cover>
  );
};

export default HeaderBackground;

const Cover = styled.div`
  background-image: url("https://darwenmosque.co.uk/wp-content/uploads/2017/09/bg-1.jpg");
  height: 400px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 60px;
  margin: 0;
  color: #fff;
`;
