"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var cli_1 = require("@wap/cli");
var WAPTestTools = /** @class */ (function () {
    function WAPTestTools() {
    }
    WAPTestTools.compile = function (definition) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var packer = new cli_1.Packer();
                        packer.pack(definition).then(function (stream) {
                            var data = null;
                            stream.on('data', function (chunk) {
                                if (data === null) {
                                    data = chunk;
                                }
                                else {
                                    data = Buffer.concat([data, chunk]);
                                }
                            });
                            stream.on('end', function () {
                                resolve(data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength));
                            });
                        })["catch"](reject);
                    })];
            });
        });
    };
    return WAPTestTools;
}());
exports.WAPTestTools = WAPTestTools;
//# sourceMappingURL=WAPTestTools.js.map