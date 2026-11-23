const difference = function (x, y) {
    const diff = x - y;
    return diff < 0 ? -diff : diff;
};
const horizontalEdgeDetection = function (rec1, rec2, targetDiff) {
    const x1end = rec1.x + rec1.width;
    const x2end = rec2.x + rec2.width;
    const diff1 = x1end - rec2.x;
    const diff2 = rec1.x - x2end;

    if (Math.abs(diff1) < targetDiff) {
        rec1.x -= diff1 - 10;
        // console.log(rec1);

        return rec1;
    }
    if (Math.abs(diff2) < targetDiff) {
        // console.log(Math.abs(diff2) < targetDiff);

        rec1.x -= diff2 + 10;
        // console.log(rec1);

        return rec1;
    }
};

const rec1 = {
    x: 35,
    y: 12,
    width: 10,
    height: 10,
};

const rec2 = {
    x: 22,
    y: 12,
    width: 10,
    height: 10,
};

console.log(horizontalEdgeDetection(rec1, rec2, 5));
