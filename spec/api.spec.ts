
import * as api from '../src/api';
import {WAPPlugin} from '../src/WAPPlugin';
import {
    BYTE_POS_VERSION_MAJOR,
    BYTE_POS_VERSION_MINOR,
    BYTE_POS_VERSION_PATCH,
    BYTE_POS_MANIFEST_LENGTH,
    BYTE_HEADER_SIZE
} from '../src/constants';

describe('Public API', () => {
    it('WAPPPlugin', () => {
        expect(api.WAPPlugin).toBe(WAPPlugin);
    });

    describe('constants', () => {
        it('BYTE_POS_VERSION_MAJOR', () => {
            expect(api.BYTE_POS_VERSION_MAJOR).toBe(BYTE_POS_VERSION_MAJOR);
        });
        it('BYTE_POS_VERSION_MINOR', () => {
            expect(api.BYTE_POS_VERSION_MINOR).toBe(BYTE_POS_VERSION_MINOR);
        });
        it('BYTE_POS_VERSION_PATCH', () => {
            expect(api.BYTE_POS_VERSION_PATCH).toBe(BYTE_POS_VERSION_PATCH);
        });
        it('BYTE_POS_MANIFEST_LENGTH', () => {
            expect(api.BYTE_POS_MANIFEST_LENGTH).toBe(BYTE_POS_MANIFEST_LENGTH);
        });
        it('BYTE_HEADER_SIZE', () => {
            expect(api.BYTE_HEADER_SIZE).toBe(BYTE_HEADER_SIZE);
        });
    });

    describe('Types/Interfaces', () => {
        // These tests would fail on typescript compile
        // if they were missing from the public api
        
        it('Manifest', () => {
            let ignore: api.Manifest = null;
            expect(ignore).toBe(null);
        });
    
        it('IManifestItem', () => {
            let ignore: api.IManifestItem = null;
            expect(ignore).toBe(null);
        });
    });
});
