import React from "react";
import styled from "styled-components";
import PrayerTable from "./PrayerTable";

const DailyPrayerTimes = () => {
  return (
    <Container>
      <Wrap>
        <Center>
          <Title>Daily Prayer Times</Title>
          <Date>June 6, 2021</Date>
          <Date2>25 Shawwal 1442</Date2>
          <Text style={{ color: "#fff" }}>ZUHR JAMAAT</Text>
          <Time>1:30 pm</Time>
        </Center>
        <PrayerTable />
        <Center>
          <Title>Jummah Khutbah</Title>
          <Text>1st Will be delivered in English at 1:30 PM</Text>
          <Text>2nd Will be delivered in English at 3:00 PM</Text>
        </Center>
      </Wrap>
    </Container>
  );
};

export default DailyPrayerTimes;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  flex: 1;
  box-shadow: 0 0 2px 1px rgb(0 0 0 / 25%);
  background: #86b81d;
  border-radius: 4px;
  padding: 40px 4%;
`;

const Wrap = styled.div`
  max-width: 1024px;
  margin: auto;
`;

const Title = styled.h2`
  font-size: 36px;
  margin: 0;
  margin-bottom: 15px;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
`;

const Date = styled.span``;
const Date2 = styled.span`
  font-size: 20px;
  font-style: italic;
  margin: 5px 0;
`;
const Text = styled.p`
  text-align: center;
  text-align: center;
  margin: 5px 0;
  font-weight: bold;
`;
const Time = styled.time`
  color: #fff;
`;
