import { A_AUTH_ServerCommands_APIProvider, A_AUTH_TYPES__APIProviderRequestConfig } from "@adaas/a-auth";
import { A_ARC_ContextClass } from "../../../global/A_ARC_Context.class";
import { A_ARC_SERVER_COMMANDS_TYPES__ResourceCreateRequest, A_ARC_SERVER_COMMANDS_TYPES__ResourceDeleteRequest, A_ARC_SERVER_COMMANDS_TYPES__ResourceDeleteResponse, A_ARC_SERVER_COMMANDS_TYPES__ResourceExistsRequest, A_ARC_SERVER_COMMANDS_TYPES__ResourceExistsResponse, A_ARC_SERVER_COMMANDS_TYPES__ResourceListRequest, A_ARC_SERVER_COMMANDS_TYPES__ResourceListResponse } from "./A_ARC_Resource.types";
export declare class A_ARC_SERVER_COMMANDS__ResourceAPI extends A_AUTH_ServerCommands_APIProvider<A_ARC_ContextClass> {
    protected get baseURL(): string;
    /**
     * Returns a list of resources to which the Application has access
     *
     * @param request
     * @param meta
     * @returns
     */
    list<M = any>(request: A_ARC_SERVER_COMMANDS_TYPES__ResourceListRequest, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<A_ARC_SERVER_COMMANDS_TYPES__ResourceListResponse>;
    /**
     * Checks the resource existence in ARC
     *
     * @param request
     * @param meta
     * @returns
     */
    exists<M = any>(request: A_ARC_SERVER_COMMANDS_TYPES__ResourceExistsRequest, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<A_ARC_SERVER_COMMANDS_TYPES__ResourceExistsResponse>;
    /**
     * API to create a new resource
     *
     * @param request
     * @param meta
     * @returns
     */
    create<M = any>(request: A_ARC_SERVER_COMMANDS_TYPES__ResourceCreateRequest, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<import("../../app-interactions/index.types").A_ARC_TYPES__Resource_APIEntity>;
    /**
     * The method to remove resource by its aseid
     *
     * @param request
     * @param meta
     * @returns
     */
    remove<M = any>(request: A_ARC_SERVER_COMMANDS_TYPES__ResourceDeleteRequest, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<A_ARC_SERVER_COMMANDS_TYPES__ResourceDeleteResponse>;
}
