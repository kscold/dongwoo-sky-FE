import { ContentListConfig, ContentDetailConfig } from "../types/content"

// Work showcase configuration should come from backend/CMS
export const workShowcaseListConfig: ContentListConfig = {
  pageTitle: "",
  pageSubtitle: "",
  backUrl: "/",
  backButtonText: "",
  baseUrl: "/work-showcases",
  placeholderIcon: "",
  errorMessage: "",
  emptyStateTitle: "",
  emptyStateText: "",
  skeletonVariant: "work-showcase",
  metaFields: [],
  statFields: []
}

export const workShowcaseDetailConfig: ContentDetailConfig = {
  backUrl: "/work-showcases",
  backButtonText: "",
  errorMessage: "",
  errorDescription: "",
  skeletonVariant: "work-showcase",
  headerMetaFields: [],
  detailMetaFields: [],
  statFields: [],
  actionButton: {
    icon: "",
    label: "",
    countKey: "likeCount"
  }
}