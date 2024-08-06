import { A_AUTH_TYPES__IAuthenticator, A_AUTH_ContextClass } from "@adaas/a-auth";
/**
 * Global AUTH Context for the A-Account SDKs
 */
export declare class A_ARC_ContextClass extends A_AUTH_ContextClass {
    /**
     * Global AUTH Context for the SDKs
     */
    auth: A_AUTH_ContextClass;
    protected API_LOCATION: string;
    protected accountContextAllowedProperties: readonly ["CONFIG_SDK_VALIDATION", "CONFIG_VERBOSE", "CONFIG_IGNORE_ERRORS", "SSO_LOCATION", "ENABLE_AUTH", "API_LOCATION"];
    constructor();
    getConfigurationProperty<T = any>(property: typeof this.accountContextAllowedProperties[number]): T;
    getAuthenticator(userASEID?: string | undefined): A_AUTH_TYPES__IAuthenticator;
    protected loadExtendedConfigurationsFromEnvironment(): Promise<void>;
    protected loadExtendedConfigurationsFromFile<T = any>(config: T): Promise<void>;
}
export declare const A_ARC_Context: A_ARC_ContextClass;
