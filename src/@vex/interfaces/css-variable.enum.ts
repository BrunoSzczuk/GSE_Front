/**
 * Regex to convert from :root {} to enum
 * Replace:
 * --(.*): (.*);
 * With:
 * '$1' = '--$1',
 */

export enum CSSVariable {
  // Generic
  'container-width' = '--container-width',
  'padding-page' = '--padding-page',
  'padding' = '--padding',
  'padding-16' = '--padding-16',
  'padding-12' = '--padding-12',
  'padding-8' = '--padding-8',
  'padding-4' = '--padding-4',

// Typography
  'font' = '--font',
  'font-weight-medium' = '--font-weight-medium',
  'font-caption' = '--font-caption',
  'font-body-1' = '--font-body-1',
  'font-body-2' = '--font-body-2',
  'font-subheading-1' = '--font-subheading-1',
  'font-subheading-2' = '--font-subheading-2',
  'font-headline' = '--font-headline',
  'font-title' = '--font-title',
  'font-display-1' = '--font-display-1',
  'font-display-2' = '--font-display-2',
  'font-display-3' = '--font-display-3',
  'font-display-4' = '--font-display-4',

// Transitions
  'swift-ease-in-out' = '--swift-ease-in-out',
  'swift-ease-in-out-duration' = '--swift-ease-in-out-duration',
  'swift-ease-in-out-timing-function' = '--swift-ease-in-out-timing-function',
  'swift-ease-out' = '--swift-ease-out',
  'swift-ease-out-duration' = '--swift-ease-out-duration',
  'swift-ease-out-timing-function' = '--swift-ease-out-timing-function',
  'swift-ease-in' = '--swift-ease-in',
  'swift-ease-in-duration' = '--swift-ease-in-duration',
  'swift-ease-in-timing-function' = '--swift-ease-in-timing-function',
  'elevation-transition-duration' = '--elevation-transition-duration',
  'elevation-transition-timing-function' = '--elevation-transition-timing-function',
  'elevation-transition' = '--elevation-transition',

