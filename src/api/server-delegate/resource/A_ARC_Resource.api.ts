import { A_AUTH_ServerCommands_APIProvider, A_AUTH_ServerDelegate_APIProvider, A_AUTH_ServerDelegateAuthenticator, A_AUTH_TYPES__APIProviderRequestConfig } from "@adaas/a-auth";
import { A_ARC_ContextClass } from "@adaas/a-sdk/global/A_ARC_Context.class";
import {
    A_ARC_SERVER_DELEGATE_TYPES__ResourceCreateRequest,
    A_ARC_SERVER_DELEGATE_TYPES__ResourceCreateResponse,
    A_ARC_SERVER_DELEGATE_TYPES__ResourceDeleteRequest,
    A_ARC_SERVER_DELEGATE_TYPES__ResourceDeleteResponse,
    A_ARC_SERVER_DELEGATE_TYPES__ResourceExistsRequest,
    A_ARC_SERVER_DELEGATE_TYPES__ResourceExistsResponse,
    A_ARC_SERVER_DELEGATE_TYPES__ResourceListRequest,
    A_ARC_SERVER_DELEGATE_TYPES__ResourceListResponse,
} from "./A_ARC_Resource.types";
import { A_SDK_TYPES__Required } from "@adaas/a-sdk-types";



export class A_ARC_SERVER_DELEGATE__ResourceAPI extends A_AUTH_ServerDelegate_APIProvider<A_ARC_ContextClass> {

    protected baseURL: string = this.context.getConfigurationProperty<string>('API_LOCATION');

    /**
     * Returns a list of resources to which the Application has access
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async list<M = any>(
        request: A_ARC_SERVER_DELEGATE_TYPES__ResourceListRequest,
        config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>
    ) {
        return await this
            .get<A_ARC_SERVER_DELEGATE_TYPES__ResourceListResponse, M>(
                '/-s-dlg-/resources',
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
        request: A_ARC_SERVER_DELEGATE_TYPES__ResourceExistsRequest,
        config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>
    ) {
        return await this
            .get<A_ARC_SERVER_DELEGATE_TYPES__ResourceExistsResponse, M>(
                '/-s-dlg-/resources',
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
        request: A_ARC_SERVER_DELEGATE_TYPES__ResourceCreateRequest,
        config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>
    ) {
        return await this
            .post<A_ARC_SERVER_DELEGATE_TYPES__ResourceCreateResponse, M>(
                '/-s-dlg-/resources',
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
        request: A_ARC_SERVER_DELEGATE_TYPES__ResourceDeleteRequest,
        config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>
    ) {
        return await this
            .delete<A_ARC_SERVER_DELEGATE_TYPES__ResourceDeleteResponse, M>(
                `/-s-dlg-/resources/${request.aseid}`,
                config
            );
    }
}