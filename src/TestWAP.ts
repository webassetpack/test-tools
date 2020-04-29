
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
            
            output += byte.toString(16);

            if (i > 0 && i % 17 === 0) {
                output += '\n';
                continue;
            }

            if (i > 0 && i % 3 === 0) {
                output += '\t';
            }
        }

        return output;
    }
}
