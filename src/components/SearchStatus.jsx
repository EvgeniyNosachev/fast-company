import React from "react";

const SearchStatus = ({ length }) => {
  const renderPhrase = (number) => {
    const numberUser = Number(number.toString().split(""));

    if (numberUser === 1) return "человек тусанет с тобой сегодня";
    if (numberUser >= 2 && numberUser <= 4) {
      return "человека тусанут с тобой сегодня";
    } else return "человек тусанет с тобой сегодня";
  };
  return (
    <h3>
      <span className={"badge bg-" + (length > 0 ? "primary" : "danger")}>
        {length > 0
          ? `${length} ${renderPhrase(length)} `
          : "Никто с тобой не тусанёт"}
      </span>
    </h3>
  );
};

export default SearchStatus;
