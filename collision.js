const horizontalDetection = function ({ dimensions }, leftEdge) {
    const leftSide = dimensions.x + dimensions.width;
    return leftSide >= leftEdge || dimensions.x <= 0;
};

const verticalDetection = function ({ dimensions }, bottomEdge) {
    const squareBottom = dimensions.y + dimensions.height;
    return squareBottom >= bottomEdge || dimensions.y <= 0;
};

module.exports = {
    horizontalDetection,
    verticalDetection,
};
