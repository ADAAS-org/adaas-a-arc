import { A_SDK_TYPES__ExtractProperties } from "@adaas/a-sdk-types/dist/src/types/common.types";
import { A_SDK_TYPES__IDefaultPagination, A_SDK_TYPES__IRequestFilter, A_SDK_TYPES__IRequestPagination } from "@adaas/a-sdk-types";
/**
 * ACL or ACL rule is an entity that describes an access type to particular resource or group of resources.
 * To provide a proper access it's mandatory to describe how access should be done.
 */
export type A_ARC_TYPES__ACL_APIEntity = {
    /**
     * The Regexp string that matches the rule
     */
    mask: string;
    /**
     * The namespace - basically the application Name
     */
    namespace: string;
    /**
     * Identity of the scope
     */
    scope: string;
    /**
     * Effect: Allow or Deny
     */
    effect: 'Allow' | 'Deny';
    /**
     * The specific Action
     */
    action: string;
    /**
     * The ASEID of the role for what the rule should be applied
     */
    role_aseid: string;
    /**
     * The ASEID of entity that created the rule: api credentials or user
     */
    owner_aseid: string;
};
export type A_ARC_APP_INTERACTIONS_TYPES__ACLListRequest = {
    pagination: A_SDK_TYPES__IRequestPagination;
    filter: A_SDK_TYPES__IRequestFilter;
};
export type A_ARC_APP_INTERACTIONS_TYPES__ACLListResponse = A_SDK_TYPES__IDefaultPagination<A_ARC_TYPES__ACL_APIEntity>;
export type A_ARC_APP_INTERACTIONS_TYPES__ACLCreateRequest = A_SDK_TYPES__ExtractProperties<A_ARC_TYPES__ACL_APIEntity, [
]>;
export type A_ARC_APP_INTERACTIONS_TYPES__ACLCreateResponse = A_ARC_TYPES__ACL_APIEntity;
export type A_ARC_APP_INTERACTIONS_TYPES__ACLRemoveRequest = A_SDK_TYPES__ExtractProperties<A_ARC_TYPES__ACL_APIEntity, [
]>;
export type A_ARC_APP_INTERACTIONS_TYPES__ACLRemoveResponse = A_ARC_TYPES__ACL_APIEntity;
