import { A_SDK_CommonHelper, A_SDK_Context } from "@adaas/a-sdk-types";


export class A_ARC_EntityMaskQueryBuilder {


    private _proxyParent!: A_ARC_MaskQueryBuilder;

    private _scopes: Array<string> = [];
    private _entities: Array<string> = [];
    private _ids: Array<string> = [];
    private _versions: Array<string> = [];

    constructor(
        private parent: A_ARC_MaskQueryBuilder,
    ) {
    }

    /**
     * Allows to define a scope for the mask
     * 
     * @param idOrASEID 
     * @returns 
     */
    scope(idOrASEID: string): Omit<this, 'scopes' | 'scope'> {
        const scopeId = A_SDK_CommonHelper.isASEID(idOrASEID)
            ? A_SDK_CommonHelper.parseASEID(idOrASEID).id
            : idOrASEID;

        if (!this._scopes.find(e => e === scopeId))
            this._scopes.push(scopeId);

        return this;
    }

    /**
     * Allows to define multiple scopes for the mask
     * 
     * @param idsOrASEIDs 
     * @returns 
     */
    scopes(idsOrASEIDs: string[]): Omit<this, 'scopes' | 'scope'> {

        const scopeIDS = idsOrASEIDs.map(idOrASEID =>
            A_SDK_CommonHelper.isASEID(idOrASEID)
                ? A_SDK_CommonHelper.parseASEID(idOrASEID).id
                : idOrASEID
        );

        const shouldBeAdded = scopeIDS.filter(el => !this._scopes.find(e => e === el));

        this._scopes.push(...shouldBeAdded);
        return this;
    }

    /**
     * Allows to define a single entity for the mask
     * 
     * @param name 
     * @returns 
     */
    entity(name: string): Omit<this, 'entities' | 'entity'> {
        if (!this._entities.find(e => e === name))
            this._entities.push(name);

        return this;
    }


    /**
     * Allows to define multiple entities for the mask
     * 
     * @param names 
     * @returns 
     */
    entities(names: Array<string>): Omit<this, 'entities' | 'entity'> {
        const shouldBeAdded = names.filter(el => !this._entities.find(e => e === el));

        this._entities.push(...shouldBeAdded);
        return this;
    }


    id(id: string): Omit<this, 'id' | 'ids'> {
        if (!this._ids.find(e => e === id))
            this._ids.push(id);

        return this;
    }

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
    ids(ids: string[]): Omit<this, | 'id' | 'ids'> {
        const shouldBeAdded = ids.filter(el => !this._ids.find(e => e === el));

        this._ids.push(...shouldBeAdded);
        return this;

    }

    version(v: string): Omit<this, 'version' | 'versions'> {
        if (!this._versions.find(e => e === v))
            this._versions.push(v);

        return this;
    }

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
    versions(vs: string[]): Omit<this, 'version' | 'versions'> {
        const shouldBeAdded = vs.filter(el => !this._versions.find(e => e === el));

        this._versions.push(...shouldBeAdded);
        return this;
    }


    next(): A_ARC_MaskQueryBuilder {
        return this._proxyParent;
    }

    allow = this.createProxy(this.parent).allow;
    deny = this.createProxy(this.parent).deny;
    resource = this.createProxy(this.parent).resource;
    action = this.createProxy(this.parent).action;
    actions = this.createProxy(this.parent).actions;
    toString = this.createProxy(this.parent).toString;


    private createProxy(target: A_ARC_MaskQueryBuilder): A_ARC_MaskQueryBuilder {
        if (!this._proxyParent)
            this._proxyParent = new Proxy(target, {
                get: (obj, prop) => {

                    const origMethod = obj[prop as keyof typeof obj];
                    if (typeof origMethod === 'function') {
                        return (...args: any[]) => {
                            this.compile().map(mask => {
                                this.parent.resource(mask)
                            });

                            // Call the original method
                            const result = (origMethod as any).apply(obj, args);

                            return result;
                        };
                    } else {
                        return origMethod;
                    }
                }
            });
        return this._proxyParent;
    }

