import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { A_ARC_ContextClass } from "@adaas/a-sdk/global/A_ARC_Context.class";
import {
    A_ARC_APP_INTERACTIONS_TYPES__ScopeCreateRequest,
    A_ARC_APP_INTERACTIONS_TYPES__ScopeCreateResponse,
    A_ARC_APP_INTERACTIONS_TYPES__ScopeGetRequest,
    A_ARC_APP_INTERACTIONS_TYPES__ScopeGetResponse,
    A_ARC_APP_INTERACTIONS_TYPES__ScopeListRequest,
    A_ARC_APP_INTERACTIONS_TYPES__ScopeListResponse,
    A_ARC_APP_INTERACTIONS_TYPES__ScopeUpdateRequest,
    A_ARC_APP_INTERACTIONS_TYPES__ScopeUpdateResponse
} from "./A_ARC_Scope.types";


/**
 * API Provider for Scopes
 */
export class A_ARC_APP_INTERACTIONS__ScopeAPI extends A_AUTH_AppInteractions_APIProvider<A_ARC_ContextClass> {

    protected get baseURL(): string {
        return this.context.getConfigurationProperty('API_LOCATION');
    }

    /**
     * Returns list of scopes based on User Access
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async list<M = any>(
        request: A_ARC_APP_INTERACTIONS_TYPES__ScopeListRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .get<A_ARC_APP_INTERACTIONS_TYPES__ScopeListResponse, M>(
                '/scopes',
                request,
                {
                    meta
                }
            );
    }

    /**
     * API returns scope with nested entities such as profile, settings, etc.
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async load<M = any>(
        request: A_ARC_APP_INTERACTIONS_TYPES__ScopeGetRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .get<A_ARC_APP_INTERACTIONS_TYPES__ScopeGetResponse, M>(
                `/scopes/${request.scopeASEID}`,
                {},
                {
                    meta
                }
            );
    }


    /**
     *  API creates scope with required dependencies
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async create<M = any>(
        request: A_ARC_APP_INTERACTIONS_TYPES__ScopeCreateRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .post<A_ARC_APP_INTERACTIONS_TYPES__ScopeCreateResponse, M>(
                `/scopes`,
                request,
                {
                    meta
                }
            );
    }


    /**
    * This function is used to create scope
    * 
    * @param scope 
    * @returns 
    */
    async update<M = any>(
        request: A_ARC_APP_INTERACTIONS_TYPES__ScopeUpdateRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .post<A_ARC_APP_INTERACTIONS_TYPES__ScopeUpdateResponse, M>(
                `/scopes/${request.aseid}`,
                request,
                {
                    meta
                }
            );
    }
}

