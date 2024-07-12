import { A_SDK_TYPES__IDefaultPagination, A_SDK_TYPES__IRequestFilter, A_SDK_TYPES__IRequestPagination, A_SDK_TYPES__ExtractProperties } from "@adaas/a-sdk-types";
import { A_ARC_TYPES__Resource_APIEntity } from "../../app-interactions/index.types";
export type A_ARC_SERVER_DELEGATE_TYPES__ResourceListRequest = {
    pagination: A_SDK_TYPES__IRequestPagination;
    filter: A_SDK_TYPES__IRequestFilter;
};
export type A_ARC_SERVER_DELEGATE_TYPES__ResourceListResponse = A_SDK_TYPES__IDefaultPagination<A_ARC_TYPES__Resource_APIEntity>;
export type A_ARC_SERVER_DELEGATE_TYPES__ResourceExistsRequest = {
    /**
     * Resource identifier in ADAAS System
     */
    resourceASEID: string;
};
export type A_ARC_SERVER_DELEGATE_TYPES__ResourceExistsResponse = {
    /**
    * Resource identifier in ADAAS System
    */
    aseid: string;
};
export type A_ARC_SERVER_DELEGATE_TYPES__ResourceCreateRequest = (A_SDK_TYPES__ExtractProperties<A_ARC_TYPES__Resource_APIEntity, [
    'entity'
]> & {
    id: string;
}) | {
    aseid: string;
};
export type A_ARC_SERVER_DELEGATE_TYPES__ResourceCreateResponse = A_ARC_TYPES__Resource_APIEntity;
export type A_ARC_SERVER_DELEGATE_TYPES__ResourceDeleteRequest = {
    /**
     * Resource identifier in ADAAS System
     */
    aseid: string;
};
export type A_ARC_SERVER_DELEGATE_TYPES__ResourceDeleteResponse = {
    status: 'OK' | 'ERROR';
};