  'text-color' = '--text-color',
  'text-color-light' = '--text-color-light',
  'text-secondary-color' = '--text-secondary-color',
  'text-secondary-color-light' = '--text-secondary-color-light',
  'text-hint' = '--text-hint',
  'text-hint-light' = '--text-hint-light',

// Foreground
  'foreground-divider' = '--foreground-divider',

// Background
  'background-base' = '--background-base',
  'background-card' = '--background-card',
  'background-app-bar' = '--background-app-bar',
  'background-hover' = '--background-hover',

// Elevation
  'elevation-z0' = '--elevation-z0',
  'elevation-z1' = '--elevation-z1',
  'elevation-z2' = '--elevation-z2',
  'elevation-z3' = '--elevation-z3',
  'elevation-z4' = '--elevation-z4',
  'elevation-z5' = '--elevation-z5',
  'elevation-z6' = '--elevation-z6',
  'elevation-z7' = '--elevation-z7',
  'elevation-z8' = '--elevation-z8',
  'elevation-z9' = '--elevation-z9',
  'elevation-z10' = '--elevation-z10',
  'elevation-z11' = '--elevation-z11',
  'elevation-z12' = '--elevation-z12',
  'elevation-z13' = '--elevation-z13',
  'elevation-z14' = '--elevation-z14',
  'elevation-z15' = '--elevation-z15',
  'elevation-z16' = '--elevation-z16',
  'elevation-z17' = '--elevation-z17',
  'elevation-z18' = '--elevation-z18',
  'elevation-z19' = '--elevation-z19',
  'elevation-z20' = '--elevation-z20',

// Sidenav
  'sidenav-width' = '--sidenav-width',
  'sidenav-background' = '--sidenav-background',
  'sidenav-color' = '--sidenav-color',

// Sidenav Item
  'sidenav-item-padding' = '--sidenav-item-padding',
  'sidenav-toolbar-background' = '--sidenav-toolbar-background',
  'sidenav-item-background-active' = '--sidenav-item-background-active',
  'sidenav-item-color' = '--sidenav-item-color',
  'sidenav-item-color-active' = '--sidenav-item-color-active',
  'sidenav-item-icon-color' = '--sidenav-item-icon-color',
  'sidenav-item-icon-color-active' = '--sidenav-item-icon-color-active',
  'sidenav-item-icon-gap' = '--sidenav-item-icon-gap',
  'sidenav-item-icon-size' = '--sidenav-item-icon-size',
  'sidenav-item-dropdown-background' = '--sidenav-item-dropdown-background',
  'sidenav-item-dropdown-background-hover' = '--sidenav-item-dropdown-background-hover',
  'sidenav-item-dropdown-gap' = '--sidenav-item-dropdown-gap',

// Toolbar
  'toolbar-height' = '--toolbar-height',
  'toolbar-background' = '--toolbar-background',
  'toolbar-color' = '--toolbar-color',
  'toolbar-icon-color' = '--toolbar-icon-color',

// Secondary Toolbar
  'secondary-toolbar-height' = '--secondary-toolbar-height',

// Navigation
  'navigation-height' = '--navigation-height',
  'navigation-background' = '--navigation-background',
  'navigation-color' = '--navigation-color',

// Footer
  'footer-height' = '--footer-height',
  'footer-z-index' = '--footer-z-index',
  'footer-background' = '--footer-background',
  'footer-color' = '--footer-color',
  'footer-elevation' = '--footer-elevation',

// Page Layouts
  'page-layout-height' = '--page-layout-height',
  'page-layout-toolbar-height' = '--page-layout-toolbar-height',

// Misc
  'blink-scrollbar-width' = '--blink-scrollbar-width',
  'default-icon-size' = '--default-icon-size',
  'border-radius' = '--border-radius',

// Colors
  'primary-color-50' = '--primary-color-50',
  'primary-color-100' = '--primary-color-100',
  'primary-color-200' = '--primary-color-200',
  'primary-color-300' = '--primary-color-300',
  'primary-color-400' = '--primary-color-400',
  'primary-color-500' = '--primary-color-500',
  'primary-color-600' = '--primary-color-600',
  'primary-color-700' = '--primary-color-700',
  'primary-color-800' = '--primary-color-800',
  'primary-color-900' = '--primary-color-900',
  'primary-color-A100' = '--primary-color-A100',
  'primary-color-A200' = '--primary-color-A200',
  'primary-color-A400' = '--primary-color-A400',
  'primary-color-A700' = '--primary-color-A700',
  'primary-color-contrast-50' = '--primary-color-contrast-50',
  'primary-color-contrast-100' = '--primary-color-contrast-100',
  'primary-color-contrast-200' = '--primary-color-contrast-200',
  'primary-color-contrast-300' = '--primary-color-contrast-300',
  'primary-color-contrast-400' = '--primary-color-contrast-400',
  'primary-color-contrast-500' = '--primary-color-contrast-500',
  'primary-color-contrast-600' = '--primary-color-contrast-600',
  'primary-color-contrast-700' = '--primary-color-contrast-700',
  'primary-color-contrast-800' = '--primary-color-contrast-800',
  'primary-color-contrast-900' = '--primary-color-contrast-900',
  'primary-color-contrast-A100' = '--primary-color-contrast-A100',
  'primary-color-contrast-A200' = '--primary-color-contrast-A200',
  'primary-color-contrast-A400' = '--primary-color-contrast-A400',
  'primary-color-contrast-A700' = '--primary-color-contrast-A700',

// Primary
  'color-primary-50' = '--color-primary-50',
  'color-primary-100' = '--color-primary-100',
  'color-primary-200' = '--color-primary-200',
  'color-primary-300' = '--color-primary-300',
  'color-primary-400' = '--color-primary-400',
  'color-primary-500' = '--color-primary-500',
  'color-primary-600' = '--color-primary-600',
  'color-primary-700' = '--color-primary-700',
  'color-primary-800' = '--color-primary-800',
  'color-primary-900' = '--color-primary-900',
  'color-primary-A100' = '--color-primary-A100',
  'color-primary-A200' = '--color-primary-A200',
  'color-primary-A400' = '--color-primary-A400',
  'color-primary-A700' = '--color-primary-A700',
  'color-primary-contrast-50' = '--color-primary-contrast-50',
  'color-primary-contrast-100' = '--color-primary-contrast-100',
  'color-primary-contrast-200' = '--color-primary-contrast-200',
  'color-primary-contrast-300' = '--color-primary-contrast-300',
  'color-primary-contrast-400' = '--color-primary-contrast-400',
  'color-primary-contrast-500' = '--color-primary-contrast-500',
  'color-primary-contrast-600' = '--color-primary-contrast-600',
  'color-primary-contrast-700' = '--color-primary-contrast-700',
  'color-primary-contrast-800' = '--color-primary-contrast-800',
  'color-primary-contrast-900' = '--color-primary-contrast-900',
  'color-primary-contrast-A100' = '--color-primary-contrast-A100',
  'color-primary-contrast-A200' = '--color-primary-contrast-A200',
  'color-primary-contrast-A400' = '--color-primary-contrast-A400',
  'color-primary-contrast-A700' = '--color-primary-contrast-A700',

// Red
  'color-red-50' = '--color-red-50',
  'color-red-100' = '--color-red-100',
  'color-red-200' = '--color-red-200',
  'color-red-300' = '--color-red-300',
  'color-red-400' = '--color-red-400',
  'color-red-500' = '--color-red-500',
  'color-red-600' = '--color-red-600',
  'color-red-700' = '--color-red-700',
  'color-red-800' = '--color-red-800',
  'color-red-900' = '--color-red-900',
  'color-red-A100' = '--color-red-A100',
  'color-red-A200' = '--color-red-A200',
  'color-red-A400' = '--color-red-A400',
  'color-red-A700' = '--color-red-A700',
  'color-red-contrast-50' = '--color-red-contrast-50',
  'color-red-contrast-100' = '--color-red-contrast-100',
  'color-red-contrast-200' = '--color-red-contrast-200',
  'color-red-contrast-300' = '--color-red-contrast-300',
  'color-red-contrast-400' = '--color-red-contrast-400',
  'color-red-contrast-500' = '--color-red-contrast-500',
  'color-red-contrast-600' = '--color-red-contrast-600',
  'color-red-contrast-700' = '--color-red-contrast-700',
  'color-red-contrast-800' = '--color-red-contrast-800',
  'color-red-contrast-900' = '--color-red-contrast-900',
  'color-red-contrast-A100' = '--color-red-contrast-A100',
  'color-red-contrast-A200' = '--color-red-contrast-A200',
  'color-red-contrast-A400' = '--color-red-contrast-A400',
  'color-red-contrast-A700' = '--color-red-contrast-A700',

// Green
  'color-green-50' = '--color-green-50',
  'color-green-100' = '--color-green-100',
  'color-green-200' = '--color-green-200',
  'color-green-300' = '--color-green-300',
  'color-green-400' = '--color-green-400',
  'color-green-500' = '--color-green-500',
  'color-green-600' = '--color-green-600',
  'color-green-700' = '--color-green-700',
  'color-green-800' = '--color-green-800',
  'color-green-900' = '--color-green-900',
  'color-green-A100' = '--color-green-A100',
  'color-green-A200' = '--color-green-A200',
  'color-green-A400' = '--color-green-A400',
  'color-green-A700' = '--color-green-A700',
  'color-green-contrast-50' = '--color-green-contrast-50',
  'color-green-contrast-100' = '--color-green-contrast-100',
  'color-green-contrast-200' = '--color-green-contrast-200',
  'color-green-contrast-300' = '--color-green-contrast-300',
  'color-green-contrast-400' = '--color-green-contrast-400',
  'color-green-contrast-500' = '--color-green-contrast-500',
  'color-green-contrast-600' = '--color-green-contrast-600',
  'color-green-contrast-700' = '--color-green-contrast-700',
  'color-green-contrast-800' = '--color-green-contrast-800',
  'color-green-contrast-900' = '--color-green-contrast-900',
  'color-green-contrast-A100' = '--color-green-contrast-A100',
  'color-green-contrast-A200' = '--color-green-contrast-A200',
  'color-green-contrast-A400' = '--color-green-contrast-A400',
  'color-green-contrast-A700' = '--color-green-contrast-A700',

// Amber
  'color-amber-50' = '--color-amber-50',
  'color-amber-100' = '--color-amber-100',
  'color-amber-200' = '--color-amber-200',
  'color-amber-300' = '--color-amber-300',
  'color-amber-400' = '--color-amber-400',
  'color-amber-500' = '--color-amber-500',
  'color-amber-600' = '--color-amber-600',
  'color-amber-700' = '--color-amber-700',
  'color-amber-800' = '--color-amber-800',
  'color-amber-900' = '--color-amber-900',
  'color-amber-A100' = '--color-amber-A100',
  'color-amber-A200' = '--color-amber-A200',
  'color-amber-A400' = '--color-amber-A400',
  'color-amber-A700' = '--color-amber-A700',
  'color-amber-contrast-50' = '--color-amber-contrast-50',
  'color-amber-contrast-100' = '--color-amber-contrast-100',
  'color-amber-contrast-200' = '--color-amber-contrast-200',
  'color-amber-contrast-300' = '--color-amber-contrast-300',
  'color-amber-contrast-400' = '--color-amber-contrast-400',
  'color-amber-contrast-500' = '--color-amber-contrast-500',
  'color-amber-contrast-600' = '--color-amber-contrast-600',
  'color-amber-contrast-700' = '--color-amber-contrast-700',
  'color-amber-contrast-800' = '--color-amber-contrast-800',
  'color-amber-contrast-900' = '--color-amber-contrast-900',
  'color-amber-contrast-A100' = '--color-amber-contrast-A100',
  'color-amber-contrast-A200' = '--color-amber-contrast-A200',
  'color-amber-contrast-A400' = '--color-amber-contrast-A400',
  'color-amber-contrast-A700' = '--color-amber-contrast-A700',

// Orange
  'color-orange-50' = '--color-orange-50',
  'color-orange-100' = '--color-orange-100',
  'color-orange-200' = '--color-orange-200',
  'color-orange-300' = '--color-orange-300',
  'color-orange-400' = '--color-orange-400',
  'color-orange-500' = '--color-orange-500',
  'color-orange-600' = '--color-orange-600',
  'color-orange-700' = '--color-orange-700',
  'color-orange-800' = '--color-orange-800',
  'color-orange-900' = '--color-orange-900',
  'color-orange-A100' = '--color-orange-A100',
  'color-orange-A200' = '--color-orange-A200',
  'color-orange-A400' = '--color-orange-A400',
  'color-orange-A700' = '--color-orange-A700',
  'color-orange-contrast-50' = '--color-orange-contrast-50',
  'color-orange-contrast-100' = '--color-orange-contrast-100',
  'color-orange-contrast-200' = '--color-orange-contrast-200',
  'color-orange-contrast-300' = '--color-orange-contrast-300',
  'color-orange-contrast-400' = '--color-orange-contrast-400',
  'color-orange-contrast-500' = '--color-orange-contrast-500',
  'color-orange-contrast-600' = '--color-orange-contrast-600',
  'color-orange-contrast-700' = '--color-orange-contrast-700',
  'color-orange-contrast-800' = '--color-orange-contrast-800',
  'color-orange-contrast-900' = '--color-orange-contrast-900',
  'color-orange-contrast-A100' = '--color-orange-contrast-A100',
  'color-orange-contrast-A200' = '--color-orange-contrast-A200',
  'color-orange-contrast-A400' = '--color-orange-contrast-A400',
  'color-orange-contrast-A700' = '--color-orange-contrast-A700',

// Deep Orange
  'color-deep-orange-50' = '--color-deep-orange-50',
  'color-deep-orange-100' = '--color-deep-orange-100',
  'color-deep-orange-200' = '--color-deep-orange-200',
  'color-deep-orange-300' = '--color-deep-orange-300',
  'color-deep-orange-400' = '--color-deep-orange-400',
  'color-deep-orange-500' = '--color-deep-orange-500',
  'color-deep-orange-600' = '--color-deep-orange-600',
  'color-deep-orange-700' = '--color-deep-orange-700',
  'color-deep-orange-800' = '--color-deep-orange-800',
  'color-deep-orange-900' = '--color-deep-orange-900',
  'color-deep-orange-A100' = '--color-deep-orange-A100',
  'color-deep-orange-A200' = '--color-deep-orange-A200',
  'color-deep-orange-A400' = '--color-deep-orange-A400',
  'color-deep-orange-A700' = '--color-deep-orange-A700',
  'color-deep-orange-contrast-50' = '--color-deep-orange-contrast-50',
  'color-deep-orange-contrast-100' = '--color-deep-orange-contrast-100',
  'color-deep-orange-contrast-200' = '--color-deep-orange-contrast-200',
  'color-deep-orange-contrast-300' = '--color-deep-orange-contrast-300',
  'color-deep-orange-contrast-400' = '--color-deep-orange-contrast-400',
  'color-deep-orange-contrast-500' = '--color-deep-orange-contrast-500',
  'color-deep-orange-contrast-600' = '--color-deep-orange-contrast-600',
  'color-deep-orange-contrast-700' = '--color-deep-orange-contrast-700',
  'color-deep-orange-contrast-800' = '--color-deep-orange-contrast-800',
  'color-deep-orange-contrast-900' = '--color-deep-orange-contrast-900',
  'color-deep-orange-contrast-A100' = '--color-deep-orange-contrast-A100',
  'color-deep-orange-contrast-A200' = '--color-deep-orange-contrast-A200',
  'color-deep-orange-contrast-A400' = '--color-deep-orange-contrast-A400',
  'color-deep-orange-contrast-A700' = '--color-deep-orange-contrast-A700',

