import React, { useEffect } from "react";
import { dark } from "../defs";

const ExtraDetails = ({
  rank,
  dailyChange,
  totalVolume,
  marketCapTotal,
  marketCapPercentage,
  circulatingSupply,
  categories,
  description,
  homepage
}) => {
  const createDescription = () => {
    return { __html: description };
  };
  const createHomepageLink = () => {
    return {
      __html: `<a href="${homepage}">${homepage}</a>`
    };
  };

  useEffect(() => {
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.style.color = dark.app.buttonBg;
    });
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <p style={paragraph}>Market cap rank: {rank}</p>
      <p style={paragraph}>Market cap: ${marketCapTotal}</p>
      <p style={paragraph}>Market cap percentage: {marketCapPercentage}</p>
      <p style={paragraph}>24h change: {dailyChange}</p>
      <p style={paragraph}>Total volume: ${totalVolume}</p>

      <div style={paragraph} className="test">
        <p>Description: </p>
        <p dangerouslySetInnerHTML={createDescription()}></p>
      </div>
      <div style={paragraph}>
        Homepage: <span dangerouslySetInnerHTML={createHomepageLink()}></span>
      </div>
      <p style={paragraph}>Circulating supply: {circulatingSupply}</p>
      <p style={paragraph}>
        {categories.length === 1 ? "Category: " : "Categories: "}
        {categories.map((cat, i) => (
          <span key={i}>
            {cat + `${i === categories.length - 1 ? "." : ", "}`}
          </span>
        ))}
      </p>
    </div>
  );
};

const paragraph = { marginBottom: 8, fontWeight: 400 };

export default ExtraDetails;
