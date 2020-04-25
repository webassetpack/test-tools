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
                            stream.on('close', function () {
                                var ab = new ArrayBuffer(data.byteLength);
                                try {
                                    var dv_1 = new DataView(ab);
                                    data.forEach(function (byte, index) {
                                        dv_1.setInt8(index, byte);
                                    });
                                }
                                catch (ex) {
                                    reject(ex);
                                    return;
                                }
                                resolve(ab);
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