import { A_AUTH_ServerCommands_APIProvider, A_AUTH_ServerDelegate_APIProvider, A_AUTH_ServerDelegateAuthenticator, A_AUTH_TYPES__APIProviderRequestConfig } from "@adaas/a-auth";
import { A_ARC_ContextClass } from "@adaas/a-sdk/global/A_ARC_Context.class";
import {
    A_ARC_SERVER_DELEGATE_TYPES__ACLRemoveRequest,
    A_ARC_SERVER_DELEGATE_TYPES__ACLRemoveResponse,
    A_ARC_SERVER_DELEGATE_TYPES__ACLVerifyRequest,
    A_ARC_SERVER_DELEGATE_TYPES__ACLVerifyResponse,
} from "./A_ARC_ACL.types";
import { A_SDK_TYPES__Required } from "@adaas/a-sdk-types";



export class A_ARC_SERVER_DELEGATE__ACLAPI extends A_AUTH_ServerDelegate_APIProvider<A_ARC_ContextClass> {

    protected get baseURL(): string {
        return this.context.getConfigurationProperty('API_LOCATION');
    }

    /**
     * Verify the Access to requested resource or operation for the application  
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async verify<M = any>(
        request: A_ARC_SERVER_DELEGATE_TYPES__ACLVerifyRequest,
        config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>
    ) {
        return await this
            .post<A_ARC_SERVER_DELEGATE_TYPES__ACLVerifyResponse, M>(
                '/-s-dlg-/acl/verify',
                request,
                config
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
        request: A_ARC_SERVER_DELEGATE_TYPES__ACLRemoveRequest,
        config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>
    ) {
        return await this
            .post<A_ARC_SERVER_DELEGATE_TYPES__ACLRemoveResponse, M>(
                `/-s-dlg-/acls/remove`,
                request,
                config
            );
    }
}