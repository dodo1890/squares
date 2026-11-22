const horizontalDetection = function ({ dimensions }, max) {
    const leftSide = dimensions.x + dimensions.width;
    return leftSide >= max || dimensions.x <= 0;
};

const rightSideDetection = function ({ dimensions }, max) {
    return dimensions.x <= 0;
};

module.exports = {
    horizontalDetection,
    rightSideDetection,
};
