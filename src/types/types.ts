export type MenuItemOptionSetItem = {
  MenuItemOptionSetItemId?: number;
  Name?: string | null;
  Price?: number | null;
  TaxRateId?: number | null;
  TaxRate?: number | null;
  TaxValue?: number;
  IsAvailable?: boolean;
  DisplayOrder?: number;
  IsDeleted?: boolean;
  Tags?: unknown[];
  NextMenuItemOptionSetId?: number | null;
  PublicId?: string;
  ImageName?: string | null;
  ImageUrl?: string | null;
  CellAspectRatio?: number;
  CellLayoutType?: number;
  OptionSetItemMetadata?: unknown[];
};

export type AvailableTime = Partial<{
  BusinessHoursPeriodId: number;
  DayOfWeek: number;
  StartTime: string;
  Period: string;
  StartTimeEarly: string;
  PeriodEarly: string;
}>;

export type MenuItemOptionSet = {
  Name?: string | null;
  MenuItemOptionSetId?: number;
  IsMasterOptionSet?: boolean;
  DisplayOrder?: number;
  MinSelectCount?: number;
  MaxSelectCount?: number;
  IsDeleted?: boolean;
  PublicId?: string;
  MenuItemOptionSetItems?: MenuItemOptionSetItem[];
  ImageName?: string | null;
  ImageUrl?: string | null;
  CellAspectRatio?: number;
  CellLayoutType?: number;
  MinPrice?: number | null;
  MenuItemId?: number;
  MenuItemOptionSetMetadata?: unknown[];
};

export type MenuItem = {
  MenuItemId?: number;
  Name?: string | null;
  Description?: string | null;
  SpicinessRating?: number | null;
  Price?: number | null;
  DisplayOrder?: number;
  IsDeleted?: boolean;
  Alcohol?: boolean;
  Tags?: unknown[];
  PublicId?: string;
  IsAvailable?: boolean;
  MenuItemOptionSets?: MenuItemOptionSet[];
  TaxRate?: number | null;
  TaxRateId?: number | null;
  TaxValue?: number;
  MenuSectionId?: number;
  ImageName?: string | null;
  ImageUrl?: string | null;
  CellAspectRatio?: number;
  CellLayoutType?: number;
  ActualPrice?: number | null;
  DisableVouchers?: boolean;
  ExcludeFromVoucherDiscounting?: boolean;
  DailySpecialHours?: unknown[];
  PriceCanIncrease?: boolean;
  MenuItemMetadata?: unknown[];
};

export type MenuSectionAvailability = {
  MenuSectionId?: number;
  AvailableTimes?: AvailableTime[] | null;
  AvailabilityMode?: number;
};

export type MenuSection = {
  MenuSectionId?: number;
  Name?: string | null;
  Description?: string | null;
  DisplayOrder?: number;
  MenuItems?: MenuItem[];
  PublicId?: string;
  IsDeleted?: boolean;
  IsAvailable?: boolean;
  IsHiddenFromUsers?: boolean;
  ImageName?: string | null;
  ImageUrl?: string | null;
  CellAspectRatio?: number;
  CellLayoutType?: number;
  MenuSectionAvailability?: MenuSectionAvailability | null;
  ConcessionStoreId?: number | null;
  MenuSectionMetadata?: unknown[];
};

export type Menu = {
  MenuId: number;
  MenuVersionNumber: number;
  VersionGuid: string;
  MenuSections?: MenuSection[];
  MenuSectionBehaviour: number;
  DisplaySectionLinks: boolean;
  ConcessionStores?: unknown[];
};
