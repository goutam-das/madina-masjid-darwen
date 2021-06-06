import React from "react";
import styled from "styled-components";

const ProgramsAndEvent = () => {
  return (
    <Container>
      <Title>{`Programs & Event`}</Title>
      <Grid>
        <LiveSession />
        <News />
      </Grid>
    </Container>
  );
};

export default ProgramsAndEvent;

const LiveSession = () => {
  const liveSession = {
    image:
      "https://darwenmosque.co.uk/wp-content/uploads/2020/07/slider_2-760x428.jpg",
    title: "Live Session: Daily Qur’an Recitation",
    time: "July 29, 2020 @ 8:00 am - 5:00 pm",
  };
  return (
    <LiveSessionContainer>
      <LiveSessionCard>
        <LiveSessionImage src={liveSession.image} alt="live session" />
        <LiveSessionTitle>{liveSession.title}</LiveSessionTitle>
        <LiveSessionTime>{liveSession.time}</LiveSessionTime>
      </LiveSessionCard>
      <Button>Read more</Button>
    </LiveSessionContainer>
  );
};

const Button = styled.button`
  padding: 10px;
  background: var(--base-color);
  border: 0;
  border-radius: 4px;
  color: #fff;
  margin-top: 15px;
  cursor: pointer;
`;

const LiveSessionContainer = styled.div``;

const LiveSessionImage = styled.img`
  width: 100%;
  height: 254px;
  object-fit: cover;
  object-position: center;
`;

const LiveSessionTitle = styled.h2`
  font-size: 30px;
  text-transform: uppercase;
  margin: 10px 0;
`;

const LiveSessionTime = styled.time`
  font-size: 14px;
`;

const LiveSessionCard = styled.div`
  &:hover {
    ${LiveSessionTitle} {
      cursor: pointer;
      color: var(--base-color);
    }
  }
`;

const News = () => {
  const news = [
    {
      title: "MADINA MASJID Announcement – Reopening of our Masjid",
      date: "July 28, 2020",
    },
    {
      title: "Re-opening of Madina Masjid",
      date: "July 21, 2020",
    },
    {
      title: "Announcement: Jummu’ah Prayer Guidelines",
      date: "July 21, 2020",
    },
  ];
  return (
    <NewsContainer>
      {news.map((item, key) => (
        <NewsCard key={key}>
          <NewsTitle>{item.title}</NewsTitle>
          <NewsDate>{item.date}</NewsDate>
        </NewsCard>
      ))}
      <Button>All news</Button>
    </NewsContainer>
  );
};

const NewsTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
`;
const NewsDate = styled.time``;

const NewsCard = styled.div`
  border-bottom: 1px solid #fff;
  padding: 5px 0;
  &:last-child {
    border-bottom: 0;
  }
  &:hover {
    ${NewsTitle} {
      cursor: pointer;
      color: var(--base-color);
    }
  }
`;

const NewsContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.025);
  padding: 24px 40px;
`;

const Container = styled.div`
  background-color: #fff;
  padding: 32px 4%;
`;

const Title = styled.h2`
  margin: 0;
  text-align: center;
  text-transform: uppercase;
  font-size: 36px;
`;

const Grid = styled.div`
  max-width: 1024px;
  margin: 4% auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
`;
