import { A_SDK_TYPES__IDefaultPagination, A_SDK_TYPES__IRequestFilter, A_SDK_TYPES__IRequestPagination } from "@adaas/a-sdk-types";
import { A_SDK_TYPES__DeepPartial, A_SDK_TYPES__ExtractProperties, A_SDK_TYPES__Required } from "@adaas/a-sdk-types/dist/src/types/common.types";

/**
 * 
 */
export type A_ARC_TYPES__Scope_APIEntity = {
    /**
     * The generated Scope ASEID 
     */
    aseid: string;
    /**
     * Owner of the scope ASEID
     */
    owner_aseid: string;
};





// =========================  RESOURCE LIST REQUEST API TYPES ================================
export type A_ARC_APP_INTERACTIONS_TYPES__ScopeListRequest = {
    pagination: A_SDK_TYPES__IRequestPagination,
    filter: A_SDK_TYPES__IRequestFilter
}

export type A_ARC_APP_INTERACTIONS_TYPES__ScopeListResponse = A_SDK_TYPES__IDefaultPagination<A_ARC_TYPES__Scope_APIEntity>


// =========================  RESOURCE GET REQUEST API TYPES ================================
export type A_ARC_APP_INTERACTIONS_TYPES__ScopeGetRequest = {
    /**
     * Scope identifier in ADAAS System
     */
    scopeASEID: string,
}

export type A_ARC_APP_INTERACTIONS_TYPES__ScopeGetResponse = A_SDK_TYPES__IDefaultPagination<A_ARC_TYPES__Scope_APIEntity>


// =========================  RESOURCE CREATE REQUEST API TYPES ================================
export type A_ARC_APP_INTERACTIONS_TYPES__ScopeCreateRequest = A_SDK_TYPES__ExtractProperties<A_ARC_TYPES__Scope_APIEntity, [

]>

export type A_ARC_APP_INTERACTIONS_TYPES__ScopeCreateResponse = A_ARC_TYPES__Scope_APIEntity



// =========================  RESOURCE UPDATE REQUEST API TYPES ================================
export type A_ARC_APP_INTERACTIONS_TYPES__ScopeUpdateRequest = A_SDK_TYPES__Required<
    A_SDK_TYPES__DeepPartial<A_ARC_TYPES__Scope_APIEntity>, [
        'aseid'
    ]>

export type A_ARC_APP_INTERACTIONS_TYPES__ScopeUpdateResponse = A_SDK_TYPES__IDefaultPagination<A_ARC_TYPES__Scope_APIEntity>




