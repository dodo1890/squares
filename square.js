const r = require("raylib");

const create = function (x, y, width, height, color, velocity) {
    return { dimensions: { x, y, width, height }, color, velocity };
};

const draw = function ({ dimensions, color }) {
    r.DrawRectangleRec(dimensions, color);
};

const move = function ({ dimensions, velocity }) {
    dimensions.x += velocity.x;
    dimensions.y += velocity.y;
};

module.exports = {
    create,
    draw,
    move,
};
