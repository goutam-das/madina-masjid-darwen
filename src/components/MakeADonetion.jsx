import React from "react";
import styled from "styled-components";

const MakeADonetion = () => {
  return (
    <Container>
      <GridWraper>
        <DonationImage src="https://darwenmosque.co.uk/wp-content/uploads/2020/09/2020-09-03-2.jpg" />
        <div>
          <Title>Make A Donation</Title>
          <p>
            Your donation will help us to maintain and develop a wide range of
            services that the mosque provides,
          </p>
          <p>
            as well as pay ogg outgoing costs such as utilities and salaries.
          </p>
          <h4>“And Those who spend in charity will be richly rewarded”</h4>
          <p>Al Qur’an 57:10</p>
          <Center>
            <Button>Donate Now</Button>
          </Center>
        </div>
      </GridWraper>
    </Container>
  );
};

export default MakeADonetion;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  background-color: #fff;
  padding: 4% 0;
`;
const GridWraper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 1024px;
  margin: auto;
  grid-column-gap: 50px;
  padding: 0 10px;

  @media (max-width: 960px) {
    grid-template-columns: auto 1fr auto;
  }
`;

const DonationImage = styled.div`
  ${({ src }) =>
    src &&
    `
  background-image: url(${src});
  background-size: 185%;
    background-position: left bottom;
    border-radius: 4px;
  `}
`;

const Button = styled.button`
  padding: 10px;
  background: var(--base-color);
  border: 0;
  border-radius: 4px;
  color: #fff;
  margin-top: 15px;
  cursor: pointer;
`;

const Title = styled.h2`
  margin: 0;
  text-align: center;
  text-transform: uppercase;
  font-size: 36px;

  @media (max-width: 480px) {
    font-size: 30px;
  }
`;
