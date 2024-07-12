import { A_ARC_Context } from "@adaas/a-sdk/global/A_ARC_Context.class";
import { A_ARC_SERVER_DELEGATE__ACLAPI } from "./acl/A_ARC_ACL.api";
import { A_ARC_SERVER_DELEGATE__ResourceAPI } from "./resource/A_ARC_Resource.api";
import { A_ARC_SERVER_DELEGATE__ScopeAPI } from "./scope/A_ARC_Scope.api";

export const ACL = new A_ARC_SERVER_DELEGATE__ACLAPI(A_ARC_Context);
export const Resource = new A_ARC_SERVER_DELEGATE__ResourceAPI(A_ARC_Context);
export const Scope = new A_ARC_SERVER_DELEGATE__ScopeAPI(A_ARC_Context);
