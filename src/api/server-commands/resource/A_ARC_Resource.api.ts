import { A_AUTH_ServerCommands_APIProvider, A_AUTH_TYPES__APIProviderRequestConfig } from "@adaas/a-auth";
import { A_ARC_ContextClass } from "@adaas/a-sdk/global/A_ARC_Context.class";
import {
    A_ARC_SERVER_COMMANDS_TYPES__ResourceCreateRequest,
    A_ARC_SERVER_COMMANDS_TYPES__ResourceCreateResponse,
    A_ARC_SERVER_COMMANDS_TYPES__ResourceDeleteRequest,
    A_ARC_SERVER_COMMANDS_TYPES__ResourceDeleteResponse,
    A_ARC_SERVER_COMMANDS_TYPES__ResourceExistsRequest,
    A_ARC_SERVER_COMMANDS_TYPES__ResourceExistsResponse,
    A_ARC_SERVER_COMMANDS_TYPES__ResourceListRequest,
    A_ARC_SERVER_COMMANDS_TYPES__ResourceListResponse,
} from "./A_ARC_Resource.types";



export class A_ARC_SERVER_COMMANDS__ResourceAPI extends A_AUTH_ServerCommands_APIProvider<A_ARC_ContextClass> {

    protected get baseURL(): string {
        return this.context.getConfigurationProperty('API_LOCATION');
    }

    /**
     * Returns a list of resources to which the Application has access
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async list<M = any>(
        request: A_ARC_SERVER_COMMANDS_TYPES__ResourceListRequest,
        config?: A_AUTH_TYPES__APIProviderRequestConfig<M>
    ) {
        return await this
            .get<A_ARC_SERVER_COMMANDS_TYPES__ResourceListResponse, M>(
                '/-s-cmd-/resources',
                request,
                config
            );
    }


    /**
     * Checks the resource existence in ARC
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async exists<M = any>(
        request: A_ARC_SERVER_COMMANDS_TYPES__ResourceExistsRequest,
        config?: A_AUTH_TYPES__APIProviderRequestConfig<M>
    ) {
        return await this
            .get<A_ARC_SERVER_COMMANDS_TYPES__ResourceExistsResponse, M>(
                '/-s-cmd-/resources',
                request,
                config
            );
    }


    /**
     * API to create a new resource
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async create<M = any>(
        request: A_ARC_SERVER_COMMANDS_TYPES__ResourceCreateRequest,
        config?: A_AUTH_TYPES__APIProviderRequestConfig<M>
    ) {
        return await this
            .post<A_ARC_SERVER_COMMANDS_TYPES__ResourceCreateResponse, M>(
                '/-s-cmd-/resources',
                request,
                config
            );
    }


    /**
     * The method to remove resource by its aseid
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async remove<M = any>(
        request: A_ARC_SERVER_COMMANDS_TYPES__ResourceDeleteRequest,
        config?: A_AUTH_TYPES__APIProviderRequestConfig<M>
    ) {
        return await this
            .delete<A_ARC_SERVER_COMMANDS_TYPES__ResourceDeleteResponse, M>(
                `/-s-cmd-/resources/${request.aseid}`,
                config
            );
    }
}