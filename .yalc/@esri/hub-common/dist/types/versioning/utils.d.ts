import { IModel } from "../index";
import { IVersion } from './types';
export declare function applyVersion(model: IModel, version: IVersion, includeList: string[]): any;
export declare function getIncludeListFromItemType(model: IModel): string[];
