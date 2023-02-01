import { domainExistsPortal } from "./domain-exists-portal";
/**
 * Ensure a unique domain name by checking for and incrementing
 * a subdomain
 * @param {String} subdomain Subdomain to ensure is unique
 * @param {IHubRequestOptions} hubRequestOptions
 * @param {*} step Step number
 */
export function getUniqueDomainNamePortal(subdomain, hubRequestOptions, step = 0) {
    let combinedName = subdomain;
    if (step) {
        combinedName = subdomain + "-" + step;
    }
    // now we search for existing items w/ this...
    return domainExistsPortal(combinedName, hubRequestOptions).then((exists) => {
        if (exists) {
            const nextStep = step + 1;
            return getUniqueDomainNamePortal(subdomain, hubRequestOptions, nextStep);
        }
        else {
            return combinedName;
        }
    });
}
//# sourceMappingURL=get-unique-domain-name-portal.js.map