    private compile(): Array<string> {
        const result: Array<string> = [];

        this._scopes = this._scopes.length ? this._scopes : ['*'];
        this._entities = this._entities.length ? this._entities : ['*'];
        this._ids = this._ids.length ? this._ids : ['*'];
        this._versions = this._versions.length ? this._versions : ['*'];

        for (const scope of this._scopes) {
            for (const entity of this._entities) {
                for (const id of this._ids) {
                    for (const version of this._versions) {
                        result.push(`${scope}:${entity}:${id}@${version}`);
                    }
                }
            }
        }

        return result;
    }

}



/**
 * This class provides a wrapper on how to create a proper mask for the ACL rule 
 * for the further verification or rule creation
 */
export class A_ARC_MaskQueryBuilder {

    private namespace: string = A_SDK_Context.namespace;

    private _allow: boolean = true;
    private _deny: boolean = false;
    private _resources: Array<string> = [];
    private _actions: Array<string> = [];


    constructor(
        private _query?: string
    ) {
    }

    raw(query: string) {
        this._query = query;
        return
    }


    allow(): this {
        this._allow = true;
        this._deny = false;

        return this;
    }


    deny(): this {
        this._allow = false;
        this._deny = true;

        return this;
    }


    resource(aseid: string): this {
        if (this._resources.find(e => e === aseid)) {
            return this;
        }
        else {
            this._resources.push(aseid);
            return this;
        }
    }

    scope(idOrASEID: string): Omit<A_ARC_EntityMaskQueryBuilder, 'scopes' | 'scope'> {
        return new A_ARC_EntityMaskQueryBuilder(this).scope(idOrASEID);
    }

    scopes(idsOrASEIDs: string[]): Omit<A_ARC_EntityMaskQueryBuilder, 'scopes' | 'scope'> {
        return new A_ARC_EntityMaskQueryBuilder(this).scopes(idsOrASEIDs);
    }

    entity(name: string): Omit<A_ARC_EntityMaskQueryBuilder, 'entities' | 'entity'> {
        return new A_ARC_EntityMaskQueryBuilder(this).entity(name);
    }

    entities(names: Array<string>): Omit<A_ARC_EntityMaskQueryBuilder, 'entities' | 'entity'> {
        return new A_ARC_EntityMaskQueryBuilder(this).entities(names);
    }

    id(id: string): Omit<A_ARC_EntityMaskQueryBuilder, 'id' | 'ids'> {
        return new A_ARC_EntityMaskQueryBuilder(this).id(id);
    }

    ids(ids: string[]): Omit<A_ARC_EntityMaskQueryBuilder, 'id' | 'ids'> {
        return new A_ARC_EntityMaskQueryBuilder(this).ids(ids);
    }

    version(v: string): Omit<A_ARC_EntityMaskQueryBuilder, 'version' | 'versions'> {
        return new A_ARC_EntityMaskQueryBuilder(this).version(v);
    }

    versions(vs: string[]): Omit<A_ARC_EntityMaskQueryBuilder, 'version' | 'versions'> {
        return new A_ARC_EntityMaskQueryBuilder(this).versions(vs);
    }



    action(name: string) {
        if (this._actions.find(e => e === name)) {
            return this;
        }
        else {
            this._actions.push(name);
            return this;
        }
    }


    actions(names: Array<string>) {
        const shouldBeAdded = names.filter(el => !this._actions.find(e => e === el));

        this._actions.push(...shouldBeAdded);
        return this;
    }


    toString() {
        return this._query
            ? this._query
            : `${this.namespace
            }@${this._resources.length
                ? this._resources.length > 1
                    ? `(${this._resources.join('|')})`
                    : this._resources[0]
                : '*:*@*'
            }/${this._allow
                ? 'Allow'
                : this._deny
                    ? 'Deny'
                    : '*'
            }:${this._actions.length ?
                this._actions.length > 1
                    ? `(${this._actions.join('|')})`
                    : this._actions[0]
                : '*'
            }`
    }
}