import { A_SDK_TYPES__Dictionary, A_SDK_TYPES__ExtractProperties } from "@adaas/a-sdk-types";
import { A_ARC_TYPES__ACL_APIEntity } from "../../app-interactions/index.types";
export type A_ARC_SERVER_COMMANDS_TYPES__ACLVerifyRequest = {
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
export type A_ARC_SERVER_COMMANDS_TYPES__ACLVerifyResponse = {
    valid: boolean;
} | A_SDK_TYPES__Dictionary<boolean>;
export type A_ARC_SERVER_COMMANDS_TYPES__ACLRemoveRequest = A_SDK_TYPES__ExtractProperties<A_ARC_TYPES__ACL_APIEntity, [
]>;
export type A_ARC_SERVER_COMMANDS_TYPES__ACLRemoveResponse = A_ARC_TYPES__ACL_APIEntity;
