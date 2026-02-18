/**
 * Category reference in pet name data
 */
export type PetNameCategoryRef = {
  readonly target_id: string;
};

/**
 * Pet name with full details
 */
export type PetName = {
  readonly id: string;
  readonly title: string;
  readonly definition: string;
  readonly gender: string;
  readonly categories: PetNameCategoryRef[];
};

/**
 * Pet name category with icon assets
 */
export type PetNameCategory = {
  readonly id: string;
  readonly title: string;
  readonly icon_desktop_tablet: string;
  readonly icon_mobile: string;
};
