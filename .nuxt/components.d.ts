
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T


export const TheBrandItem: typeof import("../components/TheBrandItem.vue")['default']
export const TheFeedBackPopup: typeof import("../components/TheFeedBackPopup.vue")['default']
export const TheFooter: typeof import("../components/TheFooter.vue")['default']
export const TheHeader: typeof import("../components/TheHeader.vue")['default']
export const TheItem: typeof import("../components/TheItem.vue")['default']
export const TheItemPopup: typeof import("../components/TheItemPopup.vue")['default']
export const TheMenuItem: typeof import("../components/TheMenuItem.vue")['default']
export const TheNetwork: typeof import("../components/TheNetwork.vue")['default']
export const TheRestaurantMenu: typeof import("../components/TheRestaurantMenu.vue")['default']
export const TheReviewsItem: typeof import("../components/TheReviewsItem.vue")['default']
export const TheVideoPopup: typeof import("../components/TheVideoPopup.vue")['default']
export const UITheBreadcrumbs: typeof import("../components/UI/TheBreadcrumbs.vue")['default']
export const UITheButton: typeof import("../components/UI/TheButton.vue")['default']
export const UITheButtonLink: typeof import("../components/UI/TheButtonLink.vue")['default']
export const UIThePopupVideo: typeof import("../components/UI/ThePopupVideo.vue")['default']
export const UITheRentItem: typeof import("../components/UI/TheRentItem.vue")['default']
export const UITheSectionTitle: typeof import("../components/UI/TheSectionTitle.vue")['default']
export const UITheSwiperMain: typeof import("../components/UI/TheSwiperMain.vue")['default']
export const UITheSwiperPage: typeof import("../components/UI/TheSwiperPage.vue")['default']
export const UITheSwiperPopup: typeof import("../components/UI/TheSwiperPopup.vue")['default']
export const UITheSwiperProduct: typeof import("../components/UI/TheSwiperProduct.vue")['default']
export const BlocksCatalog: typeof import("../components/blocks/Catalog.vue")['default']
export const BlocksFAQ: typeof import("../components/blocks/FAQ.vue")['default']
export const BlocksFormWrapper: typeof import("../components/blocks/FormWrapper.vue")['default']
export const BlocksProjects: typeof import("../components/blocks/Projects.vue")['default']
export const LayoutsCategoriesScreens: typeof import("../components/layouts/categories/Screens.vue")['default']
export const PartialsPagination: typeof import("../components/partials/Pagination.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyTheBrandItem: LazyComponent<typeof import("../components/TheBrandItem.vue")['default']>
export const LazyTheFeedBackPopup: LazyComponent<typeof import("../components/TheFeedBackPopup.vue")['default']>
export const LazyTheFooter: LazyComponent<typeof import("../components/TheFooter.vue")['default']>
export const LazyTheHeader: LazyComponent<typeof import("../components/TheHeader.vue")['default']>
export const LazyTheItem: LazyComponent<typeof import("../components/TheItem.vue")['default']>
export const LazyTheItemPopup: LazyComponent<typeof import("../components/TheItemPopup.vue")['default']>
export const LazyTheMenuItem: LazyComponent<typeof import("../components/TheMenuItem.vue")['default']>
export const LazyTheNetwork: LazyComponent<typeof import("../components/TheNetwork.vue")['default']>
export const LazyTheRestaurantMenu: LazyComponent<typeof import("../components/TheRestaurantMenu.vue")['default']>
export const LazyTheReviewsItem: LazyComponent<typeof import("../components/TheReviewsItem.vue")['default']>
export const LazyTheVideoPopup: LazyComponent<typeof import("../components/TheVideoPopup.vue")['default']>
export const LazyUITheBreadcrumbs: LazyComponent<typeof import("../components/UI/TheBreadcrumbs.vue")['default']>
export const LazyUITheButton: LazyComponent<typeof import("../components/UI/TheButton.vue")['default']>
export const LazyUITheButtonLink: LazyComponent<typeof import("../components/UI/TheButtonLink.vue")['default']>
export const LazyUIThePopupVideo: LazyComponent<typeof import("../components/UI/ThePopupVideo.vue")['default']>
export const LazyUITheRentItem: LazyComponent<typeof import("../components/UI/TheRentItem.vue")['default']>
export const LazyUITheSectionTitle: LazyComponent<typeof import("../components/UI/TheSectionTitle.vue")['default']>
export const LazyUITheSwiperMain: LazyComponent<typeof import("../components/UI/TheSwiperMain.vue")['default']>
export const LazyUITheSwiperPage: LazyComponent<typeof import("../components/UI/TheSwiperPage.vue")['default']>
export const LazyUITheSwiperPopup: LazyComponent<typeof import("../components/UI/TheSwiperPopup.vue")['default']>
export const LazyUITheSwiperProduct: LazyComponent<typeof import("../components/UI/TheSwiperProduct.vue")['default']>
export const LazyBlocksCatalog: LazyComponent<typeof import("../components/blocks/Catalog.vue")['default']>
export const LazyBlocksFAQ: LazyComponent<typeof import("../components/blocks/FAQ.vue")['default']>
export const LazyBlocksFormWrapper: LazyComponent<typeof import("../components/blocks/FormWrapper.vue")['default']>
export const LazyBlocksProjects: LazyComponent<typeof import("../components/blocks/Projects.vue")['default']>
export const LazyLayoutsCategoriesScreens: LazyComponent<typeof import("../components/layouts/categories/Screens.vue")['default']>
export const LazyPartialsPagination: LazyComponent<typeof import("../components/partials/Pagination.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>

export const componentNames: string[]
