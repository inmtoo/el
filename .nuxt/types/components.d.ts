
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

interface _GlobalComponents {
  TheBrandItem: typeof import("../../components/TheBrandItem.vue")['default']
  TheFeedBackPopup: typeof import("../../components/TheFeedBackPopup.vue")['default']
  TheFooter: typeof import("../../components/TheFooter.vue")['default']
  TheHeader: typeof import("../../components/TheHeader.vue")['default']
  TheItem: typeof import("../../components/TheItem.vue")['default']
  TheItemPopup: typeof import("../../components/TheItemPopup.vue")['default']
  TheMenuItem: typeof import("../../components/TheMenuItem.vue")['default']
  TheNetwork: typeof import("../../components/TheNetwork.vue")['default']
  TheRestaurantMenu: typeof import("../../components/TheRestaurantMenu.vue")['default']
  TheReviewsItem: typeof import("../../components/TheReviewsItem.vue")['default']
  TheVideoPopup: typeof import("../../components/TheVideoPopup.vue")['default']
  UITheBreadcrumbs: typeof import("../../components/UI/TheBreadcrumbs.vue")['default']
  UITheButton: typeof import("../../components/UI/TheButton.vue")['default']
  UITheButtonLink: typeof import("../../components/UI/TheButtonLink.vue")['default']
  UIThePopupVideo: typeof import("../../components/UI/ThePopupVideo.vue")['default']
  UITheRentItem: typeof import("../../components/UI/TheRentItem.vue")['default']
  UITheSectionTitle: typeof import("../../components/UI/TheSectionTitle.vue")['default']
  UITheSwiperMain: typeof import("../../components/UI/TheSwiperMain.vue")['default']
  UITheSwiperPage: typeof import("../../components/UI/TheSwiperPage.vue")['default']
  UITheSwiperPopup: typeof import("../../components/UI/TheSwiperPopup.vue")['default']
  UITheSwiperProduct: typeof import("../../components/UI/TheSwiperProduct.vue")['default']
  BlocksCatalog: typeof import("../../components/blocks/Catalog.vue")['default']
  BlocksFAQ: typeof import("../../components/blocks/FAQ.vue")['default']
  BlocksFormWrapper: typeof import("../../components/blocks/FormWrapper.vue")['default']
  BlocksProjects: typeof import("../../components/blocks/Projects.vue")['default']
  PartialsPagination: typeof import("../../components/partials/Pagination.vue")['default']
  NuxtWelcome: typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
  NuxtLayout: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  NuxtErrorBoundary: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  ClientOnly: typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
  DevOnly: typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
  ServerPlaceholder: typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
  NuxtLink: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
  NuxtLoadingIndicator: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  NuxtTime: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  NuxtRouteAnnouncer: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  NuxtAnnouncer: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-announcer")['default']
  NuxtImg: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
  NuxtPicture: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
  NuxtPage: typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
  NoScript: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
  Link: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
  Base: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
  Title: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
  Meta: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
  Style: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
  Head: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
  Html: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
  Body: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
  NuxtIsland: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
  LazyTheBrandItem: LazyComponent<typeof import("../../components/TheBrandItem.vue")['default']>
  LazyTheFeedBackPopup: LazyComponent<typeof import("../../components/TheFeedBackPopup.vue")['default']>
  LazyTheFooter: LazyComponent<typeof import("../../components/TheFooter.vue")['default']>
  LazyTheHeader: LazyComponent<typeof import("../../components/TheHeader.vue")['default']>
  LazyTheItem: LazyComponent<typeof import("../../components/TheItem.vue")['default']>
  LazyTheItemPopup: LazyComponent<typeof import("../../components/TheItemPopup.vue")['default']>
  LazyTheMenuItem: LazyComponent<typeof import("../../components/TheMenuItem.vue")['default']>
  LazyTheNetwork: LazyComponent<typeof import("../../components/TheNetwork.vue")['default']>
  LazyTheRestaurantMenu: LazyComponent<typeof import("../../components/TheRestaurantMenu.vue")['default']>
  LazyTheReviewsItem: LazyComponent<typeof import("../../components/TheReviewsItem.vue")['default']>
  LazyTheVideoPopup: LazyComponent<typeof import("../../components/TheVideoPopup.vue")['default']>
  LazyUITheBreadcrumbs: LazyComponent<typeof import("../../components/UI/TheBreadcrumbs.vue")['default']>
  LazyUITheButton: LazyComponent<typeof import("../../components/UI/TheButton.vue")['default']>
  LazyUITheButtonLink: LazyComponent<typeof import("../../components/UI/TheButtonLink.vue")['default']>
  LazyUIThePopupVideo: LazyComponent<typeof import("../../components/UI/ThePopupVideo.vue")['default']>
  LazyUITheRentItem: LazyComponent<typeof import("../../components/UI/TheRentItem.vue")['default']>
  LazyUITheSectionTitle: LazyComponent<typeof import("../../components/UI/TheSectionTitle.vue")['default']>
  LazyUITheSwiperMain: LazyComponent<typeof import("../../components/UI/TheSwiperMain.vue")['default']>
  LazyUITheSwiperPage: LazyComponent<typeof import("../../components/UI/TheSwiperPage.vue")['default']>
  LazyUITheSwiperPopup: LazyComponent<typeof import("../../components/UI/TheSwiperPopup.vue")['default']>
  LazyUITheSwiperProduct: LazyComponent<typeof import("../../components/UI/TheSwiperProduct.vue")['default']>
  LazyBlocksCatalog: LazyComponent<typeof import("../../components/blocks/Catalog.vue")['default']>
  LazyBlocksFAQ: LazyComponent<typeof import("../../components/blocks/FAQ.vue")['default']>
  LazyBlocksFormWrapper: LazyComponent<typeof import("../../components/blocks/FormWrapper.vue")['default']>
  LazyBlocksProjects: LazyComponent<typeof import("../../components/blocks/Projects.vue")['default']>
  LazyPartialsPagination: LazyComponent<typeof import("../../components/partials/Pagination.vue")['default']>
  LazyNuxtWelcome: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  LazyNuxtLayout: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  LazyNuxtErrorBoundary: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  LazyClientOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
  LazyDevOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
  LazyServerPlaceholder: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  LazyNuxtLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  LazyNuxtLoadingIndicator: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  LazyNuxtTime: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  LazyNuxtAnnouncer: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-announcer")['default']>
  LazyNuxtImg: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
  LazyNuxtPicture: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
  LazyNuxtPage: LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
  LazyNoScript: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  LazyLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
  LazyBase: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
  LazyTitle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
  LazyMeta: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
  LazyStyle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
  LazyHead: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
  LazyHtml: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
  LazyBody: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
  LazyNuxtIsland: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
