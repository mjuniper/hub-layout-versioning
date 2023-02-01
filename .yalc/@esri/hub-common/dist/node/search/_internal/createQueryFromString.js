"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createQueryFromString = void 0;
/**
 * @private
 * Construct a query from a string
 * @param value
 * @param predicateKey
 * @param targetEntity
 * @returns
 */
function createQueryFromString(value, predicateKey, targetEntity) {
    const predicate = {};
    predicate[predicateKey] = value;
    const qry = {
        targetEntity,
        filters: [
            {
                predicates: [predicate],
            },
        ],
    };
    return qry;
}
exports.createQueryFromString = createQueryFromString;
//# sourceMappingURL=createQueryFromString.js.map