  'color-purple-50' = '--color-purple-50',
  'color-purple-100' = '--color-purple-100',
  'color-purple-200' = '--color-purple-200',
  'color-purple-300' = '--color-purple-300',
  'color-purple-400' = '--color-purple-400',
  'color-purple-500' = '--color-purple-500',
  'color-purple-600' = '--color-purple-600',
  'color-purple-700' = '--color-purple-700',
  'color-purple-800' = '--color-purple-800',
  'color-purple-900' = '--color-purple-900',
  'color-purple-A100' = '--color-purple-A100',
  'color-purple-A200' = '--color-purple-A200',
  'color-purple-A400' = '--color-purple-A400',
  'color-purple-A700' = '--color-purple-A700',
  'color-purple-contrast-50' = '--color-purple-contrast-50',
  'color-purple-contrast-100' = '--color-purple-contrast-100',
  'color-purple-contrast-200' = '--color-purple-contrast-200',
  'color-purple-contrast-300' = '--color-purple-contrast-300',
  'color-purple-contrast-400' = '--color-purple-contrast-400',
  'color-purple-contrast-500' = '--color-purple-contrast-500',
  'color-purple-contrast-600' = '--color-purple-contrast-600',
  'color-purple-contrast-700' = '--color-purple-contrast-700',
  'color-purple-contrast-800' = '--color-purple-contrast-800',
  'color-purple-contrast-900' = '--color-purple-contrast-900',
  'color-purple-contrast-A100' = '--color-purple-contrast-A100',
  'color-purple-contrast-A200' = '--color-purple-contrast-A200',
  'color-purple-contrast-A400' = '--color-purple-contrast-A400',
  'color-purple-contrast-A700' = '--color-purple-contrast-A700',

