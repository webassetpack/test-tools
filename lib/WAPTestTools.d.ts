import { IDictionary } from '@totalpave/interfaces';
export declare class WAPTestTools {
    private constructor();
    static compile(definition: IDictionary<string>): Promise<ArrayBuffer>;
}
