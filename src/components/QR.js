import React from 'react';
import styled from 'styled-components';
import logo from '../images/image-qr-code.png';

function QR() {
  return (
    <QRStyle>
      <img className="QR" src={logo} alt="qr" />
    </QRStyle>
  );
}

const QRStyle = styled.div`
  .QR {
    width: 100%;
    max-width: 270px;
    max-height: 370px;
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
  }
`;
export default QR;
