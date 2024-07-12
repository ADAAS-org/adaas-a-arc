import { A_SDK_TYPES__IDefaultPagination, A_SDK_TYPES__IRequestFilter, A_SDK_TYPES__IRequestPagination } from "@adaas/a-sdk-types";
import { A_SDK_TYPES__DeepPartial, A_SDK_TYPES__ExtractProperties, A_SDK_TYPES__Required } from "@adaas/a-sdk-types/dist/src/types/common.types";
import { A_ARC_TYPES__Scope_APIEntity } from "../scope/A_ARC_Scope.types";
/**
 * Resource is the entity that corresponds to particular entity in the Application environment but should be controlled by ACL
 * or permission control to access it from ADAAS Ecosystem
 */
export type A_ARC_TYPES__Resource_APIEntity = {
    /**
     * The generated Resource ASEID
     */
    aseid: string;
    /**
     * The scope identity ASEID Format
     */
    scope: string;
    /**
     * Namespace of the application
     */
    namespace: string;
    /**
     * The entity name in terms of Application
     */
    entity: string;
    /**
     * Application ASEID Identifier
     */
    app_aseid: string;
    /**
     * Owner of the resource ASEID
     */
    owner_aseid: string;
    /**
     * Nested relation of scopes
     */
    Scope?: A_ARC_TYPES__Scope_APIEntity;
};
export type A_ARC_APP_INTERACTIONS_TYPES__ResourceListRequest = {
    pagination: A_SDK_TYPES__IRequestPagination;
    filter: A_SDK_TYPES__IRequestFilter;
};
export type A_ARC_APP_INTERACTIONS_TYPES__ResourceListResponse = A_SDK_TYPES__IDefaultPagination<A_ARC_TYPES__Resource_APIEntity>;
export type A_ARC_APP_INTERACTIONS_TYPES__ResourceGetRequest = {
    /**
     * Resource identifier in ADAAS System
     */
    resourceASEID: string;
};
export type A_ARC_APP_INTERACTIONS_TYPES__ResourceGetResponse = A_SDK_TYPES__IDefaultPagination<A_ARC_TYPES__Resource_APIEntity>;
export type A_ARC_APP_INTERACTIONS_TYPES__ResourceCreateRequest = A_SDK_TYPES__ExtractProperties<A_ARC_TYPES__Resource_APIEntity, [
]>;
export type A_ARC_APP_INTERACTIONS_TYPES__ResourceCreateResponse = A_ARC_TYPES__Resource_APIEntity;
export type A_ARC_APP_INTERACTIONS_TYPES__ResourceUpdateRequest = A_SDK_TYPES__Required<A_SDK_TYPES__DeepPartial<A_ARC_TYPES__Resource_APIEntity>, [
    'aseid'
]>;
export type A_ARC_APP_INTERACTIONS_TYPES__ResourceUpdateResponse = A_SDK_TYPES__IDefaultPagination<A_ARC_TYPES__Resource_APIEntity>;