  'color-deep-purple-50' = '--color-deep-purple-50',
  'color-deep-purple-100' = '--color-deep-purple-100',
  'color-deep-purple-200' = '--color-deep-purple-200',
  'color-deep-purple-300' = '--color-deep-purple-300',
  'color-deep-purple-400' = '--color-deep-purple-400',
  'color-deep-purple-500' = '--color-deep-purple-500',
  'color-deep-purple-600' = '--color-deep-purple-600',
  'color-deep-purple-700' = '--color-deep-purple-700',
  'color-deep-purple-800' = '--color-deep-purple-800',
  'color-deep-purple-900' = '--color-deep-purple-900',
  'color-deep-purple-A100' = '--color-deep-purple-A100',
  'color-deep-purple-A200' = '--color-deep-purple-A200',
  'color-deep-purple-A400' = '--color-deep-purple-A400',
  'color-deep-purple-A700' = '--color-deep-purple-A700',
  'color-deep-purple-contrast-50' = '--color-deep-purple-contrast-50',
  'color-deep-purple-contrast-100' = '--color-deep-purple-contrast-100',
  'color-deep-purple-contrast-200' = '--color-deep-purple-contrast-200',
  'color-deep-purple-contrast-300' = '--color-deep-purple-contrast-300',
  'color-deep-purple-contrast-400' = '--color-deep-purple-contrast-400',
  'color-deep-purple-contrast-500' = '--color-deep-purple-contrast-500',
  'color-deep-purple-contrast-600' = '--color-deep-purple-contrast-600',
  'color-deep-purple-contrast-700' = '--color-deep-purple-contrast-700',
  'color-deep-purple-contrast-800' = '--color-deep-purple-contrast-800',
  'color-deep-purple-contrast-900' = '--color-deep-purple-contrast-900',
  'color-deep-purple-contrast-A100' = '--color-deep-purple-contrast-A100',
  'color-deep-purple-contrast-A200' = '--color-deep-purple-contrast-A200',
  'color-deep-purple-contrast-A400' = '--color-deep-purple-contrast-A400',
  'color-deep-purple-contrast-A700' = '--color-deep-purple-contrast-A700',

