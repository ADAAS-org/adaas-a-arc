import { A_SDK_TYPES__ExtractProperties } from "@adaas/a-sdk-types";
import { A_ARC_TYPES__ACL_APIEntity } from "../../app-interactions/index.types";
export type A_ARC_SERVER_DELEGATE_TYPES__ACLVerifyRequest = {
    /**
     * The access verification mask to compare with ACL rules in ARC
     *
     * e.g. NAMESPACE@SCOPE_ID:ENTITY_NAME:ENTITY_ID@VERSION\/AFFECT:OPERATION
     */
    mask: string;
};
export type A_ARC_SERVER_DELEGATE_TYPES__ACLVerifyResponse = {
    status: 'OK' | 'ERROR';
};
export type A_ARC_SERVER_DELEGATE_TYPES__ACLRemoveRequest = A_SDK_TYPES__ExtractProperties<A_ARC_TYPES__ACL_APIEntity, [
]>;
export type A_ARC_SERVER_DELEGATE_TYPES__ACLRemoveResponse = A_ARC_TYPES__ACL_APIEntity;
