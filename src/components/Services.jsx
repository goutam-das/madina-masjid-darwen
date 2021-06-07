import React from "react";
import styled from "styled-components";
import darwinImg from "../images/darwin.png";
const Service = () => {
  const [services] = React.useState([
    {
      title: "Marriage",
      body: "Madina Masjid offers Nikah (marriage) services, provided by our local Imam.",
      link: "/",
    },
    {
      title: "Madrasah",
      body: "Madina Masjid offers Islamic education for children aged 5+, every weekday during the evening.",
      link: "/",
    },
    {
      title: "Community Engagement And Education",
      body: "We organize various social activities and youth services for our community. There’s quite a bit available for our youth which will be both fun and engaging in an Islamic environment.",
      link: "/",
    },
    {
      title: "Congregational Prayers",
      body: "Madina Masjid is able to accommodate 200 worshipers. We currently hold two Jumuahs, the first at 1:30pm and the second at 3pm.",
      link: "/",
    },
    {
      title: "Funeral",
      body: "We organize various social activities and youth services for our community. There’s quite a bit available for our youth which will be both fun and engaging in an Islamic environment.",
      link: "/",
    },
    {
      title: "School Visits",
      body: "We organise various visits to the mosque from various schools in the town.",
      link: "/",
    },
  ]);
  return (
    <Container>
      <Title>Services</Title>
      <Grid>
        {services.map((item, key) => (
          <ServiceCard key={key} item={item} />
        ))}
      </Grid>
    </Container>
  );
};

export default Service;

const ServiceCard = ({ item }) => {
  return (
    <Card>
      <ImageContainer>
        <Image src={darwinImg} alt="darwin" />
        <Dashed />
      </ImageContainer>
      <CardTitle>{item.title}</CardTitle>
      <CardBody>{item.body}</CardBody>
      <CardLink href={item.link}>Learn more</CardLink>
    </Card>
  );
};

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  height: 64px;
  width: 64px;
`;
const Dashed = styled.div`
  flex: 1;
  border-bottom: 1px dashed #efefef;
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
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
`;

const Card = styled.div`
  /* padding: 15px;
  box-shadow: 0 0 2px 1px rgb(0 0 0 / 8%);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 2px 1.5px rgb(0 0 0 / 12%);
  } */
`;

const CardTitle = styled.h3`
  text-transform: uppercase;
  color: var(--base-color);
  font-size: 22px;
  margin: 0;
`;
const CardBody = styled.p`
  color: #9d9087;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.4px;
`;
const CardLink = styled.a`
  color: var(--base-color);
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.4px;
`;
