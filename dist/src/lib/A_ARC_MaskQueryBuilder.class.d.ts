export declare class A_ARC_EntityMaskQueryBuilder {
    private parent;
    private _proxyParent;
    private _scopes;
    private _entities;
    private _ids;
    private _versions;
    constructor(parent: A_ARC_MaskQueryBuilder);
    /**
     * Allows to define a scope for the mask
     *
     * @param idOrASEID
     * @returns
     */
    scope(idOrASEID: string): Omit<this, 'scopes' | 'scope'>;
    /**
     * Allows to define multiple scopes for the mask
     *
     * @param idsOrASEIDs
     * @returns
     */
    scopes(idsOrASEIDs: string[]): Omit<this, 'scopes' | 'scope'>;
    /**
     * Allows to define a single entity for the mask
     *
     * @param name
     * @returns
     */
    entity(name: string): Omit<this, 'entities' | 'entity'>;
    /**
     * Allows to define multiple entities for the mask
     *
     * @param names
     * @returns
     */
    entities(names: Array<string>): Omit<this, 'entities' | 'entity'>;
    id(id: string): Omit<this, 'id' | 'ids'>;
    /**
     * !!! NOTE: in case multiple versions provided ids Mask will be applied for ALL Versions
     * EXAMPLE:
     * ids:[0001,0002]
     * versions:[v1,v2]
     * result: [0001@v1, 0001@v2, 0002@v1, 0002@v2]
     * All valid
     *
     * @param ids
     * @returns
     */
    ids(ids: string[]): Omit<this, 'id' | 'ids'>;
    version(v: string): Omit<this, 'version' | 'versions'>;
    /**
     * !!! NOTE: in case multiple ids provided versions Mask will be applied for ALL IDs
     * EXAMPLE:
     * ids:[0001,0002]
     * versions:[v1,v2]
     * result: [0001@v1, 0001@v2, 0002@v1, 0002@v2]
     * All valid
     *
     * @param vs
     * @returns
     */
    versions(vs: string[]): Omit<this, 'version' | 'versions'>;
    next(): A_ARC_MaskQueryBuilder;
    allow: () => A_ARC_MaskQueryBuilder;
    deny: () => A_ARC_MaskQueryBuilder;
    resource: (aseid: string) => A_ARC_MaskQueryBuilder;
    action: (name: string) => A_ARC_MaskQueryBuilder;
    actions: (names: string[]) => A_ARC_MaskQueryBuilder;
    toString: () => string;
    private createProxy;
    private compile;
}
/**
 * This class provides a wrapper on how to create a proper mask for the ACL rule
 * for the further verification or rule creation
 */
export declare class A_ARC_MaskQueryBuilder {
    private _query?;
    private namespace;
    private _allow;
    private _deny;
    private _resources;
    private _actions;
    constructor(_query?: string | undefined);
    get Namespace(): string;
    get Scopes(): string[];
    get Entities(): string[];
    get IDs(): string[];
    get Versions(): string[];
    get Actions(): string[];
    raw(query: string): void;
    allow(): this;
    deny(): this;
    resource(aseid: string): this;
    scope(idOrASEID: string): Omit<A_ARC_EntityMaskQueryBuilder, 'scopes' | 'scope'>;
    scopes(idsOrASEIDs: string[]): Omit<A_ARC_EntityMaskQueryBuilder, 'scopes' | 'scope'>;
    entity(name: string): Omit<A_ARC_EntityMaskQueryBuilder, 'entities' | 'entity'>;
    entities(names: Array<string>): Omit<A_ARC_EntityMaskQueryBuilder, 'entities' | 'entity'>;
    id(id: string): Omit<A_ARC_EntityMaskQueryBuilder, 'id' | 'ids'>;
    ids(ids: string[]): Omit<A_ARC_EntityMaskQueryBuilder, 'id' | 'ids'>;
    version(v: string): Omit<A_ARC_EntityMaskQueryBuilder, 'version' | 'versions'>;
    versions(vs: string[]): Omit<A_ARC_EntityMaskQueryBuilder, 'version' | 'versions'>;
    action(name: string): this;
    actions(names: Array<string>): this;
    toString(): string;
}
