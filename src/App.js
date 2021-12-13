import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import "./css/App.css";
import Nav from "./components/Nav";
import TokenPage from "./components/TokenPage.js";
import Settings from "./components/Settings";
import SearchComponent from "./components/SearchComponent";
import Lines from "./components/charts/Lines";
import { numberConverter } from "./assets/numberConverter";
import Loader from "./components/Loader";

import { dark, posNeg } from "./defs";

const App = () => {
  const [currentTokenId, setCurrentTokenId] = useState("");
  const [graphDataHomepage, setGraphDataHomepage] = useState([]);
  const [tokensData, setTokensData] = useState([]);
  const [sortListOpen, setSortListOpen] = useState(false);
  const [sortBy, setSortBy] = useState("Market cap Desc");
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(10);

  useEffect(() => {
    const arrays = tokensData.map((dat) => {
      return dat.sparkline_in_7d;
    });
    const arrs = arrays.map((ar) => {
      return ar;
    });
    const prices = [];
    arrs.forEach((arr) => {
      prices.push(arr.price);
    });
    let Obj = prices.map((price) => {
      const obj = [];
      for (let j = 0; j < price.length; j++) {
        obj.push({ x: j, y: price[j] });
      }
      return obj;
    });
    setGraphDataHomepage(Obj);
  }, [tokensData]);

  useEffect(() => {
    setLoading(false);
    let sort = sortBy.toLowerCase().replaceAll(" ", "_");
    const tokenDataUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=${sort}&per_page=${perPage}&page=1&sparkline=true`;

    const fetchTokens = () => {
      axios
        .get(tokenDataUrl)
        .then((res) => setTokensData(res.data))
        .catch((err) => console.log(err));
    };

    fetchTokens();
    setLoading(true);

    return fetchTokens();
  }, [sortBy, perPage]);

  const handleGetCurrentToken = (e) => {
    const id = e.target.dataset.tokenid;
    setCurrentTokenId(id);
    return id;
  };

  return (
    <div
      style={{ backgroundColor: dark.app.bg, color: dark.app.text }}
      className="App"
    >
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Nav link="/settings" />
                <SearchComponent
                  handleSearchToken={(e) =>
                    setCurrentTokenId(e.target.dataset.tokenid)
                  }
                />
                <div style={{ padding: "0 10px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: 10,
                      position: "relative",
                      userSelect: "none",
                      width: 200
                    }}
                  >
                    <div style={{ paddingRight: 10 }}>Sort by:</div>
                    <div>
                      <div
                        style={{
                          cursor: "pointer"
                        }}
                        onClick={() => setSortListOpen(!sortListOpen)}
                      >
                        {sortBy}
                      </div>
                      <div
                        style={
                          sortListOpen
                            ? {
                                position: "absolute",
                                right: 0,
                                backgroundColor: dark.app.text,
                                color: "#000",
                                borderRadius: 10,
                                padding: "10px 14px",
                                zIndex: 2
                              }
                            : {
                                visibility: "hidden",
                                height: 0
                              }
                        }
                      >
                        <div
                          style={{
                            marginBottom: 4,
                            cursor: "pointer",
                            borderBottom: "1px dotted " + dark.app.bg
                          }}
                          onClick={(e) => {
                            setSortBy(e.target.textContent);
                            setSortListOpen(!sortListOpen);
                          }}
                        >
                          Market cap Desc
                        </div>
                        <div
                          style={{
                            marginBottom: 4,
                            cursor: "pointer",
                            borderBottom: "1px dotted " + dark.app.bg
                          }}
                          onClick={(e) => {
                            setSortBy(e.target.textContent);
                            setSortListOpen(!sortListOpen);
                          }}
                        >
                          Market cap Asc
                        </div>
                        <div
                          style={{
                            marginBottom: 4,
                            cursor: "pointer",
                            borderBottom: "1px dotted " + dark.app.bg
                          }}
                          onClick={(e) => {
                            setSortBy(e.target.textContent);
                            setSortListOpen(!sortListOpen);
                          }}
                        >
                          Volume Desc
                        </div>
                      </div>
                    </div>
                  </div>
                  <select
                    style={{ flex: 1 }}
                    onChange={(e) => setPerPage(e.target.value)}
                  >
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                  {loading ? (
                    tokensData.map((t, i) => {
                      return (
                        <Link
                          style={style.link}
                          to={`/token/${t.id}`}
                          onClick={handleGetCurrentToken}
                          key={i}
                        >
                          <div data-tokenid={t.id} style={style.tokenBox}>
                            <img
                              loading="lazy"
                              src={t.image.replace("large", "small")}
                              alt={t.id}
                              style={style.tokenBox.img}
                            />
                            <div style={style.tokenBox.left}>
                              <div style={style.tokenBox.tokenName}>
                                {t.name}
                              </div>
                              <div style={style.uppercase}>({t.symbol})</div>
                            </div>
                            <Lines
                              stokeWidth={6}
                              style={style.lines}
                              width={100}
                              animate={null}
                              data={graphDataHomepage[i]}
                            />
                            <div style={style.tokenBox.right}>
                              <div>
                                {"$" + numberConverter(t.current_price)}
                              </div>
                              <div style={style.tokenBox.right.bottom}>
                                <div
                                  style={
                                    t.price_change_percentage_24h < 0
                                      ? { color: posNeg.negative }
                                      : { color: posNeg.positive }
                                  }
                                >
                                  {t.price_change_percentage_24h !== null
                                    ? t.price_change_percentage_24h.toFixed(2) +
                                      "%"
                                    : 0 + "%"}
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      );
                    })
                  ) : (
                    <Loader />
                  )}
                </div>
              </>
            }
          />
          <Route
            path={`/token/${currentTokenId}`}
            element={
              <>
                <Nav link="/" />
                <SearchComponent
                  handleSearchToken={(e) =>
                    setCurrentTokenId(e.target.dataset.tokenid)
                  }
                />
                <TokenPage id={currentTokenId} />
              </>
            }
          />
          <Route
            path="/settings"
            element={
              <>
                <Nav link="/" title="Settings" />
                <Settings />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

const style = {
  link: {
    color: dark.app.text,
    textDecoration: "none",
    zIndex: 0
  },

  uppercase: {
    textTransform: "uppercase"
  },
  lines: {
    flex: 2,
    zIndex: -1
  },
  tokenBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: dark.app.altBg,
    marginBottom: 10,
    marginTop: 10,
    padding: 12,
    borderRadius: 16,
    lineHeight: 1.5,
    fontSize: "1rem",
    zIndex: 0,

    img: {
      pointerEvents: "none"
    },

    tokenName: {
      color: dark.app.text
    },

    left: {
      flex: 1,
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      flexDirection: "column",
      marginLeft: 12,
      pointerEvents: "none"
    },
    right: {
      textAlign: "right",
      flex: 1,
      pointerEvents: "none",

      bottom: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        textAlign: "right"
      }
    }
  }
};

export default App;
