import { IDictionary } from '@totalpave/interfaces';
import {Stream} from 'stream';
import {Packer, IDefinition} from '@wap/cli';

export class WAPTestTools {
    private constructor() {}

    public static async compile(definition: IDictionary<IDefinition>): Promise<ArrayBuffer> {
        return new Promise<ArrayBuffer>((resolve, reject) => {
            let packer: Packer = new Packer();
            packer.pack(definition).then((stream: Stream) => {
                let data: Buffer = null;
                stream.on('data', (chunk: Buffer) => {
                    if (data === null) {
                        data = chunk;
                    }
                    else {
                        data = Buffer.concat([ data, chunk ]);
                    }
                });
                stream.on('end', () => {
                    resolve(data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength));
                });
            }).catch(reject);
        });
    }
}
