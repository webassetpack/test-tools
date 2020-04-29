import { WebAssetPackFactory } from '@wap/runtime';
import { Manifest } from '@wap/core';
import { TestWAP } from './TestWAP';
export declare class WAPTestFactory extends WebAssetPackFactory {
    protected _create(manifest: Manifest, buffer: ArrayBuffer): TestWAP;
}
