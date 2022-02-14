import React from "react";
import styled from "styled-components";
// import MapImg from "../assets/images/map.png";
import PText from "./PText";

const MapStyles = styled.div`
  background-position: center;
  background-size: cover;
  min-height: 400px;
  .container {
    position: relative;
  }
  .iFrame {
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);
    filter: grayscale(100%);
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    margin-bottom: 2%;
    left: 94.5%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
  @media (max-width: 640px) {
    .container {
      display: none;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <iframe
        className="iFrame"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31108.54568241301!2d77.61468282152268!3d12.935450366284638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144ed898fc2d%3A0x1681f38e8c00ae56!2sKoramangala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1644840575220!5m2!1sen!2sin"
        width="100%"
        height="569"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>

      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Find me here</h3>
          <PText>Koramangala, Bangalore</PText>

          <a
            className="map__card__link"
            href="https://www.google.com/maps/place/Koramangala,+Bengaluru,+Karnataka/@12.9354504,77.6146828,14z/data=!3m1!4b1!4m5!3m4!1s0x3bae144ed898fc2d:0x1681f38e8c00ae56!8m2!3d12.9351929!4d77.6244807"
            target="_blank"
            rel="noreferrer"
          >
            Open in google map
          </a>
        </div>
      </div>
      {/* <img src={MapImg} alt="Map" /> */}
    </MapStyles>
  );
}
