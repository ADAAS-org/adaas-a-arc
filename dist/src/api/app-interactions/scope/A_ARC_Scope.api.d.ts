import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { A_ARC_ContextClass } from "../../../global/A_ARC_Context.class";
import { A_ARC_APP_INTERACTIONS_TYPES__ScopeCreateRequest, A_ARC_APP_INTERACTIONS_TYPES__ScopeGetRequest, A_ARC_APP_INTERACTIONS_TYPES__ScopeGetResponse, A_ARC_APP_INTERACTIONS_TYPES__ScopeListRequest, A_ARC_APP_INTERACTIONS_TYPES__ScopeListResponse, A_ARC_APP_INTERACTIONS_TYPES__ScopeUpdateRequest, A_ARC_APP_INTERACTIONS_TYPES__ScopeUpdateResponse } from "./A_ARC_Scope.types";
/**
 * API Provider for Scopes
 */
export declare class A_ARC_APP_INTERACTIONS__ScopeAPI extends A_AUTH_AppInteractions_APIProvider<A_ARC_ContextClass> {
    protected get baseURL(): string;
    /**
     * Returns list of scopes based on User Access
     *
     * @param request
     * @param meta
     * @returns
     */
    list<M = any>(request: A_ARC_APP_INTERACTIONS_TYPES__ScopeListRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_ARC_APP_INTERACTIONS_TYPES__ScopeListResponse>;
    /**
     * API returns scope with nested entities such as profile, settings, etc.
     *
     * @param request
     * @param meta
     * @returns
     */
    load<M = any>(request: A_ARC_APP_INTERACTIONS_TYPES__ScopeGetRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_ARC_APP_INTERACTIONS_TYPES__ScopeGetResponse>;
    /**
     *  API creates scope with required dependencies
     *
     * @param request
     * @param meta
     * @returns
     */
    create<M = any>(request: A_ARC_APP_INTERACTIONS_TYPES__ScopeCreateRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<import("./A_ARC_Scope.types").A_ARC_TYPES__Scope_APIEntity>;
    /**
    * This function is used to create scope
    *
    * @param scope
    * @returns
    */
    update<M = any>(request: A_ARC_APP_INTERACTIONS_TYPES__ScopeUpdateRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_ARC_APP_INTERACTIONS_TYPES__ScopeUpdateResponse>;
}
