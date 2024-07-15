export declare class A_ARC_EntityMaskQueryBuilder {
    private parent;
    private name;
    private _proxyParent;
    private _ids;
    private _versions;
    constructor(parent: A_ARC_MaskQueryBuilder, name: string);
    id(id: string): Omit<this, 'ids'>;
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
    ids(ids: string[]): Omit<this, 'id'>;
    version(v: string): Omit<this, 'versions'>;
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
    versions(vs: string[]): Omit<this, 'version'>;
    allow: () => A_ARC_MaskQueryBuilder;
    deny: () => A_ARC_MaskQueryBuilder;
    entity: (name: string) => A_ARC_EntityMaskQueryBuilder;
    scope: (aseidOrId: string) => A_ARC_MaskQueryBuilder;
    scopes: (aseidsOrIds: string[]) => A_ARC_MaskQueryBuilder;
    resource: (aseid: string) => A_ARC_MaskQueryBuilder;
    resources: (aseids: string[]) => A_ARC_MaskQueryBuilder;
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
    private namespace;
    private _allow;
    private _deny;
    private _resources;
    private _actions;
    allow(): this;
    deny(): this;
    entity(name: string): A_ARC_EntityMaskQueryBuilder;
    scope(aseidOrId: string): this;
    scopes(aseidsOrIds: string[]): this;
    resource(aseid: string): this;
    resources(aseids: string[]): this;
    action(name: string): this;
    actions(names: Array<string>): this;
    toString(): string;
}
