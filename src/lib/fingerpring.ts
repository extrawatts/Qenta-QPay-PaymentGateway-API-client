import { createHmac } from 'crypto'
import { entryTransactionResult } from '../client/tranable.type'
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export class Fingerprint {
    /**
     * @var string
     */
    public static readonly HASH_ALGORITHM_MD5 = 'md5';

    /**
     * 
     * @var string
     */
    public static readonly HASH_ALGORITHM_SHA512 = 'sha512';

    /**
     * 
     * @var string
     */
    public static readonly HASH_ALGORITHM_HMAC_SHA512 = 'hmac_sha512';

    /**
     * Hash algorithm
     *
     * @staticvar string
     * @internal
     */
    protected static _HASH_ALGORITHM = Fingerprint.HASH_ALGORITHM_SHA512;


    /**
     * Hash algorithm
     *
     * @staticvar boolean
     * @internal
     */
    protected static readonly _STRIP_SLASHES = false;

    /**
    * use stripslashes for fingerprint generate methods
    *
    * @param string string
    */
    public static stripSlashes(string: string): string {
        return string.replace(/\\(.)/mg, "1");
    }
    /**
     * Sets the hash algorithm
     *
     * @param string hashAlgorithm
     */
    public static setHashAlgorithm(sHashAlgorithm: string) {

        this._HASH_ALGORITHM = sHashAlgorithm;
    }

    /**
     * generates an Fingerprint-string
     *
     * @param <T> data
     */
    public static generate<T>(data: T): entryTransactionResult {
        let secret = Object(data)["secret"];
        if (secret.length === 0 && typeof secret === 'undefined') {
            throw new Error("Secret key is empty");
        }
        const hash = createHmac(this.HASH_ALGORITHM_SHA512, secret);

        // hash the order field data
        Object.entries(data).forEach(orderField => {
            if (typeof orderField[1] !== 'undefined') {
                hash.update(orderField[1].toString());
            }
        });

        Object.assign(Object(data), {requestFingerprintOrder: ''});

        // Skip the requestFingerprint parameter. it is not part of the fingerprint
        const skipFields = ['requestFingerprint'];
        const requestFingerprintOrder = Object.keys(data).map(
            key => (skipFields.indexOf(key) === -1) ? key as string : ''
        ).join(",") as string;

        hash.update(requestFingerprintOrder);

        const fingerPrintData = {
            requestFingerprintOrder: requestFingerprintOrder,
            requestFingerprint: hash.digest('hex')
        }

        const entryTransactionResult = {
            ...data,
            ...fingerPrintData

        } as unknown as entryTransactionResult;
        console.log(entryTransactionResult);
        return entryTransactionResult;
    }
}