  'color-cyan-50' = '--color-cyan-50',
  'color-cyan-100' = '--color-cyan-100',
  'color-cyan-200' = '--color-cyan-200',
  'color-cyan-300' = '--color-cyan-300',
  'color-cyan-400' = '--color-cyan-400',
  'color-cyan-500' = '--color-cyan-500',
  'color-cyan-600' = '--color-cyan-600',
  'color-cyan-700' = '--color-cyan-700',
  'color-cyan-800' = '--color-cyan-800',
  'color-cyan-900' = '--color-cyan-900',
  'color-cyan-A100' = '--color-cyan-A100',
  'color-cyan-A200' = '--color-cyan-A200',
  'color-cyan-A400' = '--color-cyan-A400',
  'color-cyan-A700' = '--color-cyan-A700',

  'color-cyan-contrast-50' = '--color-cyan-contrast-50',
  'color-cyan-contrast-100' = '--color-cyan-contrast-100',
  'color-cyan-contrast-200' = '--color-cyan-contrast-200',
  'color-cyan-contrast-300' = '--color-cyan-contrast-300',
  'color-cyan-contrast-400' = '--color-cyan-contrast-400',
  'color-cyan-contrast-500' = '--color-cyan-contrast-500',
  'color-cyan-contrast-600' = '--color-cyan-contrast-600',
  'color-cyan-contrast-700' = '--color-cyan-contrast-700',
  'color-cyan-contrast-800' = '--color-cyan-contrast-800',
  'color-cyan-contrast-900' = '--color-cyan-contrast-900',
  'color-cyan-contrast-A100' = '--color-cyan-contrast-A100',
  'color-cyan-contrast-A200' = '--color-cyan-contrast-A200',
  'color-cyan-contrast-A400' = '--color-cyan-contrast-A400',
  'color-cyan-contrast-A700' = '--color-cyan-contrast-A700',

