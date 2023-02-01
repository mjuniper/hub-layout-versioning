import { IUserRequestOptions } from "@esri/arcgis-rest-auth";
import { IBatch } from "../../types";
/**
 * Takes a file, file owner, and file AGO item id along with a size limit
 * Then chunks the file up based on that file limit.
 * The chunks are added to addItemPart calls and added to a queue array.
 *
 * @export
 * @param {*} file File to be uploaded
 * @param {string} owner file owner
 * @param {string} id file ID from AGO
 * @param {number} sizeLimit How large should the chunks be?
 * @param {IUserRequestOptions} requestOptions
 * @return {*}  {IBatch}
 */
export declare function _prepareUploadRequests(file: any, owner: string, id: string, sizeLimit: number, requestOptions: IUserRequestOptions): IBatch;
