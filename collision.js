const horizontalEdgeDetection = function ({ dimensions }, leftEdge) {
    const leftSide = dimensions.x + dimensions.width;
    return leftSide > leftEdge || dimensions.x < 0;
};

const verticalEdgeDetection = function ({ dimensions }, bottomEdge) {
    const squareBottom = dimensions.y + dimensions.height;
    return squareBottom > bottomEdge || dimensions.y < 0;
};

const collisionType = function (rec1, rec2) {};

const checkCollisionRecs = function (rec1, rec2) {
    const { x: x1, y: y1, width: width1, height: height1 } = rec1;
    const { x: x2, y: y2, width: width2, height: height2 } = rec2;

    const x1end = x1 + width1;
    const x2end = x2 + width2;
    const y1end = y1 + height1;
    const y2end = y2 + height2;

    const isCollidingHorizontally = x2 <= x1end && x2end >= x1;

    const isCollidingVertically = y2 <= y1end && y2end >= y1;

    const result = isCollidingHorizontally && isCollidingVertically;

    return { result };
};

module.exports = {
    horizontalEdgeDetection,
    verticalEdgeDetection,
    recToRecDetH,
    recToRecDetV,
    checkCollisionRecs,
};
