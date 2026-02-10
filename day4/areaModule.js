"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PI = void 0;
exports.areaCircle = areaCircle;
exports.areaRectangle = areaRectangle;
exports.areaCylinder = areaCylinder;
exports.PI = 3.1416;
function areaCircle(radius) {
    return exports.PI * radius * radius;
}
function areaRectangle(length, width) {
    return length * width;
}
function areaCylinder(radius, height) {
    return 2 * exports.PI * radius * (radius + height);
}
//# sourceMappingURL=areaModule.js.map