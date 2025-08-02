export interface Equipment {
  id: string;
  _id?: string;
  name: string;
  description: string;
  imageUrl: string;
  tonnage: string;
  maxHeight?: string;
  maxWeight?: string;
  specifications?: string;
  capabilities?: string[];
  priceRange?: string;
  priceRanges?: string[];
  basePrice?: number;
  hourlyRate?: number;
  baseHours?: number;
  minHours?: number;
  maxHours?: number;
  workingTimeRanges?: string[];
  isPublished: boolean;
  showInService: boolean;
  showInPricing: boolean;
  sortOrder: number;
  iconUrl?: string;
  // SEO 메타데이터
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateEquipmentDto {
  name: string;
  description: string;
  imageUrl?: string;
  isPublished?: boolean;
  sortOrder?: number;
  specifications?: string;
  capabilities?: string[];
  priceRange?: string;
  maxHeight?: string;
  maxWeight?: string;
  tonnage?: string;
  iconUrl?: string;
  priceRanges?: string[];
  basePrice?: number;
  hourlyRate?: number;
  baseHours?: number;
  minHours?: number;
  maxHours?: number;
  workingTimeRanges?: string[];
  showInService?: boolean;
  showInPricing?: boolean;
  // SEO 메타데이터
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

export type UpdateEquipmentDto = Partial<CreateEquipmentDto>;
