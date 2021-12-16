import React, { useState, useEffect } from "react";
import axios from "axios";
import Lines from "./charts/Lines";
import ChartControls from "./ChartControls";
import ExtraDetails from "./ExtraDetails";
import { numberConverter } from "../assets/numberConverter";
import Loader from "./Loader";
import { dark, posNeg } from "../defs";
import Star from "../assets/svg/star.svg";

const TokenPage = ({ id }) => {
  const [loadedToken, setLoadedToken] = useState(false);
  const [loadedGraph, setLoadedGraph] = useState(false);
  const [tokenPrice, setTokenPrice] = useState([]);
  const [tokenDetails, setTokenDetails] = useState([]);
  const [tokenGraph, setTokenGraph] = useState([]);
  const [days, setDays] = useState("7");

  const tokenPriceUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}&order=market_cap_desc&per_page=1&page=1&sparkline=false
  `;
  const tokenDetailsUrl = `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`;

  const graphUrl = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`;

  useEffect(() => {
    const fetchTokenPrice = () => {
      return axios.get(tokenPriceUrl);
    };

    const fetchTokenDetails = () => {
      return axios.get(tokenDetailsUrl);
    };

    const fetchGraphUrl = () => {
      return axios.get(graphUrl);
    };

    axios.all([fetchTokenPrice(), fetchTokenDetails(), fetchGraphUrl()]).then(
      axios.spread((price, details, graph) => {
        setTokenPrice(price.data[0]);
        setTokenDetails(details.data);

        const arr = graph.data["prices"].map((price, i) => {
          return { x: i, y: price[1] };
        });
        setTokenGraph(arr);
        setLoadedGraph(true);
        setLoadedToken(true);
      })
    );
  }, [days, id, graphUrl, tokenDetailsUrl, tokenPriceUrl]);

  const handleDays = (e) => {
    setLoadedGraph(false);
    const val = e.target.value;
    setDays(val);
  };

  return (
    <>
      {loadedToken ? (
        <div style={style.tokenPage.wrap}>
          {/* Image and price info */}
          <div style={style.tokenPage.topBundle}>
            <img
              style={style.tokenPage.topBundle.img}
              src={`${tokenDetails.image.large}`}
              alt={id}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "1.3rem"
              }}
            >
              <p>{`${tokenDetails.name}`}&nbsp;</p>
              <p
                style={{ textTransform: "uppercase" }}
              >{`(${tokenDetails.symbol})`}</p>{" "}
              <img style={style.star} src={Star} alt="Favourite" />
            </div>
            <p style={{ fontSize: "2em", margin: 14 }}>
              {"$" + numberConverter(tokenPrice.current_price)}
            </p>
            <p
              style={{
                color:
                  tokenPrice.price_change_percentage_24h < 0
                    ? posNeg.negative
                    : posNeg.positive,
                backgroundColor: dark.app.altBg,
                width: "auto",
                display: "inline",
                padding: 8,
                borderRadius: 8
              }}
            >
              {tokenPrice.price_change_percentage_24h.toFixed(2) + "%"}
            </p>
          </div>
          {/* Graph */}
          {loadedGraph ? (
            <>
              <Lines
                stokeWidth={2}
                width={590}
                animate={{ duration: 1000 }}
                data={tokenGraph}
                style={{ width: "100%" }}
              />
              <ChartControls handleDays={handleDays} />
            </>
          ) : (
            <>
              <Loader />
              <ChartControls handleDays={handleDays} />
            </>
          )}

          {/* Show more */}
          <button style={style.btnLarge}>
            Add {tokenDetails.name} to wallet
          </button>

          <ExtraDetails
            rank={tokenDetails.market_cap_rank}
            dailyChange={
              tokenPrice.price_change_percentage_24h.toFixed(2) + "%"
            }
            marketCapTotal={numberConverter(tokenPrice.market_cap)}
            totalVolume={numberConverter(tokenPrice.total_volume)}
            marketCapPercentage={
              tokenPrice.market_cap_change_percentage_24h.toFixed(2) + "%"
            }
            circulatingSupply={numberConverter(tokenPrice.circulating_supply)}
            categories={tokenDetails.categories}
            description={tokenDetails.description.en}
            homepage={tokenDetails.links.homepage[0]}
          />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

const style = {
  star: {
    marginLeft: 10
  },
  tokenPage: {
    wrap: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "0 10px"
    },
    topBundle: {
      textAlign: "center",
      img: {
        height: 160,
        objectFit: "contain",
        marginBottom: 10,
        marginTop: 30
      }
    }
  },
  btnLarge: {
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
    padding: "20px",
    backgroundColor: dark.app.buttonBg,
    border: 0,
    borderRadius: 10,
    fontSize: "1rem",
    textTransform: "uppercase"
  }
};

export default TokenPage;
