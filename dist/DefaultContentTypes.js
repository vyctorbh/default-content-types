"use strict";
/**
 * The Content Repository contains many different types of *Content*. *Content* vary in structure and even in function.
 *
 * Different types of content contain different fields, are displayed with different views, and may also implement different business logic. The fields, views and business logic of a content is defined by its type - the Content Type.
 *
 * Content Types are defined in a type hierarchy: a Content Type may be inherited from another Content Type - thus automatically inheriting its fields.
 *
 * This module represents the above mentioned type hierarchy by Typescript classes with the Content Types' Fields as properties. With Typescript classes we can derive types from another
 * inheriting its properties just like Content Types in the Content Repository. This module provides us to create an objects with a type so that we can validate on its properties by their
 * types or check the required ones.
 *
 */ /** */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A content type is a reusable set of fields you want to apply to certain content.
 */
class ContentType {
}
exports.ContentType = ContentType;
/**
 * This type is the base content type of the Sense/Net ECMS.
 */
class GenericContent {
}
exports.GenericContent = GenericContent;
/**
 * A content that propagates most of the Fields of another content.
 */
class ContentLink extends GenericContent {
}
exports.ContentLink = ContentLink;
/**
 * A type for binary documents, images, etc.
 */
class File extends GenericContent {
}
exports.File = File;
/**
 */
class DynamicJsonContent extends File {
}
exports.DynamicJsonContent = DynamicJsonContent;
/**
 * Only content of this type can be executed directly (e.g. aspx files).
 */
class ExecutableFile extends File {
}
exports.ExecutableFile = ExecutableFile;
/**
 * HTML file containing a template html fragment for various controls, e.g. action links.
 */
class HtmlTemplate extends File {
}
exports.HtmlTemplate = HtmlTemplate;
/**
 * A special Document type for storing images.
 */
class Image extends File {
}
exports.Image = Image;
/**
 * A special content type for storing preview images.
 */
class PreviewImage extends Image {
}
exports.PreviewImage = PreviewImage;
/**
 * Content type for storing application or module settings in text format or in custom fields.
 */
class Settings extends File {
}
exports.Settings = Settings;
/**
 */
class IndexingSettings extends Settings {
}
exports.IndexingSettings = IndexingSettings;
/**
 */
class LoggingSettings extends Settings {
}
exports.LoggingSettings = LoggingSettings;
/**
 */
class PortalSettings extends Settings {
}
exports.PortalSettings = PortalSettings;
/**
 * A special file for internal use in the system.
 */
class SystemFile extends File {
}
exports.SystemFile = SystemFile;
/**
 * String or binary resource used to localize the system. Its format is the same as the internal part of a standard .Net resx file.
 */
class Resource extends SystemFile {
}
exports.Resource = Resource;
/**
 * Use folders to group content.
 */
class Folder extends GenericContent {
}
exports.Folder = Folder;
/**
 * Generic Content List type.
 */
class ContentList extends Folder {
}
exports.ContentList = ContentList;
/**
 * Aspect base type.
 */
class Aspect extends ContentList {
}
exports.Aspect = Aspect;
/**
 * Base type for item lists. Choose a type inheriting from this to create list of items.
 */
class ItemList extends ContentList {
}
exports.ItemList = ItemList;
/**
 * Use this type to create custom Lists of content with user-defined columns.
 */
class CustomList extends ItemList {
}
exports.CustomList = CustomList;
/**
 * A List type for storing Memos.
 */
class MemoList extends ItemList {
}
exports.MemoList = MemoList;
/**
 * A List type for storing Tasks.
 */
class TaskList extends ItemList {
}
exports.TaskList = TaskList;
/**
 * A base class for special List types for storing documents such as Document Library or Image Library.
 */
class Library extends ContentList {
}
exports.Library = Library;
/**
 * A special List for storing documents.
 */
