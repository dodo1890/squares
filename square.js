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

const ChangeDirectionWRTScreen = function (square, screen) {
    if (c.horizontalEdgeDetection(square, screen.WIDTH))
        square.velocity.x = -square.velocity.x;

    if (c.verticalEdgeDetection(square, screen.HEIGHT))
        square.velocity.y = -square.velocity.y;
};

const update = function (square, screen, dt) {
    ChangeDirectionWRTScreen(square, screen);
    move(square, dt);
};

const sqrCollision = function (square1, square2) {
    const { dimensions: d1, velocity: v1 } = square1;
    const { dimensions: d2, velocity: v2 } = square2;

    if (c.checkCollisionRecs(d1, d2)) {
        v1.x = -v1.x;
        v2.x = -v2.x;
    }
};

module.exports = {
    create,
    draw,
    sqrCollision,
    update,
};
