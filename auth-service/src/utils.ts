import * as crypto from 'crypto';

export const createSalt = () =>
    crypto.randomBytes(16)
        .toString('hex')
        .slice(0, 32);
export const hashPassword = (password: string, salt: string)  => {
    const hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
    hash.update(password);
    return hash.digest('hex');
}