  'color-teal-50' = '--color-teal-50',
  'color-teal-100' = '--color-teal-100',
  'color-teal-200' = '--color-teal-200',
  'color-teal-300' = '--color-teal-300',
  'color-teal-400' = '--color-teal-400',
  'color-teal-500' = '--color-teal-500',
  'color-teal-600' = '--color-teal-600',
  'color-teal-700' = '--color-teal-700',
  'color-teal-800' = '--color-teal-800',
  'color-teal-900' = '--color-teal-900',
  'color-teal-A100' = '--color-teal-A100',
  'color-teal-A200' = '--color-teal-A200',
  'color-teal-A400' = '--color-teal-A400',
  'color-teal-A700' = '--color-teal-A700',
  'color-teal-contrast-50' = '--color-teal-contrast-50',
  'color-teal-contrast-100' = '--color-teal-contrast-100',
  'color-teal-contrast-200' = '--color-teal-contrast-200',
  'color-teal-contrast-300' = '--color-teal-contrast-300',
  'color-teal-contrast-400' = '--color-teal-contrast-400',
  'color-teal-contrast-500' = '--color-teal-contrast-500',
  'color-teal-contrast-600' = '--color-teal-contrast-600',
  'color-teal-contrast-700' = '--color-teal-contrast-700',
  'color-teal-contrast-800' = '--color-teal-contrast-800',
  'color-teal-contrast-900' = '--color-teal-contrast-900',
  'color-teal-contrast-A100' = '--color-teal-contrast-A100',
  'color-teal-contrast-A200' = '--color-teal-contrast-A200',
  'color-teal-contrast-A400' = '--color-teal-contrast-A400',
  'color-teal-contrast-A700' = '--color-teal-contrast-A700',

