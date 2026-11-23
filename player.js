const r = require("raylib");

const create = function (x, y, width, height, color, velocity) {
    return { dimensions: { x, y, width, height }, color, velocity };
};

const draw = function ({ dimensions, color }) {
    r.DrawRectangleRec(dimensions, color);
};

const update = function ({ dimensions, velocity }) {};

module.exports = {
    create,
    draw,
};
