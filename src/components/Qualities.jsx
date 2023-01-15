import React from "react";
import PropTypes from "prop-types";

const Qualities = ({ color, name, id }) => {
    return (
        <span className={"badge m-1 bg-" + color} key={id}>
            {name}
        </span>
    );
};
Qualities.propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string
};
export default Qualities;
