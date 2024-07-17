import { A_AUTH_ServerCommands_APIProvider, A_AUTH_TYPES__APIProviderRequestConfig } from "@adaas/a-auth";
import { A_ARC_ContextClass } from "../../../global/A_ARC_Context.class";
import { A_ARC_SERVER_COMMANDS_TYPES__ScopeCreateRequest, A_ARC_SERVER_COMMANDS_TYPES__ScopeDeleteRequest, A_ARC_SERVER_COMMANDS_TYPES__ScopeDeleteResponse, A_ARC_SERVER_COMMANDS_TYPES__ScopeExistsRequest, A_ARC_SERVER_COMMANDS_TYPES__ScopeExistsResponse, A_ARC_SERVER_COMMANDS_TYPES__ScopeListRequest, A_ARC_SERVER_COMMANDS_TYPES__ScopeListResponse } from "./A_ARC_Scope.types";
export declare class A_ARC_SERVER_COMMANDS__ScopeAPI extends A_AUTH_ServerCommands_APIProvider<A_ARC_ContextClass> {
    protected baseURL: string;
    /**
     * Returns a list of scopes to which the Application has access
     *
     * @param request
     * @param meta
     * @returns
     */
    list<M = any>(request: A_ARC_SERVER_COMMANDS_TYPES__ScopeListRequest, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<A_ARC_SERVER_COMMANDS_TYPES__ScopeListResponse>;
    /**
     * Checks the scope existence in ARC
     *
     * @param request
     * @param meta
     * @returns
     */
    exists<M = any>(request: A_ARC_SERVER_COMMANDS_TYPES__ScopeExistsRequest, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<A_ARC_SERVER_COMMANDS_TYPES__ScopeExistsResponse>;
    /**
     * API to create a new scope
     *
     * @param request
     * @param meta
     * @returns
     */
    create<M = any>(request: A_ARC_SERVER_COMMANDS_TYPES__ScopeCreateRequest, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<import("../../app-interactions/index.types").A_ARC_TYPES__Scope_APIEntity>;
    /**
     * The method to remove scope by its aseid
     *
     * @param request
     * @param meta
     * @returns
     */
    remove<M = any>(request: A_ARC_SERVER_COMMANDS_TYPES__ScopeDeleteRequest, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<A_ARC_SERVER_COMMANDS_TYPES__ScopeDeleteResponse>;
}
