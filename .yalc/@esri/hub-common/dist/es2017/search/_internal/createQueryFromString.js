/**
 * @private
 * Construct a query from a string
 * @param value
 * @param predicateKey
 * @param targetEntity
 * @returns
 */
export function createQueryFromString(value, predicateKey, targetEntity) {
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
//# sourceMappingURL=createQueryFromString.js.map