import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { A_ARC_ContextClass } from "@adaas/a-sdk/global/A_ARC_Context.class";
import {
    A_ARC_APP_INTERACTIONS_TYPES__ResourceCreateRequest,
    A_ARC_APP_INTERACTIONS_TYPES__ResourceCreateResponse,
    A_ARC_APP_INTERACTIONS_TYPES__ResourceGetRequest,
    A_ARC_APP_INTERACTIONS_TYPES__ResourceGetResponse,
    A_ARC_APP_INTERACTIONS_TYPES__ResourceListRequest,
    A_ARC_APP_INTERACTIONS_TYPES__ResourceListResponse,
    A_ARC_APP_INTERACTIONS_TYPES__ResourceUpdateRequest,
    A_ARC_APP_INTERACTIONS_TYPES__ResourceUpdateResponse
} from "./A_ARC_Resource.types";


/**
 * API Provider for Resources
 */
export class A_ARC_APP_INTERACTIONS__ResourceAPI extends A_AUTH_AppInteractions_APIProvider<A_ARC_ContextClass> {

    protected baseURL: string = this.context.getConfigurationProperty<string>('API_LOCATION');


    /**
     * Returns list of resources based on User Access
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async list<M = any>(
        request: A_ARC_APP_INTERACTIONS_TYPES__ResourceListRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .get<A_ARC_APP_INTERACTIONS_TYPES__ResourceListResponse, M>(
                '/resources',
                request,
                {
                    meta
                }
            );
    }

    /**
     * API returns resource with nested entities such as profile, settings, etc.
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async load<M = any>(
        request: A_ARC_APP_INTERACTIONS_TYPES__ResourceGetRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .get<A_ARC_APP_INTERACTIONS_TYPES__ResourceGetResponse, M>(
                `/resources/${request.resourceASEID}`,
                {},
                {
                    meta
                }
            );
    }


    /**
     *  API creates resource with required dependencies
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async create<M = any>(
        request: A_ARC_APP_INTERACTIONS_TYPES__ResourceCreateRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .post<A_ARC_APP_INTERACTIONS_TYPES__ResourceCreateResponse, M>(
                `/resources`,
                request,
                {
                    meta
                }
            );
    }


    /**
    * This function is used to create resource
    * 
    * @param resource 
    * @returns 
    */
    async update<M = any>(
        request: A_ARC_APP_INTERACTIONS_TYPES__ResourceUpdateRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .post<A_ARC_APP_INTERACTIONS_TYPES__ResourceUpdateResponse, M>(
                `/resources/${request.aseid}`,
                request,
                {
                    meta
                }
            );
    }
}

