import { A_AUTH_ServerDelegate_APIProvider, A_AUTH_ServerDelegateAuthenticator, A_AUTH_TYPES__APIProviderRequestConfig } from "@adaas/a-auth";
import { A_ARC_ContextClass } from "../../../global/A_ARC_Context.class";
import { A_ARC_SERVER_DELEGATE_TYPES__ACLRemoveRequest, A_ARC_SERVER_DELEGATE_TYPES__ACLVerifyRequest, A_ARC_SERVER_DELEGATE_TYPES__ACLVerifyResponse } from "./A_ARC_ACL.types";
import { A_SDK_TYPES__Required } from "@adaas/a-sdk-types";
export declare class A_ARC_SERVER_DELEGATE__ACLAPI extends A_AUTH_ServerDelegate_APIProvider<A_ARC_ContextClass> {
    protected baseURL: string;
    /**
     * Verify the Access to requested resource or operation for the application
     *
     * @param request
     * @param meta
     * @returns
     */
    verify<M = any>(request: A_ARC_SERVER_DELEGATE_TYPES__ACLVerifyRequest, config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>): Promise<A_ARC_SERVER_DELEGATE_TYPES__ACLVerifyResponse>;
    /**
     * API to remove ACL rule
     *
     * @param request
     * @param meta
     * @returns
     */
    remove<M = any>(request: A_ARC_SERVER_DELEGATE_TYPES__ACLRemoveRequest, config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>): Promise<import("../../app-interactions/index.types").A_ARC_TYPES__ACL_APIEntity>;
}