class DocumentLibrary extends Library {
}
exports.DocumentLibrary = DocumentLibrary;
/**
 * A special List for storing images.
 */
class ImageLibrary extends Library {
}
exports.ImageLibrary = ImageLibrary;
/**
 * This content type is for defining different devices to browse the portal from - e.g. tablet or different phone types.
 */
class Device extends Folder {
}
exports.Device = Device;
/**
 * A centrally-managed group of users and/or computers. Sense/Net ECMS has a built-in domain (BuiltIn), but you can syncronyze external LDAP directories as well.
 */
class Domain extends Folder {
}
exports.Domain = Domain;
/**
 * This is the container type for Domains. Only a single instance is allowed at /Root/IMS.
 */
class Domains extends Folder {
}
exports.Domains = Domains;
/**
 * Email content type containing attachments as children content.
 */
class Email extends Folder {
}
exports.Email = Email;
/**
 * Organizational Unit (OU) provides a way of classifying objects located in directories.
 */
class OrganizationalUnit extends Folder {
}
exports.OrganizationalUnit = OrganizationalUnit;
/**
 * Sense/Net Content Repository Master node. One installation can have only one Portal Root.
 */
class PortalRoot extends Folder {
}
exports.PortalRoot = PortalRoot;
/**
 * Container for user profiles.
 */
class ProfileDomain extends Folder {
}
exports.ProfileDomain = ProfileDomain;
/**
 * This is the container type for profiles. Only a single instance is allowed at /Root/Profiles.
 */
class Profiles extends Folder {
}
exports.Profiles = Profiles;
/**
 * For internal use only.
 */
class RuntimeContentContainer extends Folder {
}
exports.RuntimeContentContainer = RuntimeContentContainer;
/**
 * This is the container type for sites. Only a single instance is allowed at /Root/Sites.
 */
class Sites extends Folder {
}
exports.Sites = Sites;
/**
 * Use smart folders to group information (content) by Repository query.
 */
class SmartFolder extends Folder {
}
exports.SmartFolder = SmartFolder;
/**
 * System Folders provide a way to store configuration and logic.
 */
class SystemFolder extends Folder {
}
exports.SystemFolder = SystemFolder;
/**
 * This is the container type for resources. Only a single instance is allowed at /Root/Localization.
 */
class Resources extends SystemFolder {
}
exports.Resources = Resources;
/**
 * An atomic container for deleted items stored for undeletion.
 */
class TrashBag extends Folder {
}
exports.TrashBag = TrashBag;
/**
 * Collaborative workspace root.
 */
class Workspace extends Folder {
}
exports.Workspace = Workspace;
/**
 * The Site provides a primary entry point to your Portal.
 */
class Site extends Workspace {
}
exports.Site = Site;
/**
 * The system trash bin content type.
 */
class TrashBin extends Workspace {
}
exports.TrashBin = TrashBin;
/**
 * Workspace for handling all information and data for a user.
 */
class UserProfile extends Workspace {
}
exports.UserProfile = UserProfile;
/**
 * You can categorize users and groups into groups according to any criteria.
 */
class Group extends GenericContent {
}
exports.Group = Group;
/**
 * Base content type for list items.
 */
class ListItem extends GenericContent {
}
exports.ListItem = ListItem;
/**
 * Content type for custom listitems.
 */
class CustomListItem extends ListItem {
}
exports.CustomListItem = CustomListItem;
/**
 * A content type for short memos or posts on a subject.
 */
class Memo extends ListItem {
}
exports.Memo = Memo;
/**
 * A content type for defining tasks.
 */
class Task extends ListItem {
}
exports.Task = Task;
/**
 * Content Type for storing Content Queries
 */
class Query extends GenericContent {
}
exports.Query = Query;
/**
 * The basic user type of the Sense/Net ECMS. Use it for intranet and extranet users.
 */
class User extends GenericContent {
}
exports.User = User;
//# sourceMappingURL=DefaultContentTypes.js.map