
import {TestWAP} from '../src/TestWAP';

describe('TestWAP', () => {
    describe('hexdump', () => {
        it('formats properly', () => {
            let wap: TestWAP = new TestWAP(null, null);
            spyOn<any>(wap, '_getData').and.returnValue([
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
            ]);

            expect(wap.hexdump('')).toBe('0001\t117b\t7b7b\t7b7c\t0001\t117b\t7b7b\t7b7c\n0001\t117b\t7b7b\t7b7c');
        });
    });
});
