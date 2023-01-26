import React from "react";
import Qualities from "./Qualities";
import PropTypes from "prop-types";

const QualitiesList = ({ qualities }) => {
    return (
        <>
            {qualities.map((qualiti) => (
                <Qualities {...qualiti} key={qualiti._id} />
            ))}
        </>
    );
};

QualitiesList.propTypes = {
    qualities: PropTypes.array.isRequired
};

export default QualitiesList;
