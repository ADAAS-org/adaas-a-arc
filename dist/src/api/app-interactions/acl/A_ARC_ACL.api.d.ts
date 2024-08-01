import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { A_ARC_ContextClass } from "../../../global/A_ARC_Context.class";
import { A_ARC_APP_INTERACTIONS_TYPES__ACLCreateRequest, A_ARC_APP_INTERACTIONS_TYPES__ACLListRequest, A_ARC_APP_INTERACTIONS_TYPES__ACLListResponse, A_ARC_APP_INTERACTIONS_TYPES__ACLRemoveRequest } from "./A_ARC_ACL.types";
/**
 * API Provider for ACLs
 */
export declare class A_ARC_APP_INTERACTIONS__ACLAPI extends A_AUTH_AppInteractions_APIProvider<A_ARC_ContextClass> {
    protected get baseURL(): string;
    /**
     * Returns list of acls based on User Access
     *
     * @param request
     * @param meta
     * @returns
     */
    list<M = any>(request: A_ARC_APP_INTERACTIONS_TYPES__ACLListRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_ARC_APP_INTERACTIONS_TYPES__ACLListResponse>;
    /**
     *  API creates acl with required dependencies
     *
     * @param request
     * @param meta
     * @returns
     */
    create<M = any>(request: A_ARC_APP_INTERACTIONS_TYPES__ACLCreateRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<import("./A_ARC_ACL.types").A_ARC_TYPES__ACL_APIEntity>;
    /**
     * API to remove ACL rule
     *
     * @param request
     * @param meta
     * @returns
     */
    remove<M = any>(request: A_ARC_APP_INTERACTIONS_TYPES__ACLRemoveRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<import("./A_ARC_ACL.types").A_ARC_TYPES__ACL_APIEntity>;
}
