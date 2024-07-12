import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { A_ARC_ContextClass } from "../../../global/A_ARC_Context.class";
import { A_ARC_APP_INTERACTIONS_TYPES__ResourceCreateRequest, A_ARC_APP_INTERACTIONS_TYPES__ResourceGetRequest, A_ARC_APP_INTERACTIONS_TYPES__ResourceGetResponse, A_ARC_APP_INTERACTIONS_TYPES__ResourceListRequest, A_ARC_APP_INTERACTIONS_TYPES__ResourceListResponse, A_ARC_APP_INTERACTIONS_TYPES__ResourceUpdateRequest, A_ARC_APP_INTERACTIONS_TYPES__ResourceUpdateResponse } from "./A_ARC_Resource.types";
/**
 * API Provider for Resources
 */
export declare class A_ARC_APP_INTERACTIONS__ResourceAPI extends A_AUTH_AppInteractions_APIProvider<A_ARC_ContextClass> {
    protected baseURL: string;
    /**
     * Returns list of resources based on User Access
     *
     * @param request
     * @param meta
     * @returns
     */
    list<M = any>(request: A_ARC_APP_INTERACTIONS_TYPES__ResourceListRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_ARC_APP_INTERACTIONS_TYPES__ResourceListResponse>;
    /**
     * API returns resource with nested entities such as profile, settings, etc.
     *
     * @param request
     * @param meta
     * @returns
     */
    load<M = any>(request: A_ARC_APP_INTERACTIONS_TYPES__ResourceGetRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_ARC_APP_INTERACTIONS_TYPES__ResourceGetResponse>;
    /**
     *  API creates resource with required dependencies
     *
     * @param request
     * @param meta
     * @returns
     */
    create<M = any>(request: A_ARC_APP_INTERACTIONS_TYPES__ResourceCreateRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<import("./A_ARC_Resource.types").A_ARC_TYPES__Resource_APIEntity>;
    /**
    * This function is used to create resource
    *
    * @param resource
    * @returns
    */
    update<M = any>(request: A_ARC_APP_INTERACTIONS_TYPES__ResourceUpdateRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_ARC_APP_INTERACTIONS_TYPES__ResourceUpdateResponse>;
}
