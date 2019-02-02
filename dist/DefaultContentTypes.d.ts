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
import * as ComplexTypes from "./ComplexTypes";
import * as Enums from "./Enums";
import { IActionModel } from "./IActionModel";
export declare type ContentReferenceField<T> = ComplexTypes.DeferredObject | T | number;
export declare type ContentListReferenceField<T> = ComplexTypes.DeferredObject | T[] | number[];
export declare type BinaryField = ComplexTypes.MediaResourceObject;
/**
 * A content type is a reusable set of fields you want to apply to certain content.
 */
export declare class ContentType {
    Id: number;
    ParentId?: number;
    VersionId?: number;
    Name: string;
    CreatedById?: number;
    ModifiedById?: number;
    Version?: string;
    Path: string;
    Depth?: number;
    IsSystemContent?: boolean;
    HandlerName?: string;
    ParentTypeName?: string;
    DisplayName?: string;
    Description?: string;
    Icon?: string;
    Binary?: ComplexTypes.MediaResourceObject;
    CreatedBy?: ContentReferenceField<GenericContent>;
    CreationDate?: string;
    ModifiedBy?: ContentReferenceField<GenericContent>;
    ModificationDate?: string;
    EnableLifespan?: boolean;
    Actions?: ContentListReferenceField<IActionModel>;
    Type: string;
}
/**
 * This type is the base content type of the Sense/Net ECMS.
 */
export declare class GenericContent {
    Id: number;
    ParentId?: number;
    OwnerId?: number;
    Owner?: ContentReferenceField<GenericContent>;
    VersionId?: number;
    Icon?: string;
    Name: string;
    CreatedById?: number;
    ModifiedById?: number;
    Version?: string;
    Path: string;
    Depth?: number;
    IsSystemContent?: boolean;
    IsFolder?: boolean;
    DisplayName?: string;
    Description?: string;
    Hidden?: boolean;
    Index?: number;
    EnableLifespan?: boolean;
    ValidFrom?: string;
    ValidTill?: string;
    AllowedChildTypes?: ContentListReferenceField<GenericContent>;
    EffectiveAllowedChildTypes?: ContentListReferenceField<GenericContent>;
    VersioningMode?: Enums.VersioningMode;
    InheritableVersioningMode?: Enums.InheritableVersioningMode;
    CreatedBy?: ContentReferenceField<GenericContent>;
    CreationDate?: string;
    ModifiedBy?: ContentReferenceField<GenericContent>;
    ModificationDate?: string;
    ApprovingMode?: Enums.ApprovingMode;
    InheritableApprovingMode?: Enums.InheritableApprovingMode;
    Locked?: boolean;
    CheckedOutTo?: ContentReferenceField<GenericContent>;
    TrashDisabled?: boolean;
    SavingState?: Enums.SavingState;
    ExtensionData?: string;
    BrowseApplication?: ContentReferenceField<GenericContent>;
    Approvable?: boolean;
    IsTaggable?: boolean;
    Tags?: string;
    IsRateable?: boolean;
    RateStr?: string;
    RateAvg?: number;
    RateCount?: number;
    Rate?: string;
    Publishable?: boolean;
    Versions?: ContentListReferenceField<GenericContent>;
    CheckInComments?: string;
    RejectReason?: string;
    Workspace?: ContentReferenceField<Workspace>;
    BrowseUrl?: string;
    Actions?: ContentListReferenceField<IActionModel>;
    Type: string;
}
/**
 * A content that propagates most of the Fields of another content.
 */
export declare class ContentLink extends GenericContent {
    Link?: ContentReferenceField<GenericContent>;
}
/**
 * A type for binary documents, images, etc.
 */
export declare class File extends GenericContent {
    Binary?: ComplexTypes.MediaResourceObject;
    Size?: number;
    FullSize?: number;
    PageCount?: number;
    MimeType?: string;
    Shapes?: string;
    PageAttributes?: string;
    Watermark?: string;
}
/**
 */
export declare class DynamicJsonContent extends File {
}
/**
 * Only content of this type can be executed directly (e.g. aspx files).
 */
export declare class ExecutableFile extends File {
}
/**
 * HTML file containing a template html fragment for various controls, e.g. action links.
 */
export declare class HtmlTemplate extends File {
    TemplateText?: string;
}
/**
 * A special Document type for storing images.
 */
