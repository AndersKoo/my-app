import React from 'react';
import styled from 'styled-components';

function InfoField() {
  return (
    <>
      <InfoFieldStyle>
        <h2 className="title">
          Improve your front-end skills by building projects
        </h2>
        <p className="description">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </InfoFieldStyle>
    </>
  );
}

const InfoFieldStyle = styled.div`
  font-family: 'Epilogue', sans-serif;
  .title {
    font-size: 17px;
    text-align: center;
    padding: 10px 2em;
  }
  .description {
    text-align: center;
    font-weight: 400;
    color: hsl(212, 12%, 59%);
    font-size: 14px;
    padding: 0 2em 0 1em;
  }
`;

export default InfoField;
