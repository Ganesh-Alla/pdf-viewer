/**
 * Type declarations for PDF.js modules
 */

declare module 'pdfjs-dist/build/pdf.mjs' {
  export function renderTextLayer(options: {
    textContent: import('./pdf').PDFTextContent;
    container: HTMLElement;
    viewport: import('./pdf').PDFViewport;
    textDivs: HTMLElement[];
  }): Promise<void>;
}
