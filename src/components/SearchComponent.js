import React, { useState } from "react";
import { Link } from "react-router-dom";
import { searchData } from "../assets/searchData";
import { dark } from "../defs";

const SearchComponent = ({ handleSearchToken }) => {
  const [searchStr, setSearchStr] = useState("");

  const clearSearch = () => {
    setTimeout(() => {
      setSearchStr("");
    }, 500);
  };

  return (
    <form
      id="search-form"
      style={{
        position: "relative",
        margin: "0 10px",
        marginTop: 10,
        zIndex: 10
      }}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div style={{ display: "flex", alignItems: "center", padding: "0 10px" }}>
        <input
          style={style.input}
          type="search"
          placeholder="Search..."
          value={searchStr}
          onChange={(e) => setSearchStr(e.target.value)}
        />
      </div>

      <ul style={style.searchList}>
        {searchData
          .filter((val) => {
            const byName = val.name
              .toLowerCase()
              .includes(searchStr.toLowerCase());
            const bySymbol = val.symbol
              .toLowerCase()
              .includes(searchStr.toLowerCase());
            if (searchStr === "") {
              return "";
            } else {
              return byName || bySymbol;
            }
          })
          .map((token, i) => {
            return (
              <Link
                style={{ textDecoration: "none" }}
                key={i}
                to={`/token/${token.id}`}
                onClick={handleSearchToken}
                onMouseUp={clearSearch}
              >
                <li data-tokenid={token.id} style={style.listItem}>
                  <img
                    src={token.image}
                    alt={token.symbol}
                    data-tokenid={token.id}
                  />
                  <p style={{ color: "black" }} data-tokenid={token.id}>
                    {token.name}
                  </p>
                  <p style={style.symbol} data-tokenid={token.id}>
                    {token.symbol}
                  </p>
                </li>
              </Link>
            );
          })}
      </ul>
    </form>
  );
};

const style = {
  symbol: {
    textTransform: "uppercase",
    color: "gray"
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: "1.2rem",
    paddingLeft: 10,
    paddingRight: 10,
    margin: "0 -10px",
    border: "1px solid lightgray",
    outline: "none",
    borderRadius: 10
  },
  // roundButton: {
  //   width: 50,
  //   height: 50,
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   borderRadius: 25,
  //   overflow: "hidden",
  //   border: "1px solid lightgray",
  //   backgroundColor: "lightgreen",
  //   cursor: "pointer",
  //   marginRight: 10
  // },
  searchList: {
    borderRadius: 10,
    marginTop: 10,
    position: "absolute",
    width: "100%",
    backgroundColor: "#fff",
    maxHeight: 700,
    overflowY: "scroll"
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
    borderBottom: "1px dotted lightgray",
    width: "100%"
  }
};

export default SearchComponent;
