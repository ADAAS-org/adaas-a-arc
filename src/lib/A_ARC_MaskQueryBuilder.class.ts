import { A_SDK_CommonHelper, A_SDK_Context } from "@adaas/a-sdk-types";


export class A_ARC_EntityMaskQueryBuilder {


    private _proxyParent!: A_ARC_MaskQueryBuilder;

    private _ids: Array<string> = [];
    private _versions: Array<string> = [];

    constructor(
        private parent: A_ARC_MaskQueryBuilder,
        private name: string
    ) {
    }


    id(id: string): Omit<this, 'ids'> {
        if (this._ids.find(e => e === id)) {
            return this;
        }
        else {
            this._ids.push(id);
            return this;
        }
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
    ids(ids: string[]): Omit<this, | 'id'> {
        const shouldBeAdded = ids.filter(el => !this._ids.find(e => e === el));

        this._ids.push(...shouldBeAdded);
        return this;

    }

    version(v: string): Omit<this, 'versions'> {
        if (this._versions.find(e => e === v)) {
            return this;
        }
        else {
            this._versions.push(v);
            return this;
        }
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
    versions(vs: string[]): Omit<this, 'version'> {
        const shouldBeAdded = vs.filter(el => !this._versions.find(e => e === el));

        this._versions.push(...shouldBeAdded);
        return this;
    }

    allow = this.createProxy(this.parent).allow;
    deny = this.createProxy(this.parent).deny;
    entity = this.createProxy(this.parent).entity;
    scope = this.createProxy(this.parent).scope;
    scopes = this.createProxy(this.parent).scopes;
    resource = this.createProxy(this.parent).resource;
    resources = this.createProxy(this.parent).resources;
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
                            this.parent.resources(this.compile())

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

        if (this._ids.length) {
            this._ids.forEach(id => {
                if (this._versions.length) {
                    this._versions.forEach(v => {
                        result.push(`${this.name}:${id}@${v}`);
                    });
                } else {
                    result.push(`${this.name}:${id}@*`);
                }
            });
        }
        else {
            if (this._versions.length) {
                this._versions.forEach(v => {
                    result.push(`${this.name}:*@${v}`);
                });
            }
            else {
                result.push(`${this.name}:*@*`);
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


    entity(name: string): A_ARC_EntityMaskQueryBuilder {
        return new A_ARC_EntityMaskQueryBuilder(this, name);
    }


    scope(aseidOrId: string): this {
        const scopeId = A_SDK_CommonHelper.isASEID(aseidOrId)
            ? A_SDK_CommonHelper.parseASEID(aseidOrId).id
            : aseidOrId;

        const targetResourceMask = `${scopeId}:*:*@*`;

        if (this._resources.find(e => e === targetResourceMask)) {
            return this;
        }
        else {
            this._resources.push(targetResourceMask);
            return this;
        }
    }

    scopes(aseidsOrIds: string[]): this {

        aseidsOrIds.forEach(aseidOrId => {
            const scopeId = A_SDK_CommonHelper.isASEID(aseidOrId)
                ? A_SDK_CommonHelper.parseASEID(aseidOrId).id
                : aseidOrId;

            const targetResourceMask = `${scopeId}:*:*@*`;

            if (!this._resources.find(e => e === targetResourceMask)) {
                this._resources.push(targetResourceMask);
            }
        });

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


    resources(aseids: string[]): this {
        const shouldBeAdded = aseids.filter(el => !this._resources.find(e => e === el));

        this._resources.push(...shouldBeAdded);
        return this;
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
        return `${this.namespace
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