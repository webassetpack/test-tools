
import {WebAssetPack} from '@wap/runtime';
import * as Crypto from 'crypto';

export class TestWAP extends WebAssetPack {
    public md5(path: string): string {
        let data: Uint8Array = this._getData(path);
        let hash: Crypto.Hash = Crypto.createHash('md5');
        hash.update(data);
        return hash.digest('hex');
    }

    public hexdump(path: string): string {
        let data: Uint8Array = this._getData(path);
        let view: DataView = new DataView(data.buffer);
        let output: string = '';
        for (let i: number = 0; i <= view.byteLength - 2; i += 2) {
            let byte: number = view.getUint16(i, true);
            let char: string = byte.toString(16);

            while (char.length < 4) {
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
    }
}
