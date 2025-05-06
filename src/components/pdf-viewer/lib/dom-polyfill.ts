/**
 * DOM Polyfill for PDF.js
 * 
 * This file provides polyfills for DOM objects that might not be available
 * in certain environments (like Node.js during SSR in Next.js).
 */

export function setupDOMPolyfills() {
  if (typeof window !== 'undefined') {
    // Only run in browser environment
    if (!global.DOMMatrix && window.DOMMatrix) {
      global.DOMMatrix = window.DOMMatrix;
    }
    
    if (!global.Path2D && window.Path2D) {
      global.Path2D = window.Path2D;
    }
    
    if (!global.ImageData && window.ImageData) {
      global.ImageData = window.ImageData;
    }
  }
}
