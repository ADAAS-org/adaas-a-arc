import { A_AUTH_ServerCommands_APIProvider, A_AUTH_TYPES__APIProviderRequestConfig } from "@adaas/a-auth";
import { A_ARC_ContextClass } from "@adaas/a-sdk/global/A_ARC_Context.class";
import {
    A_ARC_SERVER_COMMANDS_TYPES__ACLRemoveRequest,
    A_ARC_SERVER_COMMANDS_TYPES__ACLRemoveResponse,
    A_ARC_SERVER_COMMANDS_TYPES__ACLVerifyRequest,
    A_ARC_SERVER_COMMANDS_TYPES__ACLVerifyResponse,
} from "./A_ARC_ACL.types";



export class A_ARC_SERVER_COMMANDS__ACLAPI extends A_AUTH_ServerCommands_APIProvider<A_ARC_ContextClass> {

    protected baseURL: string = this.context.getConfigurationProperty<string>('API_LOCATION');

    /**
     * Verify the Access to requested resource or operation for the application  
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async verify<M = any>(
        request: A_ARC_SERVER_COMMANDS_TYPES__ACLVerifyRequest,
        config?:A_AUTH_TYPES__APIProviderRequestConfig<M>
    ) {
        return await this
            .post<A_ARC_SERVER_COMMANDS_TYPES__ACLVerifyResponse, M>(
                '/-s-cmd-/acl/verify',
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
        request: A_ARC_SERVER_COMMANDS_TYPES__ACLRemoveRequest,
        config?:A_AUTH_TYPES__APIProviderRequestConfig<M>
    ) {
        return await this
            .post<A_ARC_SERVER_COMMANDS_TYPES__ACLRemoveResponse, M>(
                `/-s-cmd-/acls/remove`,
                request,
                config
            );
    }
}