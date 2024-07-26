import { A_SDK_TYPES__IDefaultPagination, A_SDK_TYPES__IRequestFilter, A_SDK_TYPES__IRequestPagination } from "@adaas/a-sdk-types";
import { A_SDK_TYPES__DeepPartial, A_SDK_TYPES__ExtractProperties, A_SDK_TYPES__Required } from "@adaas/a-sdk-types/dist/src/types/common.types";
import { A_ARC_TYPES__Scope_APIEntity } from "../scope/A_ARC_Scope.types";

export type A_ARC_TYPES__ACLMask = {
    /**
     * ACL Mask identifier in ADAAS System
     *  
     */
    id: number;
    /**
     * ACL Mask Regex  
     */
    mask: string;
    /**
     * The permission to which the ACL Mask is associated
     */
    permission_code: string;
}

/**
 * Permission entity in ADAAS System that is used to define the permissions that are associated with the resources
 * and the ACL Masks that are associated with the permissions 
 */
export type A_ARC_TYPES__Permission_APIEntity = {

    /**
     * Permission identifier in ADAAS System
     */
    aseid: string

    /**
     * Unique code for the permission
     */
    code: string;

    /**
     * Name of the permission that is displayed in the UI
     */
    name: string;


    /**
     * Icon of the permission that is displayed in the UI
     */
    icon: string;

    /**
     * Description of the permission that is displayed in the UI
     */
    description: string;

    /**
     * Scope of the permission
     */
    scope: string;

    /**
     * Owner of the permission in ADAAS System
     * Could be a user or a API Credential
     */
    owner_aseid: string;

    /**
     * Application identifier in ADAAS System to which the permission belongs
     */
    app_aseid: string;


    /**
     * The scope of the permission
     */
    Scope: A_ARC_TYPES__Scope_APIEntity


    /**
     * ACL Masks that are associated with the permission
     */
    Masks: A_ARC_TYPES__ACLMask[]
};





// =========================  PERMISSION LIST REQUEST API TYPES ================================
export type A_ARC_APP_INTERACTIONS_TYPES__PermissionListRequest = {
    pagination: A_SDK_TYPES__IRequestPagination,
    filter: A_SDK_TYPES__IRequestFilter
}

export type A_ARC_APP_INTERACTIONS_TYPES__PermissionListResponse = A_SDK_TYPES__IDefaultPagination<
    A_SDK_TYPES__Required<A_SDK_TYPES__DeepPartial<A_ARC_TYPES__Permission_APIEntity>, [
        'aseid',
        'code',
        'name',
        'icon',
        'description',
        'scope',
        'owner_aseid',
        'app_aseid',
    ]>>


// =========================  PERMISSION GET REQUEST API TYPES ================================
export type A_ARC_APP_INTERACTIONS_TYPES__PermissionGetRequest = {
    /**
     * Permission identifier in ADAAS System
     */
    permissionASEID: string,
}

export type A_ARC_APP_INTERACTIONS_TYPES__PermissionGetResponse = A_SDK_TYPES__IDefaultPagination<
    A_SDK_TYPES__Required<A_SDK_TYPES__DeepPartial<A_ARC_TYPES__Permission_APIEntity>, [
        'aseid',
        'code',
        'name',
        'icon',
        'description',
        'scope',
        'owner_aseid',
        'app_aseid',
        'Masks',
    ]>>


// =========================  PERMISSION CREATE REQUEST API TYPES ================================
export type A_ARC_APP_INTERACTIONS_TYPES__PermissionCreateRequest = A_SDK_TYPES__ExtractProperties<A_ARC_TYPES__Permission_APIEntity, [
    'name',
    'code',
]> & {
    Masks: A_SDK_TYPES__ExtractProperties<A_ARC_TYPES__ACLMask, ['mask']>[]
}


export type A_ARC_APP_INTERACTIONS_TYPES__PermissionCreateResponse = A_SDK_TYPES__Required<A_SDK_TYPES__DeepPartial<A_ARC_TYPES__Permission_APIEntity>, [
    'aseid',
    'code',
    'name',
    'icon',
    'description',
    'scope',
    'owner_aseid',
    'app_aseid',
]>


// =========================  PERMISSION DELETE REQUEST API TYPES ================================
export type A_ARC_APP_INTERACTIONS_TYPES__PermissionDeleteRequest = {
    aseid: string
}


export type A_ARC_APP_INTERACTIONS_TYPES__PermissionDeleteResponse = {
    status: 'OK' | 'ERROR'
}






