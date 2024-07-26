"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A_ARC_MaskQueryBuilder = exports.A_ARC_EntityMaskQueryBuilder = void 0;
const a_sdk_types_1 = require("@adaas/a-sdk-types");
class A_ARC_EntityMaskQueryBuilder {
    constructor(parent) {
        this.parent = parent;
        this._scopes = [];
        this._entities = [];
        this._ids = [];
        this._versions = [];
        this.allow = this.createProxy(this.parent).allow;
        this.deny = this.createProxy(this.parent).deny;
        this.resource = this.createProxy(this.parent).resource;
        this.action = this.createProxy(this.parent).action;
        this.actions = this.createProxy(this.parent).actions;
        this.toString = this.createProxy(this.parent).toString;
    }
    /**
     * Allows to define a scope for the mask
     *
     * @param idOrASEID
     * @returns
     */
    scope(idOrASEID) {
        const scopeId = a_sdk_types_1.A_SDK_CommonHelper.isASEID(idOrASEID)
            ? a_sdk_types_1.A_SDK_CommonHelper.parseASEID(idOrASEID).id
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
    scopes(idsOrASEIDs) {
        const scopeIDS = idsOrASEIDs.map(idOrASEID => a_sdk_types_1.A_SDK_CommonHelper.isASEID(idOrASEID)
            ? a_sdk_types_1.A_SDK_CommonHelper.parseASEID(idOrASEID).id
            : idOrASEID);
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
    entity(name) {
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
    entities(names) {
        const shouldBeAdded = names.filter(el => !this._entities.find(e => e === el));
        this._entities.push(...shouldBeAdded);
        return this;
    }
    id(id) {
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
    ids(ids) {
        const shouldBeAdded = ids.filter(el => !this._ids.find(e => e === el));
        this._ids.push(...shouldBeAdded);
        return this;
    }
    version(v) {
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
    versions(vs) {
        const shouldBeAdded = vs.filter(el => !this._versions.find(e => e === el));
        this._versions.push(...shouldBeAdded);
        return this;
    }
    next() {
        return this._proxyParent;
    }
    createProxy(target) {
        if (!this._proxyParent)
            this._proxyParent = new Proxy(target, {
                get: (obj, prop) => {
                    const origMethod = obj[prop];
                    if (typeof origMethod === 'function') {
                        return (...args) => {
                            this.compile().map(mask => {
                                this.parent.resource(mask);
                            });
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
exports.A_ARC_EntityMaskQueryBuilder = A_ARC_EntityMaskQueryBuilder;
/**
 * This class provides a wrapper on how to create a proper mask for the ACL rule
 * for the further verification or rule creation
 */
class A_ARC_MaskQueryBuilder {
    constructor(_query) {
        this._query = _query;
        this._namespace = a_sdk_types_1.A_SDK_Context.namespace;
        this._allow = true;
        this._deny = false;
        this._resources = [];
        this._actions = [];
    }
    get Namespace() {
        return this._namespace;
    }
    get Scopes() {
        return this._resources.map(e => e.split(':')[0]);
    }
    get Entities() {
        return this._resources.map(e => e.split(':')[1]);
    }
    get IDs() {
        return this._resources.map(e => e.split(':')[2]);
    }
    get Versions() {
        return this._resources.map(e => e.split('@')[1]);
    }
    get Actions() {
        return this._actions;
    }
    raw(query) {
        this._query = query;
        return;
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
    /**
     * Not mandatory to use, but allows to define a namespace for the mask
     *
     * @param ns
     * @returns
     */
    namespace(ns) {
        this._namespace = ns;
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
    scope(idOrASEID) {
        return new A_ARC_EntityMaskQueryBuilder(this).scope(idOrASEID);
    }
    scopes(idsOrASEIDs) {
        return new A_ARC_EntityMaskQueryBuilder(this).scopes(idsOrASEIDs);
    }
    entity(name) {
        return new A_ARC_EntityMaskQueryBuilder(this).entity(name);
    }
    entities(names) {
        return new A_ARC_EntityMaskQueryBuilder(this).entities(names);
    }
    id(id) {
        return new A_ARC_EntityMaskQueryBuilder(this).id(id);
    }
    ids(ids) {
        return new A_ARC_EntityMaskQueryBuilder(this).ids(ids);
    }
    version(v) {
        return new A_ARC_EntityMaskQueryBuilder(this).version(v);
    }
    versions(vs) {
        return new A_ARC_EntityMaskQueryBuilder(this).versions(vs);
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
        return this._query
            ? this._query
            : `${this._namespace}@${this._resources.length
                ? this._resources.length > 1
                    ? `(${this._resources.join('|')})`
                    : this._resources[0]
                : '*:*@*'}/${this._allow
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