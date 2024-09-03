import {
    A_AUTH_TYPES__IAuthenticator,
    A_AUTH_Context,
    A_AUTH_ContextClass
} from "@adaas/a-auth";
import { A_SDK_CONSTANTS__ERROR_CODES } from "@adaas/a-sdk-types";
import { A_ARC_CONSTANTS__DEFAULT_ERRORS } from "../constants/errors.constants";


/**
 * Global AUTH Context for the A-Account SDKs
 */
export class A_ARC_ContextClass extends A_AUTH_ContextClass {


    /**
     * Global AUTH Context for the SDKs
     */
    auth: A_AUTH_ContextClass = A_AUTH_Context


    protected API_LOCATION: string = 'https://arc.adaas.org';


    protected accountContextAllowedProperties = [
        ...this.authContextAllowedProperties,
        "API_LOCATION"
    ] as const;


    constructor() {
        super({
            namespace: 'a-arc',
            errors: A_ARC_CONSTANTS__DEFAULT_ERRORS
        });
    }

    protected async awaitNestedDependencies(): Promise<void> {
        await this.global.ready;

        await this.auth.ready;
    }


    getConfigurationProperty<T = any>(
        property: typeof this.accountContextAllowedProperties[number]
    ): T {
        if (this.accountContextAllowedProperties.includes(property as any))
            return this[property as string] as T;
        else
            this.Errors.throw(A_SDK_CONSTANTS__ERROR_CODES.CONFIGURATION_PROPERTY_NOT_EXISTS_OR_NOT_ALLOWED_TO_READ);
    }


    getAuthenticator(userASEID?: string | undefined): A_AUTH_TYPES__IAuthenticator {
        /**
         * In case when the CLIENT_ID and CLIENT_SECRET provided 
         * And their ENV NAMES comes from the ENV CORRESPONDING to the Context NAMESPACE    
         * 
         */
        if (this.CLIENT_ID && this.CLIENT_SECRET)
            return super.getAuthenticator(userASEID);
        /**
         * Otherwise Use the fallback to the A_AUTH Context
         */
        else
            return this.auth.getAuthenticator(userASEID);
    }


    protected async loadExtendedConfigurationsFromEnvironment(): Promise<void> {
        this.API_LOCATION = process.env[this.getConfigurationProperty_ENV_Alias('API_LOCATION')] || this.API_LOCATION;
    }

    protected async loadExtendedConfigurationsFromFile<T = any>(config: T): Promise<void> {
        this.API_LOCATION = config[this.getConfigurationProperty_File_Alias('API_LOCATION')] || this.API_LOCATION;
    }
}

