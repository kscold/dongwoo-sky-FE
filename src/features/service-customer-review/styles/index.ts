// Layout styles
export {
  pageWrapper,
  container,
  header,
  title,
  subtitle,
  backButton,
  loadingState,
  errorState,
  emptyState,
  spinner,
  errorMessage
} from "./layout.css";

// Review card styles
export * from "./review-card.css";

// Pagination styles
export * from "./pagination.css";

// Animation styles
export * from "./animations.css";

// Detail page styles with prefixes to avoid conflicts
export {
  pageWrapper as detailPageWrapper,
  container as detailContainer,
  header as detailHeader,
  headerTop as detailHeaderTop,
  loadingState as detailLoadingState,
  errorState as detailErrorState,
  backButton as detailBackButton,
  breadcrumb as detailBreadcrumb,
  breadcrumbLink as detailBreadcrumbLink,
  separator as detailSeparator,
  current as detailCurrent,
  title as detailTitle,
  ratingSection as detailRatingSection,
  stars as detailStars,
  ratingText as detailRatingText,
  meta as detailMeta,
  customerInfo as detailCustomerInfo,
  customer as detailCustomer,
  company as detailCompany,
  details as detailDetails,
  detail as detailDetail,
  stats as detailStats,
  stat as detailStat,
  date as detailDate,
  imageGallery as detailImageGallery,
  mainImage as detailMainImage,
  image as detailImage,
  thumbnails as detailThumbnails,
  thumbnail as detailThumbnail,
  content as detailContent,
  contentBody as detailContentBody,
  actions as detailActions,
  helpfulButton as detailHelpfulButton,
  backToListButton as detailBackToListButton
} from "./customer-review-page.css";