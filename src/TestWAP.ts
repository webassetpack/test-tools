
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
        let output: string = '';

        for (let i: number = 0; i < data.length; i++) {
            let byte: number = data[i];
            
            let char: string = byte.toString(16);
            if (char.length === 1) {
                char = '0' + char;
            }

            if (i > 0 && i % 16 === 0) {
                output += '\n';
            }
            else if (i > 0 && i % 2 === 0) {
                output += '\t';
            }

            output += char
        }

        return output;
    }
}
