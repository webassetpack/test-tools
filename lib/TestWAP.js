"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var runtime_1 = require("@wap/runtime");
var Crypto = require("crypto");
var TestWAP = /** @class */ (function (_super) {
    tslib_1.__extends(TestWAP, _super);
    function TestWAP() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TestWAP.prototype.md5 = function (path) {
        var data = this._getData(path);
        var hash = Crypto.createHash('md5');
        hash.update(data);
        return hash.digest('hex');
    };
    TestWAP.prototype.hexdump = function (path) {
        var data = this._getData(path);
        var output = '';
        for (var i = 0; i < data.length; i++) {
            var byte = data[i];
            var char = byte.toString(16);
            if (char.length === 1) {
                char = '0' + char;
            }
            if (i > 0 && i % 16 === 0) {
                output += '\n';
            }
            else if (i > 0 && i % 2 === 0) {
                output += '\t';
            }
            output += char;
        }
        return output;
    };
    return TestWAP;
}(runtime_1.WebAssetPack));
exports.TestWAP = TestWAP;
//# sourceMappingURL=TestWAP.js.map