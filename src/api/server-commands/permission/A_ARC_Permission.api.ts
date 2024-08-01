import {
    A_AUTH_ServerCommands_APIProvider,
    A_AUTH_TYPES__APIProviderRequestConfig
} from "@adaas/a-auth";
import { A_ARC_ContextClass } from "@adaas/a-sdk/global/A_ARC_Context.class";
import {
    A_ARC_SERVER_COMMANDS_TYPES__PermissionCreateRequest,
    A_ARC_SERVER_COMMANDS_TYPES__PermissionCreateResponse,
    A_ARC_SERVER_COMMANDS_TYPES__PermissionMigrateRequest,
    A_ARC_SERVER_COMMANDS_TYPES__PermissionMigrateResponse,
    A_ARC_SERVER_COMMANDS_TYPES__PermissionRemoveRequest,
    A_ARC_SERVER_COMMANDS_TYPES__PermissionRemoveResponse,
} from "./A_ARC_Permission.types";



export class A_ARC_SERVER_COMMANDS__PermissionAPI extends A_AUTH_ServerCommands_APIProvider<A_ARC_ContextClass> {

    protected get baseURL(): string {
        return this.context.getConfigurationProperty('API_LOCATION');
    }


    async migrate<M = any>(
        request: A_ARC_SERVER_COMMANDS_TYPES__PermissionMigrateRequest,
        config?: A_AUTH_TYPES__APIProviderRequestConfig<M>
    ) {
        return await this
            .post<A_ARC_SERVER_COMMANDS_TYPES__PermissionMigrateResponse[], M>(
                `/-s-cmd-/permissions/migrate`,
                request,
                config
            );
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
        request: A_ARC_SERVER_COMMANDS_TYPES__PermissionCreateRequest,
        config?: A_AUTH_TYPES__APIProviderRequestConfig<M>
    ) {
        return await this
            .post<A_ARC_SERVER_COMMANDS_TYPES__PermissionCreateResponse, M>(
                `/-s-cmd-/permissions`,
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
        request: A_ARC_SERVER_COMMANDS_TYPES__PermissionRemoveRequest,
        config?: A_AUTH_TYPES__APIProviderRequestConfig<M>
    ) {
        return await this
            .delete<A_ARC_SERVER_COMMANDS_TYPES__PermissionRemoveResponse, M>(
                `/-s-cmd-/permissions/${request.aseid}`,
                config
            );
    }
}