/**
 * Iterates over an array and executes an async callback for each item
 * @param array
 * @param callback
 */
export async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}
//# sourceMappingURL=asyncForEach.js.map