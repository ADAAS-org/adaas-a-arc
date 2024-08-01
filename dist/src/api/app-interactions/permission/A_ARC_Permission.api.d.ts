import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { A_ARC_ContextClass } from "../../../global/A_ARC_Context.class";
import { A_ARC_APP_INTERACTIONS_TYPES__PermissionCreateRequest, A_ARC_APP_INTERACTIONS_TYPES__PermissionCreateResponse, A_ARC_APP_INTERACTIONS_TYPES__PermissionDeleteRequest, A_ARC_APP_INTERACTIONS_TYPES__PermissionDeleteResponse, A_ARC_APP_INTERACTIONS_TYPES__PermissionGetRequest, A_ARC_APP_INTERACTIONS_TYPES__PermissionGetResponse, A_ARC_APP_INTERACTIONS_TYPES__PermissionListRequest, A_ARC_APP_INTERACTIONS_TYPES__PermissionListResponse } from "./A_ARC_Permission.types";
/**
 * API Provider for Permissions
 */
export declare class A_ARC_APP_INTERACTIONS__PermissionAPI extends A_AUTH_AppInteractions_APIProvider<A_ARC_ContextClass> {
    protected get baseURL(): string;
    /**
     * Returns list of permissions based on User Access
     *
     * @param request
     * @param meta
     * @returns
     */
    list<M = any>(request: A_ARC_APP_INTERACTIONS_TYPES__PermissionListRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_ARC_APP_INTERACTIONS_TYPES__PermissionListResponse>;
    /**
     * API returns permission with nested entities such as profile, settings, etc.
     *
     * @param request
     * @param meta
     * @returns
     */
    load<M = any>(request: A_ARC_APP_INTERACTIONS_TYPES__PermissionGetRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_ARC_APP_INTERACTIONS_TYPES__PermissionGetResponse>;
    /**
     *  API creates permission with required dependencies
     *
     * @param request
     * @param meta
     * @returns
     */
    create<M = any>(request: A_ARC_APP_INTERACTIONS_TYPES__PermissionCreateRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_ARC_APP_INTERACTIONS_TYPES__PermissionCreateResponse>;
    remove<M = any>(request: A_ARC_APP_INTERACTIONS_TYPES__PermissionDeleteRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_ARC_APP_INTERACTIONS_TYPES__PermissionDeleteResponse>;
}
