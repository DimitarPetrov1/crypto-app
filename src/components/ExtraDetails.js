import React from "react";

const ExtraDetails = ({
  rank,
  dailyChange,
  dailyVolume,
  marketCap,
  categories,
  description,
  homepage,
}) => {
  const createDescription = () => {
    return { __html: description };
  };
  const createHomepageLink = () => {
    return {
      __html: `<a href="${homepage}">${homepage}</a>`,
    };
  };

  return (
    <div>
      <p>Market cap rank: {rank}</p>
      <p>24h change: {dailyChange}</p>
      <p>24h volume: {dailyVolume}</p>
      <p>Market cap: {marketCap}</p>
      {categories.length === 1 ? "Category: " : "Categories: "}
      {categories.map((cat, i) => (
        <span key={i}>
          {cat + `${i === categories.length - 1 ? "." : ", "}`}
        </span>
      ))}
      <div className="test">
        <p>Description: </p>
        <p dangerouslySetInnerHTML={createDescription()}></p>
      </div>
      <div>
        Homepage: <span dangerouslySetInnerHTML={createHomepageLink()}></span>
      </div>
    </div>
  );
};

export default ExtraDetails;
