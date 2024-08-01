import { A_AUTH_ServerCommands_APIProvider, A_AUTH_TYPES__APIProviderRequestConfig } from "@adaas/a-auth";
import { A_ARC_ContextClass } from "@adaas/a-sdk/global/A_ARC_Context.class";
import {
    A_ARC_SERVER_COMMANDS_TYPES__ScopeCreateRequest,
    A_ARC_SERVER_COMMANDS_TYPES__ScopeCreateResponse,
    A_ARC_SERVER_COMMANDS_TYPES__ScopeDeleteRequest,
    A_ARC_SERVER_COMMANDS_TYPES__ScopeDeleteResponse,
    A_ARC_SERVER_COMMANDS_TYPES__ScopeExistsRequest,
    A_ARC_SERVER_COMMANDS_TYPES__ScopeExistsResponse,
    A_ARC_SERVER_COMMANDS_TYPES__ScopeListRequest,
    A_ARC_SERVER_COMMANDS_TYPES__ScopeListResponse,
} from "./A_ARC_Scope.types";



export class A_ARC_SERVER_COMMANDS__ScopeAPI extends A_AUTH_ServerCommands_APIProvider<A_ARC_ContextClass> {

    protected get baseURL(): string {
        return this.context.getConfigurationProperty('API_LOCATION');
    }

    /**
     * Returns a list of scopes to which the Application has access
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async list<M = any>(
        request: A_ARC_SERVER_COMMANDS_TYPES__ScopeListRequest,
        config?: A_AUTH_TYPES__APIProviderRequestConfig<M>
    ) {
        return await this
            .get<A_ARC_SERVER_COMMANDS_TYPES__ScopeListResponse, M>(
                '/-s-cmd-/scopes',
                request,
                config
            );
    }


    /**
     * Checks the scope existence in ARC
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async exists<M = any>(
        request: A_ARC_SERVER_COMMANDS_TYPES__ScopeExistsRequest,
        config?: A_AUTH_TYPES__APIProviderRequestConfig<M>
    ) {
        return await this
            .get<A_ARC_SERVER_COMMANDS_TYPES__ScopeExistsResponse, M>(
                '/-s-cmd-/scopes',
                request,
                config
            );
    }


    /**
     * API to create a new scope
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async create<M = any>(
        request: A_ARC_SERVER_COMMANDS_TYPES__ScopeCreateRequest,
        config?: A_AUTH_TYPES__APIProviderRequestConfig<M>
    ) {
        return await this
            .post<A_ARC_SERVER_COMMANDS_TYPES__ScopeCreateResponse, M>(
                '/-s-cmd-/scopes',
                request,
                config
            );
    }


    /**
     * The method to remove scope by its aseid
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async remove<M = any>(
        request: A_ARC_SERVER_COMMANDS_TYPES__ScopeDeleteRequest,
        config?: A_AUTH_TYPES__APIProviderRequestConfig<M>
    ) {
        return await this
            .delete<A_ARC_SERVER_COMMANDS_TYPES__ScopeDeleteResponse, M>(
                `/-s-cmd-/scopes/${request.aseid}`,
                config
            );
    }
}