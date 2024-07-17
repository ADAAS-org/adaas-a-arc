import { A_AUTH_ServerDelegate_APIProvider, A_AUTH_ServerDelegateAuthenticator, A_AUTH_TYPES__APIProviderRequestConfig } from "@adaas/a-auth";
import { A_ARC_ContextClass } from "../../../global/A_ARC_Context.class";
import { A_ARC_SERVER_DELEGATE_TYPES__ResourceCreateRequest, A_ARC_SERVER_DELEGATE_TYPES__ResourceDeleteRequest, A_ARC_SERVER_DELEGATE_TYPES__ResourceDeleteResponse, A_ARC_SERVER_DELEGATE_TYPES__ResourceExistsRequest, A_ARC_SERVER_DELEGATE_TYPES__ResourceExistsResponse, A_ARC_SERVER_DELEGATE_TYPES__ResourceListRequest, A_ARC_SERVER_DELEGATE_TYPES__ResourceListResponse } from "./A_ARC_Resource.types";
import { A_SDK_TYPES__Required } from "@adaas/a-sdk-types";
export declare class A_ARC_SERVER_DELEGATE__ResourceAPI extends A_AUTH_ServerDelegate_APIProvider<A_ARC_ContextClass> {
    protected baseURL: string;
    /**
     * Returns a list of resources to which the Application has access
     *
     * @param request
     * @param meta
     * @returns
     */
    list<M = any>(request: A_ARC_SERVER_DELEGATE_TYPES__ResourceListRequest, config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>): Promise<A_ARC_SERVER_DELEGATE_TYPES__ResourceListResponse>;
    /**
     * Checks the resource existence in ARC
     *
     * @param request
     * @param meta
     * @returns
     */
    exists<M = any>(request: A_ARC_SERVER_DELEGATE_TYPES__ResourceExistsRequest, config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>): Promise<A_ARC_SERVER_DELEGATE_TYPES__ResourceExistsResponse>;
    /**
     * API to create a new resource
     *
     * @param request
     * @param meta
     * @returns
     */
    create<M = any>(request: A_ARC_SERVER_DELEGATE_TYPES__ResourceCreateRequest, config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>): Promise<import("../../app-interactions/index.types").A_ARC_TYPES__Resource_APIEntity>;
    /**
     * The method to remove resource by its aseid
     *
     * @param request
     * @param meta
     * @returns
     */
    remove<M = any>(request: A_ARC_SERVER_DELEGATE_TYPES__ResourceDeleteRequest, config: A_SDK_TYPES__Required<A_AUTH_TYPES__APIProviderRequestConfig<M, A_AUTH_ServerDelegateAuthenticator>, ['authenticator']>): Promise<A_ARC_SERVER_DELEGATE_TYPES__ResourceDeleteResponse>;
}
