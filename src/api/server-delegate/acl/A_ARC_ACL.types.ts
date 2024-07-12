import { A_SDK_TYPES__ExtractProperties } from "@adaas/a-sdk-types"
import { A_ARC_TYPES__ACL_APIEntity } from "../../app-interactions/index.types"

// =========================  ACCESS Verify REQUEST API TYPES ================================
export type A_ARC_SERVER_DELEGATE_TYPES__ACLVerifyRequest = {

    /**
     * The access verification query to be performed
     * 
     * e.g. NAMESPACE@SCOPE_ID:ENTITY_NAME:ENTITY_ID@VERSION\/AFFECT:OPERATION
     */
    query: string

    /**
     * The resource ASEID to be accessed
     */
    resource: string,

    /**
     * The list of resources ASEIDs to be accessed
     */
    resources: string[],

    /**
     * The operation to be performed on the resource
     */
    operation: string,

    /**
     * The list of operations to be performed on the resources
     */
    operations: string[],
}

export type A_ARC_SERVER_DELEGATE_TYPES__ACLVerifyResponse = {
    status: 'OK' | 'ERROR',
}





// =========================  ACL RULE REMOVE REQUEST API TYPES ================================
export type A_ARC_SERVER_DELEGATE_TYPES__ACLRemoveRequest = A_SDK_TYPES__ExtractProperties<A_ARC_TYPES__ACL_APIEntity, [

]>

export type A_ARC_SERVER_DELEGATE_TYPES__ACLRemoveResponse = A_ARC_TYPES__ACL_APIEntity



