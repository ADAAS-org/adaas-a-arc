import { A_AUTH_ServerCommands_APIProvider, A_AUTH_TYPES__APIProviderRequestConfig } from "@adaas/a-auth";
import { A_ARC_ContextClass } from "../../../global/A_ARC_Context.class";
import { A_ARC_SERVER_COMMANDS_TYPES__ACLRemoveRequest, A_ARC_SERVER_COMMANDS_TYPES__ACLVerifyRequest, A_ARC_SERVER_COMMANDS_TYPES__ACLVerifyResponse } from "./A_ARC_ACL.types";
export declare class A_ARC_SERVER_COMMANDS__ACLAPI extends A_AUTH_ServerCommands_APIProvider<A_ARC_ContextClass> {
    protected get baseURL(): string;
    /**
     * Verify the Access to requested resource or operation for the application
     *
     * @param request
     * @param meta
     * @returns
     */
    verify<M = any>(request: A_ARC_SERVER_COMMANDS_TYPES__ACLVerifyRequest, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<A_ARC_SERVER_COMMANDS_TYPES__ACLVerifyResponse>;
    /**
     * API to remove ACL rule
     *
     * @param request
     * @param meta
     * @returns
     */
    remove<M = any>(request: A_ARC_SERVER_COMMANDS_TYPES__ACLRemoveRequest, config?: A_AUTH_TYPES__APIProviderRequestConfig<M>): Promise<import("../../app-interactions/index.types").A_ARC_TYPES__ACL_APIEntity>;
}
