"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var runtime_1 = require("@wap/runtime");
var TestWAP_1 = require("./TestWAP");
var WAPTestFactory = /** @class */ (function (_super) {
    tslib_1.__extends(WAPTestFactory, _super);
    function WAPTestFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WAPTestFactory.prototype._create = function (manifest, buffer) {
        return new TestWAP_1.TestWAP(manifest, buffer);
    };
    return WAPTestFactory;
}(runtime_1.WebAssetPackFactory));
exports.WAPTestFactory = WAPTestFactory;
//# sourceMappingURL=WAPTestFactory.js.map