export declare class Image extends File {
    Keywords?: string;
    DateTaken?: string;
    Width?: number;
    Height?: number;
}
/**
 * A special content type for storing preview images.
 */
export declare class PreviewImage extends Image {
}
/**
 * Content type for storing application or module settings in text format or in custom fields.
 */
export declare class Settings extends File {
    GlobalOnly?: boolean;
}
/**
 */
export declare class IndexingSettings extends Settings {
    TextExtractorInstances?: string;
}
/**
 */
export declare class LoggingSettings extends Settings {
}
/**
 */
export declare class PortalSettings extends Settings {
}
/**
 * A special file for internal use in the system.
 */
export declare class SystemFile extends File {
}
/**
 * String or binary resource used to localize the system. Its format is the same as the internal part of a standard .Net resx file.
 */
export declare class Resource extends SystemFile {
    Downloads?: number;
}
/**
 * Use folders to group content.
 */
export declare class Folder extends GenericContent {
}
/**
 * Generic Content List type.
 */
export declare class ContentList extends Folder {
    ContentListDefinition?: string;
    DefaultView?: string;
    AvailableViews?: ContentListReferenceField<GenericContent>;
    FieldSettingContents?: ContentListReferenceField<GenericContent>;
    AvailableContentTypeFields?: ContentListReferenceField<GenericContent>;
    ListEmail?: string;
    ExchangeSubscriptionId?: string;
    OverwriteFiles?: boolean;
    GroupAttachments?: Enums.GroupAttachments;
    SaveOriginalEmail?: boolean;
    IncomingEmailWorkflow?: ContentReferenceField<GenericContent>;
    OnlyFromLocalGroups?: boolean;
    InboxFolder?: string;
    OwnerWhenVisitor?: ContentReferenceField<User>;
}
/**
 * Aspect base type.
 */
export declare class Aspect extends ContentList {
    AspectDefinition?: string;
}
/**
 * Base type for item lists. Choose a type inheriting from this to create list of items.
 */
export declare class ItemList extends ContentList {
}
/**
 * Use this type to create custom Lists of content with user-defined columns.
 */
export declare class CustomList extends ItemList {
}
/**
 * A List type for storing Memos.
 */
export declare class MemoList extends ItemList {
}
/**
 * A List type for storing Tasks.
 */
export declare class TaskList extends ItemList {
}
/**
 * A base class for special List types for storing documents such as Document Library or Image Library.
 */
export declare class Library extends ContentList {
}
/**
 * A special List for storing documents.
 */
export declare class DocumentLibrary extends Library {
}
/**
 * A special List for storing images.
 */
export declare class ImageLibrary extends Library {
    CoverImage?: ContentReferenceField<Image>;
}
/**
 * This content type is for defining different devices to browse the portal from - e.g. tablet or different phone types.
 */
export declare class Device extends Folder {
    UserAgentPattern?: string;
}
/**
 * A centrally-managed group of users and/or computers. Sense/Net ECMS has a built-in domain (BuiltIn), but you can syncronyze external LDAP directories as well.
 */
export declare class Domain extends Folder {
    SyncGuid?: string;
    LastSync?: string;
}
/**
 * This is the container type for Domains. Only a single instance is allowed at /Root/IMS.
 */
export declare class Domains extends Folder {
}
/**
 * Email content type containing attachments as children content.
 */
export declare class Email extends Folder {
    From?: string;
    Body?: string;
    Sent?: string;
}
/**
 * Organizational Unit (OU) provides a way of classifying objects located in directories.
 */
export declare class OrganizationalUnit extends Folder {
    SyncGuid?: string;
    LastSync?: string;
}
/**
 * Sense/Net Content Repository Master node. One installation can have only one Portal Root.
 */
export declare class PortalRoot extends Folder {
}
/**
 * Container for user profiles.
 */
export declare class ProfileDomain extends Folder {
}
/**
 * This is the container type for profiles. Only a single instance is allowed at /Root/Profiles.
 */
export declare class Profiles extends Folder {
}
/**
 * For internal use only.
 */
export declare class RuntimeContentContainer extends Folder {
}
/**
 * This is the container type for sites. Only a single instance is allowed at /Root/Sites.
 */
export declare class Sites extends Folder {
}
/**
 * Use smart folders to group information (content) by Repository query.
 */
