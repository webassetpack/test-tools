
import {TestWAP} from '../src/TestWAP';

describe('TestWAP', () => {
    describe('hexdump', () => {
        it('formats properly', () => {
            let wap: TestWAP = new TestWAP(null, null);
            spyOn<any>(wap, '_getData').and.returnValue(new Uint8Array([
                0,
                1,
                17,
                123,
                123,
                123,
                123,
                124,
                0,
                1,
                17,
                123,
                123,
                123,
                123,
                124,
                0,
                1,
                17,
                123,
                123,
                123,
                123,
                124
            ]));

            expect(wap.hexdump('')).toBe('0100\t7b11\t7b7b\t7c7b\t0100\t7b11\t7b7b\t7c7b\n0100\t7b11\t7b7b\t7c7b');
        });
    });
});
