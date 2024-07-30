import { A_ARC_MaskQueryBuilder } from "src/lib/A_ARC_MaskQueryBuilder.class"
import { A_ARC_Permission } from "src/lib/A_ARC_Permission.class";

export type A_ARC_TYPES__PermissionConstructorParam = {
    name: string,
    code: string,
    masks: Array<A_ARC_MaskQueryBuilder>;
    description?: string,
    icon?: string,
}


export type A_ARC_TYPES__PermissionCRUDResult<
    C extends string | undefined = undefined,
    R extends string | undefined = undefined,
    U extends string | undefined = undefined,
    D extends string | undefined = undefined,
> = (C extends undefined ? {} : C extends string ? Record<C, A_ARC_Permission> : {})
    &
    (R extends undefined ? {} : R extends string ? Record<R, A_ARC_Permission> : {})
    &
    (U extends undefined ? {} : U extends string ? Record<U, A_ARC_Permission> : {})
    &
    (D extends undefined ? {} : D extends string ? Record<D, A_ARC_Permission> : {});
