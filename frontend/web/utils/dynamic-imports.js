import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

/**
 * Creates a dynamically imported component with a loading skeleton
 * @param {Function} importFn - The dynamic import function
 * @param {Object} options - Dynamic import options
 * @param {React.ComponentType} options.loading - Custom loading component
 * @param {boolean} options.ssr - Enable server-side rendering
 * @returns {React.ComponentType} The dynamic component
 */
export function dynamicImport(importFn, { loading: LoadingComponent, ssr = false, ...options } = {}) {
  return dynamic(importFn, {
    loading: () => LoadingComponent || <Skeleton className="w-full h-32" />,
    ssr,
    ...options,
  });
}

/**
 * Prevents server-side rendering for a component
 * @param {Function} importFn - The dynamic import function
 * @param {Object} options - Dynamic import options
 * @returns {React.ComponentType} The client-side only component
 */
export function clientOnly(importFn, options = {}) {
  return dynamicImport(importFn, { ssr: false, ...options });
}

/**
 * Creates a named dynamic import for better debugging
 * @param {string} componentName - The name of the component (for debugging)
 * @param {Function} importFn - The dynamic import function
 * @param {Object} options - Dynamic import options
 * @returns {React.ComponentType} The dynamic component
 */
export function namedDynamic(componentName, importFn, options = {}) {
  return dynamic(importFn, {
    loading: () => <Skeleton className="w-full h-32" />,
    ...options,
    // Add component name for better debugging
    ...(process.env.NODE_ENV === 'development' && {
      // Set a display name for the component
      // This helps with React DevTools and error messages
      loadableGenerated: {
        moduleName: `lazy-${componentName}`,
        webpack: () => [importFn],
      },
    }),
  });
}
