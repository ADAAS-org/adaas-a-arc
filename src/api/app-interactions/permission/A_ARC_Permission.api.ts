import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { A_ARC_ContextClass } from "@adaas/a-sdk/global/A_ARC_Context.class";
import {
    A_ARC_APP_INTERACTIONS_TYPES__PermissionCreateRequest,
    A_ARC_APP_INTERACTIONS_TYPES__PermissionCreateResponse,
    A_ARC_APP_INTERACTIONS_TYPES__PermissionDeleteRequest,
    A_ARC_APP_INTERACTIONS_TYPES__PermissionDeleteResponse,
    A_ARC_APP_INTERACTIONS_TYPES__PermissionGetRequest,
    A_ARC_APP_INTERACTIONS_TYPES__PermissionGetResponse,
    A_ARC_APP_INTERACTIONS_TYPES__PermissionListRequest,
    A_ARC_APP_INTERACTIONS_TYPES__PermissionListResponse,
} from "./A_ARC_Permission.types";


/**
 * API Provider for Permissions
 */
export class A_ARC_APP_INTERACTIONS__PermissionAPI extends A_AUTH_AppInteractions_APIProvider<A_ARC_ContextClass> {

    protected baseURL: string = this.context.getConfigurationProperty<string>('API_LOCATION');


    /**
     * Returns list of permissions based on User Access
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async list<M = any>(
        request: A_ARC_APP_INTERACTIONS_TYPES__PermissionListRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .get<A_ARC_APP_INTERACTIONS_TYPES__PermissionListResponse, M>(
                '/permissions',
                request,
                {
                    meta
                }
            );
    }

    /**
     * API returns permission with nested entities such as profile, settings, etc.
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async load<M = any>(
        request: A_ARC_APP_INTERACTIONS_TYPES__PermissionGetRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .get<A_ARC_APP_INTERACTIONS_TYPES__PermissionGetResponse, M>(
                `/permissions/${request.permissionASEID}`,
                {},
                {
                    meta
                }
            );
    }


    /**
     *  API creates permission with required dependencies
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async create<M = any>(
        request: A_ARC_APP_INTERACTIONS_TYPES__PermissionCreateRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .post<A_ARC_APP_INTERACTIONS_TYPES__PermissionCreateResponse, M>(
                `/permissions`,
                request,
                {
                    meta
                }
            );
    }


    async remove<M = any>(
        request: A_ARC_APP_INTERACTIONS_TYPES__PermissionDeleteRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .delete<A_ARC_APP_INTERACTIONS_TYPES__PermissionDeleteResponse, M>(
                `/permissions/${request.aseid}`,
                {
                    meta
                }
            );
    }
}

