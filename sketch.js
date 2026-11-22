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

    const square = s.create(500, 200, 100, 100, r.RED, { x: 2, y: 2 });

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, "SQUARE");
    r.SetTargetFPS(FPS);

    const world = { screen: { WIDTH, HEIGHT, FPS }, square };
    return world;
};

const update = function (world) {
    if (c.horizontalDetection(world.square, world.screen.WIDTH))
        world.square.velocity.x = -world.square.velocity.x;
    console.log(world.square.dimensions.x);

    s.move(world.square);
    // console.log(world.square.dimensions.x);
};

const draw = function (world) {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    s.draw(world.square);
    r.EndDrawing();
};

const teardown = function () {
    r.CloseWindow();
};

module.exports = { running, setup, update, draw, teardown };
