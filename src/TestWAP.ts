
import {WebAssetPack} from '@wap/runtime';
import * as Crypto from 'crypto';

export class TestWAP extends WebAssetPack {
    public md5(path: string): string {
        let data: Uint8Array = this._getData(path);
        let hash: Crypto.Hash = Crypto.createHash('md5');
        hash.update(data);
        return hash.digest('hex');
    }
}
