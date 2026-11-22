const r = require("raylib");
const s = require("./square");
const c = require("./collision");

const running = function () {
    return !r.WindowShouldClose();
};

const setup = function () {
    const WIDTH = 1024;
    const HEIGHT = 1024;
    const FPS = 60;

    const square1 = s.create(500, 200, 100, 100, r.RED, { x: 2, y: 2 });

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, "SQUARE1");
    r.SetTargetFPS(FPS);

    const world = { screen: { WIDTH, HEIGHT, FPS }, square1 };
    return world;
};

const update = function (world) {
    if (c.horizontalDetection(world.square1, world.screen.WIDTH))
        world.square1.velocity.x = -world.square1.velocity.x;

    if (c.verticalDetection(world.square1, world.screen.HEIGHT))
        world.square1.velocity.y = -world.square1.velocity.y;

    s.move(world.square1);
};

const draw = function (world) {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    s.draw(world.square1);
    r.EndDrawing();
};

const teardown = function () {
    r.CloseWindow();
};

module.exports = { running, setup, update, draw, teardown };