export declare class SmartFolder extends Folder {
    Query?: string;
    EnableAutofilters?: Enums.EnableAutofilters;
    EnableLifespanFilter?: Enums.EnableLifespanFilter;
}
/**
 * System Folders provide a way to store configuration and logic.
 */
export declare class SystemFolder extends Folder {
}
/**
 * This is the container type for resources. Only a single instance is allowed at /Root/Localization.
 */
export declare class Resources extends SystemFolder {
}
/**
 * An atomic container for deleted items stored for undeletion.
 */
export declare class TrashBag extends Folder {
    KeepUntil?: string;
    OriginalPath?: string;
    WorkspaceRelativePath?: string;
    WorkspaceId?: number;
    DeletedContent?: ContentReferenceField<GenericContent>;
}
/**
 * Collaborative workspace root.
 */
export declare class Workspace extends Folder {
    Manager?: ContentReferenceField<User>;
    Deadline?: string;
    IsActive?: boolean;
    WorkspaceSkin?: ContentReferenceField<GenericContent>;
    IsCritical?: boolean;
    IsWallContainer?: boolean;
    IsFollowed?: boolean;
}
/**
 * The Site provides a primary entry point to your Portal.
 */
export declare class Site extends Workspace {
    Language?: Enums.Language;
    EnableClientBasedCulture?: boolean;
    EnableUserBasedCulture?: boolean;
    UrlList?: string;
    StartPage?: ContentReferenceField<GenericContent>;
    LoginPage?: ContentReferenceField<GenericContent>;
    SiteSkin?: ContentReferenceField<GenericContent>;
    DenyCrossSiteAccess?: boolean;
}
/**
 * The system trash bin content type.
 */
export declare class TrashBin extends Workspace {
    MinRetentionTime?: number;
    SizeQuota?: number;
    BagCapacity?: number;
}
/**
 * Workspace for handling all information and data for a user.
 */
export declare class UserProfile extends Workspace {
    User?: ContentReferenceField<User>;
}
/**
 * You can categorize users and groups into groups according to any criteria.
 */
export declare class Group extends GenericContent {
    Members?: ContentListReferenceField<User | Group>;
    SyncGuid?: string;
    LastSync?: string;
}
/**
 * Base content type for list items.
 */
export declare class ListItem extends GenericContent {
}
/**
 * Content type for custom listitems.
 */
export declare class CustomListItem extends ListItem {
    WorkflowsRunning?: boolean;
}
/**
 * A content type for short memos or posts on a subject.
 */
export declare class Memo extends ListItem {
    Date?: string;
    MemoType?: Enums.MemoType;
    SeeAlso?: ContentListReferenceField<GenericContent>;
}
/**
 * A content type for defining tasks.
 */
export declare class Task extends ListItem {
    StartDate?: string;
    DueDate?: string;
    AssignedTo?: ContentListReferenceField<User>;
    Priority?: Enums.Priority;
    Status?: Enums.Status;
    TaskCompletion?: number;
    RemainingDays?: number;
    DueText?: string;
    DueCssClass?: string;
}
/**
 * Content Type for storing Content Queries
 */
export declare class Query extends GenericContent {
    Query?: string;
    QueryType?: Enums.QueryType;
}
/**
 * The basic user type of the Sense/Net ECMS. Use it for intranet and extranet users.
 */
export declare class User extends GenericContent {
    LoginName?: string;
    JobTitle?: string;
    Enabled?: boolean;
    Domain?: string;
    Email?: string;
    FullName?: string;
    ImageRef?: ContentReferenceField<GenericContent>;
    ImageData?: ComplexTypes.MediaResourceObject;
    Avatar?: ComplexTypes.MediaResourceObject;
    Password?: string;
    SyncGuid?: string;
    LastSync?: string;
    Captcha?: string;
    Manager?: ContentReferenceField<User>;
    Department?: string;
    Languages?: string;
    Phone?: string;
    Gender?: Enums.Gender;
    MaritalStatus?: Enums.MaritalStatus;
    BirthDate?: string;
    Education?: string;
    TwitterAccount?: string;
    FacebookURL?: string;
    LinkedInURL?: string;
    Language?: Enums.Language;
    FollowedWorkspaces?: ContentListReferenceField<Workspace>;
    ProfilePath?: string;
    LastLoggedOut?: string;
}
