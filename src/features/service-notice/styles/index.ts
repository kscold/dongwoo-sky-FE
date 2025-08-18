// Layout styles
export {
  pageWrapper,
  container,
  header,
  title,
  subtitle,
  backButton,
  loading,
  error,
  empty,
  emptyState,
  spinner,
  errorMessage
} from "./layout.css";

// Card styles  
export {
  grid,
  card,
  imageContainer,
  image,
  imagePlaceholder,
  content,
  meta,
  metaItem,
  date,
  pinnedBadge as cardPinnedBadge,
  priorityBadge as cardPriorityBadge,
  priorityHigh as cardPriorityHigh,
  priorityMedium as cardPriorityMedium,
  priorityLow as cardPriorityLow,
  cardTitle,
  description,
  stats,
  stat,
  // Aliased exports for compatibility
  card as noticeCard,
  imageContainer as noticeImageContainer,
  image as noticeImage,
  imagePlaceholder as noticeImagePlaceholder,
  content as noticeContent,
  meta as noticeMeta,
  date as noticeDate,
  pinnedBadge as noticePinnedBadge,
  priorityBadge as noticePriorityBadge,
  priorityHigh as noticePriorityHigh,
  priorityMedium as noticePriorityMedium,
  priorityLow as noticePriorityLow,
  cardTitle as noticeTitle,
  description as noticeDescription
} from "./notice-card.css";

// Pagination styles
export * from "./pagination.css";

// Animation styles
export * from "./animations.css";

// Detail page styles with prefixed names to avoid conflicts
export {
  container as detailContainer,
  header as detailHeader,
  backButton as detailBackButton,
  breadcrumb as detailBreadcrumb,
  breadcrumbLink as detailBreadcrumbLink,
  separator as detailSeparator,
  current as detailCurrent,
  noticeContainer,
  noticeHeader,
  titleSection,
  title as detailTitle,
  summary as detailSummary,
  metaInfo as detailMetaInfo,
  metaItem as detailMetaItem,
  metaItemIcon as detailMetaItemIcon,
  contentSection as detailContentSection,
  content as detailContent,
  contentParagraph as detailContentParagraph,
  contentImage as detailContentImage,
  navigationSection as detailNavigationSection,
  divider as detailDivider,
  navigationButtons as detailNavigationButtons,
  listButton as detailListButton,
  relatedSection as detailRelatedSection,
  sectionTitle as detailSectionTitle,
  viewAllLink as detailViewAllLink,
  priorityBadge as detailPriorityBadge,
  priorityHigh as detailPriorityHigh,
  priorityMedium as detailPriorityMedium,
  priorityLow as detailPriorityLow,
  pinnedBadge as detailPinnedBadge,
  errorContainer as detailErrorContainer,
  errorIcon as detailErrorIcon,
  errorTitle as detailErrorTitle,
  errorMessage as detailErrorMessage,
  // Non-prefixed direct exports for NoticeDetail component
  breadcrumb,
  breadcrumbLink,
  separator,
  current,
  summary,
  metaInfo,
  metaItemIcon,
  contentSection,
  contentImage,
  navigationSection,
  divider,
  navigationButtons,
  listButton,
  priorityBadge,
  priorityHigh,
  priorityMedium,
  priorityLow,
  pinnedBadge,
  // Compatibility aliases
  breadcrumb as headerTop,
  separator as breadcrumbSeparator,
  container as noticeDetailContainer,
  content as detailDescription,
  contentImage as detailImage,
  contentSection as detailImageWrapper
} from "./notice-detail.css";

// Notice legacy styles (for compatibility)
export * from "./notice.css";