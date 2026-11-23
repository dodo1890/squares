const r = require("raylib");
const c = require("./collision");

const create = function (x, y, width, height, color, velocity) {
    return { dimensions: { x, y, width, height }, color, velocity };
};

const draw = function ({ dimensions, color }) {
    r.DrawRectangleRec(dimensions, color);
};

const move = function ({ dimensions, velocity }, dt) {
    dimensions.x += velocity.x * dt;
    dimensions.y += velocity.y * dt;
};

const bounceFromWall = function (square, screen) {
    if (c.horizontalEdgeDetection(square, screen.WIDTH))
        square.velocity.x = -square.velocity.x;

    if (c.verticalEdgeDetection(square, screen.HEIGHT))
        square.velocity.y = -square.velocity.y;
};

const update = function (square, screen, dt) {
    bounceFromWall(square, screen);
    move(square, dt);
};

const bounceHorizontally = function (v1, v2) {
    v1.x = -v1.x;
    v2.x = -v2.x;
};

const bounceVertically = function (v1, v2) {
    v1.y = -v1.y;
    v2.y = -v2.y;
};

const bounceEachOther = function (square1, square2) {
    const { dimensions: d1, velocity: v1 } = square1;
    const { dimensions: d2, velocity: v2 } = square2;

    const xdiff = Math.abs(d1.x - d2.x);
    const ydiff = Math.abs(d1.y - d2.y);

    if (c.checkCollisionRecs(d1, d2)) {
        if (xdiff > ydiff) {
            bounceHorizontally(v1, v2);
        } else if (ydiff > xdiff) {
            bounceVertically(v1, v2);
        } else {
            bounceHorizontally(v1, v2);
            bounceVertically(v1, v2);
        }
    }
};

module.exports = {
    create,
    draw,
    bounceEachOther,
    update,
};
