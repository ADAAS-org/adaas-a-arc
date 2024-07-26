import { A_ARC_Context } from "@adaas/a-sdk/global/A_ARC_Context.class";
import { A_ARC_SERVER_COMMANDS__ACLAPI } from "./acl/A_ARC_ACL.api";
import { A_ARC_SERVER_COMMANDS__ResourceAPI } from "./resource/A_ARC_Resource.api";
import { A_ARC_SERVER_COMMANDS__ScopeAPI } from "./scope/A_ARC_Scope.api";
import { A_ARC_SERVER_COMMANDS__PermissionAPI } from "./permission/A_ARC_Permission.api";

export const ACL = new A_ARC_SERVER_COMMANDS__ACLAPI(A_ARC_Context);
export const Resource = new A_ARC_SERVER_COMMANDS__ResourceAPI(A_ARC_Context);
export const Scope = new A_ARC_SERVER_COMMANDS__ScopeAPI(A_ARC_Context);
export const Permission = new A_ARC_SERVER_COMMANDS__PermissionAPI(A_ARC_Context);
