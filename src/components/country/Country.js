import React, { useContext } from "react";
import DataContext from "../../context/DataContext";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const CountryWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  & .country-menu {
    padding: 3em 4em;
    & > a {
      background-color: #3d3951;
      color: hsl(0, 0%, 100%);
      box-shadow: 5px 5px 5px rgb(27 21 21 / 60%);
      padding: 0.5em 1.7em;
      text-decoration: none;
      border-radius: 5px;
    }
  }
  & .country-content {
    display: flex;
    padding: 3em;
    & img {
      width: 600px;
    }
    & .country-details {
      display: flex;
      flex-wrap: wrap;
      padding: 1em 2em;
      & .country-details_one {
        width: 40%;
        margin-left: 3em;
        & h2 {
          padding: 0.4em 0;
        }
        & p {
          & > span {
            color: darkgrey;
          }
        }
      }
      & .country-details_two {
        width: 50%;
        padding-top: 1.8em;
        padding-left: 2em;
        & p {
          & > span {
            color: darkgrey;
          }
        }
      }
      & .country-details_three {
        width: 75%;
        margin: 0 auto;
        & p {
          & > span {
            color: darkgrey;
            padding: 0.2em 1em;
            margin: 0 0.4em;
            box-shadow: 5px 5px 5px rgb(27 21 21 / 60%);
            background-color: hsl(209, 23%, 22%);
            border-radius: 3px;
            font-size: 0.8em;
            cursor: pointer;
          }
        }
      }
    }
  }
  @media (max-width: 412px) {
    & .country-menu {
      padding: 3em 2em;
    }
    & .country-content {
      display: block;
      max-width: 100vw;
      padding: 1.5em;
      padding-top: 1em;
      & > img {
        width: 100%;
        height: 250px;
      }
      & > .country-details {
        display: block;
        width: 100%;
        padding: 1em 0.2em;
        & > .country-details_one,
        .country-details_two,
        .country-details_three {
          width: 100%;
          margin: 0;
          padding: 0;
          padding-top: 1.8em;
          & > p {
            line-height: 2;
          }
        }
      }
    }
  }
`;

export default function Country() {
  const { countries } = useContext(DataContext);
  let { id } = useParams();
  let foundCountry = countries?.filter((country) => country.name === id);

  return (
    <CountryWrapper>
      <div className="country-menu">
        <Link to="/" className="go-back">
          <i className="fa-solid fa-arrow-left-long"></i> Back
        </Link>
      </div>
      <div className="country-content">
        <img src={foundCountry[0]?.flags.png} alt={foundCountry[0]?.name} />
        <div className="country-details">
          <div className="country-details_one">
            <h2>{foundCountry[0]?.name}</h2>
            <p>
              Native name: <span>{foundCountry[0]?.nativeName}</span>
            </p>
            <p>
              Population:{" "}
              <span>{foundCountry[0]?.population.toLocaleString()}</span>
            </p>
            <p>
              Region: <span>{foundCountry[0]?.region}</span>
            </p>
            <p>
              Sub Region: <span>{foundCountry[0]?.subregion}</span>
            </p>
            <p>
              Capital: <span>{foundCountry[0]?.capital}</span>
            </p>
          </div>
          <div className="country-details_two">
            <p>
              Top Level Domain: <span>{foundCountry[0]?.topLevelDomain}</span>
            </p>
            <p>
              Currencies: <span>{foundCountry[0]?.currencies[0].name}</span>
            </p>
            <p>
              Languages:{" "}
              <span>
                {foundCountry[0]?.languages[0].name},{" "}
                {foundCountry[0]?.languages[0].nativeName}
              </span>
            </p>
          </div>
          <div className="country-details_three">
            <p>
              Border Countries:{" "}
              {foundCountry[0]?.borders?.slice(0, 3).map((border, i) => (
                <span key={i}>{border}</span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </CountryWrapper>
  );
}
