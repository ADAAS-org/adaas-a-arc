"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A_ARC_MaskQueryBuilder = exports.A_ARC_EntityMaskQueryBuilder = void 0;
const a_sdk_types_1 = require("@adaas/a-sdk-types");
class A_ARC_EntityMaskQueryBuilder {
    constructor(parent, name) {
        this.parent = parent;
        this.name = name;
        this._ids = [];
        this._versions = [];
        this.allow = this.createProxy(this.parent).allow;
        this.deny = this.createProxy(this.parent).deny;
        this.entity = this.createProxy(this.parent).entity;
        this.scope = this.createProxy(this.parent).scope;
        this.scopes = this.createProxy(this.parent).scopes;
        this.resource = this.createProxy(this.parent).resource;
        this.resources = this.createProxy(this.parent).resources;
        this.action = this.createProxy(this.parent).action;
        this.actions = this.createProxy(this.parent).actions;
    }
    id(id) {
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
    ids(ids) {
        const shouldBeAdded = ids.filter(el => !this._ids.find(e => e === el));
        this._ids.push(...shouldBeAdded);
        return this;
    }
    version(v) {
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
    versions(vs) {
        const shouldBeAdded = vs.filter(el => !this._versions.find(e => e === el));
        this._versions.push(...shouldBeAdded);
        return this;
    }
    createProxy(target) {
        if (!this._proxyParent)
            this._proxyParent = new Proxy(target, {
                get: (obj, prop) => {
                    const origMethod = obj[prop];
                    if (typeof origMethod === 'function') {
                        return (...args) => {
                            this.parent.resources(this.compile());
                            // Call the original method
                            const result = origMethod.apply(obj, args);
                            return result;
                        };
                    }
                    else {
                        return origMethod;
                    }
                }
            });
        return this._proxyParent;
    }
    compile() {
        const result = [];
        if (this._ids.length) {
            this._ids.forEach(id => {
                if (this._versions.length) {
                    this._versions.forEach(v => {
                        result.push(`${this.name}:${id}@${v}`);
                    });
                }
                else {
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
    toString() {
    }
}
exports.A_ARC_EntityMaskQueryBuilder = A_ARC_EntityMaskQueryBuilder;
/**
 * This class provides a wrapper on how to create a proper mask for the ACL rule
 * for the further verification or rule creation
 */
class A_ARC_MaskQueryBuilder {
    constructor() {
        this.namespace = a_sdk_types_1.A_SDK_Context.namespace;
        this._allow = true;
        this._deny = false;
        this._scopes = [];
        this._resources = [];
        this._actions = [];
    }
    allow() {
        this._allow = true;
        this._deny = false;
        return this;
    }
    deny() {
        this._allow = false;
        this._deny = true;
        return this;
    }
    entity(name) {
        return new A_ARC_EntityMaskQueryBuilder(this, name);
    }
    scope(aseid) {
        if (this._scopes.find(e => e === aseid)) {
            return this;
        }
        else {
            this._scopes.push(aseid);
            return this;
        }
    }
    scopes(aseids) {
        const shouldBeAdded = aseids.filter(el => !this._scopes.find(e => e === el));
        this._scopes.push(...shouldBeAdded);
        return this;
    }
    resource(aseid) {
        if (this._resources.find(e => e === aseid)) {
            return this;
        }
        else {
            this._resources.push(aseid);
            return this;
        }
    }
    resources(aseids) {
        const shouldBeAdded = aseids.filter(el => !this._resources.find(e => e === el));
        this._resources.push(...shouldBeAdded);
        return this;
    }
    action(name) {
        if (this._actions.find(e => e === name)) {
            return this;
        }
        else {
            this._actions.push(name);
            return this;
        }
    }
    actions(names) {
        const shouldBeAdded = names.filter(el => !this._actions.find(e => e === el));
        this._actions.push(...shouldBeAdded);
        return this;
    }
    toString() {
        return `${this.namespace}@${this._scopes.length
            ? this._scopes.length > 1
                ? `(${this._scopes.join('|')})`
                : this._scopes[0]
            : '*'}:${this._resources.length
            ? this._resources.length > 1
                ? `(${this._resources.join('|')})`
                : this._resources[0]
            : '*'}/${this._allow
            ? 'Allow'
            : this._deny
                ? 'Deny'
                : '*'}:${this._actions.length ?
            this._actions.length > 1
                ? `(${this._actions.join('|')})`
                : this._actions[0]
            : '*'}`;
    }
}
exports.A_ARC_MaskQueryBuilder = A_ARC_MaskQueryBuilder;
//# sourceMappingURL=A_ARC_MaskQueryBuilder.class.js.map