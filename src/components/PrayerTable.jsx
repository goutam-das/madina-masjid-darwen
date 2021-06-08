import React from "react";
import styled from "styled-components";

const PrayerTable = () => {
  return (
    <TableConainer>
      <Table>
        <TBody>
          <Tr>
            <Td>Prayer</Td>
            <Td>Begins</Td>
            <Td>Jamaat</Td>
          </Tr>
          <Tr>
            <Td>Fajr</Td>
            <Td>2:42 am</Td>
            <Td>4:15 am</Td>
          </Tr>
          <Tr>
            <Td>Sunrise</Td>
            <Td colSpan={2}>4:42 am</Td>
          </Tr>
          <Tr>
            <Td>Zuhr</Td>
            <Td>1:13 pm</Td>
            <Td>1:30 pm</Td>
          </Tr>
          <Tr>
            <Td>Asr</Td>
            <Td>6:49 pm</Td>
            <Td>8:00 pm</Td>
          </Tr>
        </TBody>
      </Table>
    </TableConainer>
  );
};

export default PrayerTable;

const TableConainer = styled.div``;
const Table = styled.table`
  width: 100%;
  max-width: 400px;
  margin: 32px auto;
  border-collapse: collapse;
`;
const TBody = styled.tbody``;
const Tr = styled.tr``;
const Td = styled.td`
  text-align: center;
  color: #000;
  font-size: 20px;
  font-weight: bold;
  padding: 8px 0;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
`;
