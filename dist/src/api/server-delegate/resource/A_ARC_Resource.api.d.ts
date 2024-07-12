import { A_AUTH_ServerCommands_APIProvider } from "@adaas/a-auth";
import { A_ARC_ContextClass } from "../../../global/A_ARC_Context.class";
import { A_ARC_SERVER_DELEGATE_TYPES__ResourceCreateRequest, A_ARC_SERVER_DELEGATE_TYPES__ResourceDeleteRequest, A_ARC_SERVER_DELEGATE_TYPES__ResourceDeleteResponse, A_ARC_SERVER_DELEGATE_TYPES__ResourceExistsRequest, A_ARC_SERVER_DELEGATE_TYPES__ResourceExistsResponse, A_ARC_SERVER_DELEGATE_TYPES__ResourceListRequest, A_ARC_SERVER_DELEGATE_TYPES__ResourceListResponse } from "./A_ARC_Resource.types";
export declare class A_ARC_SERVER_DELEGATE__ResourceAPI extends A_AUTH_ServerCommands_APIProvider<A_ARC_ContextClass> {
    protected baseURL: string;
    /**
     * Returns a list of resources to which the Application has access
     *
     * @param request
     * @param meta
     * @returns
     */
    list<M = any>(request: A_ARC_SERVER_DELEGATE_TYPES__ResourceListRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_ARC_SERVER_DELEGATE_TYPES__ResourceListResponse>;
    /**
     * Checks the resource existence in ARC
     *
     * @param request
     * @param meta
     * @returns
     */
    exists<M = any>(request: A_ARC_SERVER_DELEGATE_TYPES__ResourceExistsRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_ARC_SERVER_DELEGATE_TYPES__ResourceExistsResponse>;
    /**
     * API to create a new resource
     *
     * @param request
     * @param meta
     * @returns
     */
    create<M = any>(request: A_ARC_SERVER_DELEGATE_TYPES__ResourceCreateRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<import("../../app-interactions/index.types").A_ARC_TYPES__Resource_APIEntity>;
    /**
     * The method to remove resource by its aseid
     *
     * @param request
     * @param meta
     * @returns
     */
    remove<M = any>(request: A_ARC_SERVER_DELEGATE_TYPES__ResourceDeleteRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_ARC_SERVER_DELEGATE_TYPES__ResourceDeleteResponse>;
}
