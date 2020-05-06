import { IDictionary } from '@totalpave/interfaces';
import { IDefinition } from '@wap/cli';
export declare class WAPTestTools {
    private constructor();
    static compile(definition: IDictionary<IDefinition>): Promise<ArrayBuffer>;
}
