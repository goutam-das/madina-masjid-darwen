import React from "react";
import styled from "styled-components";

const HadithOfTheDay = () => {
  return (
    <Container>
      <Title>HADITH OF THE DAY</Title>
      <SubTitle>
        The chaser and the chased can offer Salat (prayer) while riding , and by
        signs
      </SubTitle>
      <Description>
        When the Prophet (ﷺ) returned from the battle of Al-Ahzab (The
        confederates), he said to us, "None should offer the 'Asr prayer but at
        Bani Quraiza." The 'Asr prayer became due for some of them on the way.
        Some of them decided not to offer the Salat but at Bani Quraiza while
        others decided to offer the Salat on the spot and said that the
        intention of the Prophet (ﷺ) was not what the former party had
        understood. And when that was told to the Prophet (ﷺ) he did not blame
        anyone of them. Reference : Sahih al-Bukhari 946 In-book reference :
        Book 12, Hadith 5 USC-MSA web (English) reference : Vol. 2, Book 14,
        Hadith 67
      </Description>
    </Container>
  );
};

export default HadithOfTheDay;
const Container = styled.div`
  flex: 1;
  /* box-shadow: 0 0 2px 1px var(--base-color);
  background: rgba(0, 0, 0, 0.3); */
  border-radius: 5px;
  max-width: 1024px;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 50px;
  color: #fff;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const SubTitle = styled.h3`
  font-size: 36px;
  color: #fff;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const Description = styled.p`
  font-size: 20px;
  color: #fff;
  text-align: center;
  position: relative;
  z-index: 1;
`;
