import { A_SDK_TYPES__ExtractProperties, A_SDK_TYPES__Dictionary } from "@adaas/a-sdk-types";
import { A_ARC_TYPES__Resource_APIEntity } from "../../app-interactions/index.types";
export type A_ARC_SERVER_DELEGATE_TYPES__ResourceListRequest = {
    /**
     * The access verification mask to compare with ACL rules in ARC
     *
     * e.g. NAMESPACE@SCOPE_ID:ENTITY_NAME:ENTITY_ID@VERSION\/AFFECT:OPERATION
     */
    mask: string;
} | {
    /**
     *  An object that contains the values of the mask to be used in the verification process
     */
    masks: A_SDK_TYPES__Dictionary<string>;
};
/**
 * returns the FULL list of available resources
 */
export type A_ARC_SERVER_DELEGATE_TYPES__ResourceListResponse = Array<string> | A_SDK_TYPES__Dictionary<Array<string>>;
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
