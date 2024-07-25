import isEncryptedStorage from 'react-native-encrypted-storage';

export const ENCRYPTED_STORAGE_PREFIX = '@magellanApp';

class EncryptedStorage {
    /**
     * Sets value for key and calls callback on completion, along with an Error if there is any
     */
    public setItem(key: string, value: string): Promise<void> {
        return isEncryptedStorage.setItem(this.getStorageKey(key), value);
    }

    /**
     * Fetches key, along with an Error if there is any.
     */
    public getItem(key: string): Promise<string | null> {
        return isEncryptedStorage.getItem(this.getStorageKey(key));
    }

    /**
     * Deletes data from the Encrypted Store.
     * @param {string} key - A string that is associated to a value.
     */
    public removeItem(key: string): Promise<void> {
        return isEncryptedStorage.removeItem(this.getStorageKey(key));
    }

    /**
     * Clears all data from disk Encrypted Store.
     */
    public clear(): Promise<void> {
        return isEncryptedStorage.clear();
    }

    /**
     * Clears all data from disk Encrypted Store.
     */
    private getStorageKey(key: string): string {
        return `${ENCRYPTED_STORAGE_PREFIX}_${key}`;
    }

    /**
     * This function async stores key-value pairs in encrypted storage
     * and returns an array of void promises.
     * @param [string, string][] keyValuePairs
     * */
    public multiSet(
        keyValuePairs: [string, string][],
    ): Promise<Awaited<void>[]> {
        const promises = keyValuePairs.map(async subarray => {
            const key = subarray[0];
            const value = subarray[1];

            await isEncryptedStorage.setItem(this.getStorageKey(key), value);
        });

        return Promise.all(promises);
    }

    /**
     * This function async removes multiple keys from encrypted storage
     * and returns an array of void promises.
     * @param string[] keys
     * */
    public multiRemove(keys: string[]): Promise<Awaited<void>[]> {
        const promises = keys.map(async key => {
            await isEncryptedStorage.removeItem(this.getStorageKey(key));
        });

        return Promise.all(promises);
    }
}

const EncryptedStorageService = new EncryptedStorage();

export default EncryptedStorageService;
