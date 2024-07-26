import { A_SDK_TYPES__DeepPartial, A_SDK_TYPES__ExtractProperties, A_SDK_TYPES__Required } from "@adaas/a-sdk-types"
import { A_ARC_TYPES__ACLMask, A_ARC_TYPES__Permission_APIEntity } from "../../app-interactions/index.types"





// =========================  PERMISSION CREATE REQUEST API TYPES ================================
export type A_ARC_SERVER_COMMANDS_TYPES__PermissionCreateRequest = A_SDK_TYPES__ExtractProperties<A_ARC_TYPES__Permission_APIEntity, [
    'name',
    'code',
]> & {
    Masks: A_SDK_TYPES__ExtractProperties<A_ARC_TYPES__ACLMask, ['mask']>[]
} & A_SDK_TYPES__DeepPartial<A_ARC_TYPES__Permission_APIEntity>

export type A_ARC_SERVER_COMMANDS_TYPES__PermissionCreateResponse = A_SDK_TYPES__Required<A_SDK_TYPES__DeepPartial<A_ARC_TYPES__Permission_APIEntity>, [
    'aseid',
    'code',
    'name',
    'icon',
    'description',
    'scope',
    'owner_aseid',
    'app_aseid',
    'Masks',
]>


// =========================  PERMISSION REMOVE REQUEST API TYPES ================================
export type A_ARC_SERVER_COMMANDS_TYPES__PermissionRemoveRequest = A_SDK_TYPES__ExtractProperties<A_ARC_TYPES__Permission_APIEntity, [
    'aseid'
]>

export type A_ARC_SERVER_COMMANDS_TYPES__PermissionRemoveResponse = {
    status: 'OK' | 'ERROR'
}



// =========================  PERMISSION MIGRATE REQUEST API TYPES ================================
export type A_ARC_SERVER_COMMANDS_TYPES__PermissionMigrateRequest = {
    permissions: Array<A_ARC_SERVER_COMMANDS_TYPES__PermissionCreateRequest>
}

export type A_ARC_SERVER_COMMANDS_TYPES__PermissionMigrateResponse = {
    status: 'OK' | 'ERROR'
}





