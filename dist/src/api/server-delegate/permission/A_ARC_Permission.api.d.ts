import { A_AUTH_ServerDelegate_APIProvider, A_AUTH_ServerDelegateAuthenticator, A_AUTH_TYPES__APIProviderRequestConfig } from "@adaas/a-auth";
import { A_ARC_ContextClass } from "../../../global/A_ARC_Context.class";
import { A_ARC_SERVER_DELEGATE_TYPES__PermissionCreateRequest, A_ARC_SERVER_DELEGATE_TYPES__PermissionCreateResponse, A_ARC_SERVER_DELEGATE_TYPES__PermissionRemoveRequest, A_ARC_SERVER_DELEGATE_TYPES__PermissionRemoveResponse } from "./A_ARC_Permission.types";
import { A_SDK_TYPES__Required } from "@adaas/a-sdk-types";
export declare class A_ARC_SERVER_DELEGATE__PermissionAPI extends A_AUTH_ServerDelegate_APIProvider<A_ARC_ContextClass> {
    protected get baseURL(): string;
    /**
     *
     *
     *
     * @param request
     * @param config
     * @returns
     */
    create<M = any>(request: A_ARC_SERVER_DELEGATE_TYPES__PermissionCreateRequest, config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>): Promise<A_ARC_SERVER_DELEGATE_TYPES__PermissionCreateResponse>;
    /**
     * API to remove Permission rule
     *
     * @param request
     * @param meta
     * @returns
     */
    remove<M = any>(request: A_ARC_SERVER_DELEGATE_TYPES__PermissionRemoveRequest, config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>): Promise<A_ARC_SERVER_DELEGATE_TYPES__PermissionRemoveResponse>;
}
