const r = require("raylib");
const s = require("./square");
const c = require("./collision");

const running = function () {
    return !r.WindowShouldClose();
};

const setup = function () {
    const WIDTH = 800;
    const HEIGHT = 500;
    const FPS = 120;

    const square1 = s.create(0, 0, 100, 100, r.RED, { x: 400, y: 400 });

    const square2 = s.create(400, 100, 100, 100, r.GREEN, {
        x: 250,
        y: 250,
    });

    const square3 = s.create(600, 200, 100, 100, r.BLUE, { x: 500, y: 500 });

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, "SQUARE1");
    r.SetTargetFPS(FPS);

    const world = { screen: { WIDTH, HEIGHT, FPS }, square1, square2, square3 };
    return world;
};

const update = function (world) {
    const dt = r.GetFrameTime();

    s.sqrCollision(world.square1, world.square2);
    // s.sqrCollision(world.square1, world.square3);
    // s.sqrCollision(world.square2, world.square3);

    s.update(world.square1, world.screen, dt);
    s.update(world.square2, world.screen, dt);
    // s.update(world.square3, world.screen, dt);
};

const draw = function (world) {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    s.draw(world.square1);
    s.draw(world.square2);
    // s.draw(world.square3);
    r.EndDrawing();
};

const teardown = function () {
    r.CloseWindow();
};

module.exports = { running, setup, update, draw, teardown };
