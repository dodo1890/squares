const r = require("raylib");
const s = require("./square");

const running = function () {
    return !r.WindowShouldClose();
};

const setup = function () {
    const WIDTH = 1024;
    const HEIGHT = 1024;
    const FPS = 60;

    const square = s.create(512, 512, 100, 100, r.RED);
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, "SQUARE");
    r.SetTargetFPS(FPS);

    const world = { screen: { WIDTH, HEIGHT, FPS }, square };
    return world;
};

const update = function (world) {};

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
