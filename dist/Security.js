"use strict";
// tslint:disable:naming-convention
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Provides metadata about identity kind.
 */
var IdentityKind;
(function (IdentityKind) {
    IdentityKind["All"] = "All";
    IdentityKind["Users"] = "Users";
    IdentityKind["Groups"] = "Groups";
    IdentityKind["OrganizationalUnits"] = "OrganizationalUnits";
    IdentityKind["UsersAndGroups"] = "UsersAndGroups";
    IdentityKind["UsersAndOrganizationalUnits"] = "UsersAndOrganizationalUnits";
    IdentityKind["GroupsAndOrganizationalUnits"] = "GroupsAndOrganizationalUnits";
})(IdentityKind = exports.IdentityKind || (exports.IdentityKind = {}));
/**
 * Provides metadata about permission level.
 */
var PermissionLevel;
(function (PermissionLevel) {
    PermissionLevel["AllowedOrDenied"] = "AllowedOrDenied";
    PermissionLevel["Allowed"] = "Allowed";
    PermissionLevel["Denied"] = "Denied";
})(PermissionLevel = exports.PermissionLevel || (exports.PermissionLevel = {}));
/**
 * Type to provide an Object with the permission information that has to be set.
 */
class PermissionRequestBody {
}
exports.PermissionRequestBody = PermissionRequestBody;
/**
 * Provides metadata about permission values.
 */
var PermissionValues;
(function (PermissionValues) {
    PermissionValues[PermissionValues["undefined"] = 0] = "undefined";
    PermissionValues[PermissionValues["allow"] = 1] = "allow";
    PermissionValues[PermissionValues["deny"] = 2] = "deny";
})(PermissionValues = exports.PermissionValues || (exports.PermissionValues = {}));
/**
 * Provides metadata about permission inheritance.
 */
var Inheritance;
(function (Inheritance) {
    Inheritance["Break"] = "break";
    Inheritance["Unbreak"] = "unbreak";
})(Inheritance = exports.Inheritance || (exports.Inheritance = {}));
//# sourceMappingURL=Security.js.map