  'color-gray-50' = '--color-gray-50',
  'color-gray-100' = '--color-gray-100',
  'color-gray-200' = '--color-gray-200',
  'color-gray-300' = '--color-gray-300',
  'color-gray-400' = '--color-gray-400',
  'color-gray-500' = '--color-gray-500',
  'color-gray-600' = '--color-gray-600',
  'color-gray-700' = '--color-gray-700',
  'color-gray-800' = '--color-gray-800',
  'color-gray-900' = '--color-gray-900',
  'color-gray-A100' = '--color-gray-A100',
  'color-gray-A200' = '--color-gray-A200',
  'color-gray-A400' = '--color-gray-A400',
  'color-gray-A700' = '--color-gray-A700',
  'color-gray-contrast-50' = '--color-gray-contrast-50',
  'color-gray-contrast-100' = '--color-gray-contrast-100',
  'color-gray-contrast-200' = '--color-gray-contrast-200',
  'color-gray-contrast-300' = '--color-gray-contrast-300',
  'color-gray-contrast-400' = '--color-gray-contrast-400',
  'color-gray-contrast-500' = '--color-gray-contrast-500',
  'color-gray-contrast-600' = '--color-gray-contrast-600',
  'color-gray-contrast-700' = '--color-gray-contrast-700',
  'color-gray-contrast-800' = '--color-gray-contrast-800',
  'color-gray-contrast-900' = '--color-gray-contrast-900',
  'color-gray-contrast-A100' = '--color-gray-contrast-A100',
  'color-gray-contrast-A200' = '--color-gray-contrast-A200',
  'color-gray-contrast-A400' = '--color-gray-contrast-A400',
  'color-gray-contrast-A700' = '--color-gray-contrast-A700',

  'color-light-green-50' = '--color-light-green-50',
  'color-light-green-100' = '--color-light-green-100',
  'color-light-green-200' = '--color-light-green-200',
  'color-light-green-300' = '--color-light-green-300',
  'color-light-green-400' = '--color-light-green-400',
  'color-light-green-500' = '--color-light-green-500',
  'color-light-green-600' = '--color-light-green-600',
  'color-light-green-700' = '--color-light-green-700',
  'color-light-green-800' = '--color-light-green-800',
  'color-light-green-900' = '--color-light-green-900',
  'color-light-green-A100' = '--color-light-green-A100',
  'color-light-green-A200' = '--color-light-green-A200',
  'color-light-green-A400' = '--color-light-green-A400',
  'color-light-green-A700' = '--color-light-green-A700',
  'color-light-green-contrast-50' = '--color-light-green-contrast-50',
  'color-light-green-contrast-100' = '--color-light-green-contrast-100',
  'color-light-green-contrast-200' = '--color-light-green-contrast-200',
  'color-light-green-contrast-300' = '--color-light-green-contrast-300',
  'color-light-green-contrast-400' = '--color-light-green-contrast-400',
  'color-light-green-contrast-500' = '--color-light-green-contrast-500',
  'color-light-green-contrast-600' = '--color-light-green-contrast-600',
  'color-light-green-contrast-700' = '--color-light-green-contrast-700',
  'color-light-green-contrast-800' = '--color-light-green-contrast-800',
  'color-light-green-contrast-900' = '--color-light-green-contrast-900',
  'color-light-green-contrast-A100' = '--color-light-green-contrast-A100',
  'color-light-green-contrast-A200' = '--color-light-green-contrast-A200',
  'color-light-green-contrast-A400' = '--color-light-green-contrast-A400',
  'color-light-green-contrast-A700' = '--color-light-green-contrast-A700',

  'color-cyan' = '--color-cyan',
  'color-deep-orange' = '--color-deep-orange',
  'color-deep-purple' = '--color-deep-purple',
  'color-light-green' = '--color-light-green',
  'color-lime' = '--color-lime',
  'color-orange' = '--color-orange',
  'color-pink' = '--color-pink',
  'color-purple' = '--color-purple',
  'color-red' = '--color-red',
  'color-amber' = '--color-amber',
  'color-light-blue' = '--color-light-blue',
  'color-indigo' = '--color-indigo',
  'color-green' = '--color-green',
  'color-yellow' = '--color-yellow',
  'color-teal' = '--color-teal',
  'color-blue' = '--color-blue',
}
