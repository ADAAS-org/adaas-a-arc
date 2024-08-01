import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { A_ARC_ContextClass } from "@adaas/a-sdk/global/A_ARC_Context.class";
import {
    A_ARC_APP_INTERACTIONS_TYPES__ACLCreateRequest,
    A_ARC_APP_INTERACTIONS_TYPES__ACLCreateResponse,
    A_ARC_APP_INTERACTIONS_TYPES__ACLListRequest,
    A_ARC_APP_INTERACTIONS_TYPES__ACLListResponse,
    A_ARC_APP_INTERACTIONS_TYPES__ACLRemoveRequest,
    A_ARC_APP_INTERACTIONS_TYPES__ACLRemoveResponse,
} from "./A_ARC_ACL.types";


/**
 * API Provider for ACLs
 */
export class A_ARC_APP_INTERACTIONS__ACLAPI extends A_AUTH_AppInteractions_APIProvider<A_ARC_ContextClass> {

    protected get baseURL(): string {
        return this.context.getConfigurationProperty('API_LOCATION');
    }

    /**
     * Returns list of acls based on User Access
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async list<M = any>(
        request: A_ARC_APP_INTERACTIONS_TYPES__ACLListRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .get<A_ARC_APP_INTERACTIONS_TYPES__ACLListResponse, M>(
                '/acls',
                request,
                {
                    meta
                }
            );
    }


    /**
     *  API creates acl with required dependencies
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async create<M = any>(
        request: A_ARC_APP_INTERACTIONS_TYPES__ACLCreateRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .post<A_ARC_APP_INTERACTIONS_TYPES__ACLCreateResponse, M>(
                `/acls`,
                request,
                {
                    meta
                }
            );
    }


    /**
     * API to remove ACL rule
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async remove<M = any>(
        request: A_ARC_APP_INTERACTIONS_TYPES__ACLRemoveRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .post<A_ARC_APP_INTERACTIONS_TYPES__ACLRemoveResponse, M>(
                `/acls/remove`,
                request,
                {
                    meta
                }
            );
    }
}

