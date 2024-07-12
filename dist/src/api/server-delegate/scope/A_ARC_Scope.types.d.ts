import { A_SDK_TYPES__IDefaultPagination, A_SDK_TYPES__IRequestFilter, A_SDK_TYPES__IRequestPagination } from "@adaas/a-sdk-types";
import { A_ARC_TYPES__Scope_APIEntity } from "../../app-interactions/index.types";
export type A_ARC_SERVER_DELEGATE_TYPES__ScopeListRequest = {
    pagination: A_SDK_TYPES__IRequestPagination;
    filter: A_SDK_TYPES__IRequestFilter;
};
export type A_ARC_SERVER_DELEGATE_TYPES__ScopeListResponse = A_SDK_TYPES__IDefaultPagination<A_ARC_TYPES__Scope_APIEntity>;
export type A_ARC_SERVER_DELEGATE_TYPES__ScopeExistsRequest = {
    /**
     * Scope identifier in ADAAS System
     */
    scopeASEID: string;
};
export type A_ARC_SERVER_DELEGATE_TYPES__ScopeExistsResponse = {
    /**
    * Scope identifier in ADAAS System
    */
    aseid: string;
};
export type A_ARC_SERVER_DELEGATE_TYPES__ScopeCreateRequest = {};
export type A_ARC_SERVER_DELEGATE_TYPES__ScopeCreateResponse = A_ARC_TYPES__Scope_APIEntity;
export type A_ARC_SERVER_DELEGATE_TYPES__ScopeDeleteRequest = {
    /**
     * Scope identifier in ADAAS System
     */
    aseid: string;
};
export type A_ARC_SERVER_DELEGATE_TYPES__ScopeDeleteResponse = {
    status: 'OK' | 'ERROR';
};
