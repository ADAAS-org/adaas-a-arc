import { A_AUTH_ServerCommands_APIProvider, A_AUTH_ServerDelegateAuthenticator, A_AUTH_TYPES__APIProviderRequestConfig } from "@adaas/a-auth";
import { A_ARC_ContextClass } from "@adaas/a-sdk/global/A_ARC_Context.class";
import {
    A_ARC_SERVER_DELEGATE_TYPES__ScopeCreateRequest,
    A_ARC_SERVER_DELEGATE_TYPES__ScopeCreateResponse,
    A_ARC_SERVER_DELEGATE_TYPES__ScopeDeleteRequest,
    A_ARC_SERVER_DELEGATE_TYPES__ScopeDeleteResponse,
    A_ARC_SERVER_DELEGATE_TYPES__ScopeExistsRequest,
    A_ARC_SERVER_DELEGATE_TYPES__ScopeExistsResponse,
    A_ARC_SERVER_DELEGATE_TYPES__ScopeListRequest,
    A_ARC_SERVER_DELEGATE_TYPES__ScopeListResponse,
} from "./A_ARC_Scope.types";
import { A_SDK_TYPES__Required } from "@adaas/a-sdk-types";



export class A_ARC_SERVER_DELEGATE__ScopeAPI extends A_AUTH_ServerCommands_APIProvider<A_ARC_ContextClass> {

    protected baseURL: string = this.context.getConfigurationProperty<string>('API_LOCATION');

    /**
     * Returns a list of scopes to which the Application has access
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async list<M = any>(
        request: A_ARC_SERVER_DELEGATE_TYPES__ScopeListRequest,
        config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>
    ) {
        return await this
            .get<A_ARC_SERVER_DELEGATE_TYPES__ScopeListResponse, M>(
                '/-s-dlg-/scopes',
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
        request: A_ARC_SERVER_DELEGATE_TYPES__ScopeExistsRequest,
        config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>
    ) {
        return await this
            .get<A_ARC_SERVER_DELEGATE_TYPES__ScopeExistsResponse, M>(
                '/-s-dlg-/scopes',
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
        request: A_ARC_SERVER_DELEGATE_TYPES__ScopeCreateRequest,
        config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>
    ) {
        return await this
            .post<A_ARC_SERVER_DELEGATE_TYPES__ScopeCreateResponse, M>(
                '/-s-dlg-/scopes',
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
        request: A_ARC_SERVER_DELEGATE_TYPES__ScopeDeleteRequest,
        config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>
    ) {
        return await this
            .delete<A_ARC_SERVER_DELEGATE_TYPES__ScopeDeleteResponse, M>(
                `/-s-dlg-/scopes/${request.aseid}`,
                config
            );
    }
}