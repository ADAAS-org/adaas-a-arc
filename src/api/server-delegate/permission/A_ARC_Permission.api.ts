import {
    A_AUTH_ServerDelegate_APIProvider,
    A_AUTH_ServerDelegateAuthenticator,
    A_AUTH_TYPES__APIProviderRequestConfig
} from "@adaas/a-auth";
import { A_ARC_ContextClass } from "@adaas/a-sdk/global/A_ARC_Context.class";
import {
    A_ARC_SERVER_DELEGATE_TYPES__PermissionCreateRequest,
    A_ARC_SERVER_DELEGATE_TYPES__PermissionCreateResponse,
    A_ARC_SERVER_DELEGATE_TYPES__PermissionRemoveRequest,
    A_ARC_SERVER_DELEGATE_TYPES__PermissionRemoveResponse,
} from "./A_ARC_Permission.types";
import { A_SDK_TYPES__Required } from "@adaas/a-sdk-types";



export class A_ARC_SERVER_DELEGATE__PermissionAPI extends A_AUTH_ServerDelegate_APIProvider<A_ARC_ContextClass> {

    protected get baseURL(): string {
        return this.context.getConfigurationProperty('API_LOCATION');
    }


    /**
     * 
     * 
     * 
     * @param request 
     * @param config 
     * @returns 
     */
    async create<M = any>(
        request: A_ARC_SERVER_DELEGATE_TYPES__PermissionCreateRequest,
        config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>
    ) {
        return await this
            .post<A_ARC_SERVER_DELEGATE_TYPES__PermissionCreateResponse, M>(
                `/-s-dlg-/permissions`,
                request,
                config
            );
    }


    /**
     * API to remove Permission rule
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async remove<M = any>(
        request: A_ARC_SERVER_DELEGATE_TYPES__PermissionRemoveRequest,
        config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>
    ) {
        return await this
            .delete<A_ARC_SERVER_DELEGATE_TYPES__PermissionRemoveResponse, M>(
                `/-s-dlg-/permissions/${request.aseid}`,
                config
            );
    }
}