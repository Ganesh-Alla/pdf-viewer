'use client';

import { useState, useEffect } from 'react';
import type { PDFJSLib } from './types/pdf';
import { setupDOMPolyfills } from '@/components/pdf-viewer/lib/dom-polyfill';
import 'pdfjs-dist/web/pdf_viewer.css';

/**
 * PDF.js library loader component
 * Handles dynamic loading of PDF.js library and PDF document
 */
export function usePDFLoader() {
  const [pdfjsLib, setPdfjsLib] = useState<PDFJSLib | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Load PDF.js library
  useEffect(() => {
    async function loadPdfLibrary() {
      if (typeof window !== 'undefined') {
        try {
          // Set up DOM polyfills needed for PDF.js
          setupDOMPolyfills();
          
          // Dynamically import PDF.js
          const pdfjs = await import('pdfjs-dist');
          // Configure PDF.js worker
          const { GlobalWorkerOptions } = pdfjs;
          GlobalWorkerOptions.workerSrc = new URL(
            "pdfjs-dist/build/pdf.worker.mjs",
            import.meta.url
          ).toString();          
          setPdfjsLib(pdfjs as unknown as PDFJSLib);
        } catch (error) {
          console.error('Error loading PDF.js library:', error);
          setError(`Failed to load PDF.js library: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
      }
    }
    
    loadPdfLibrary();
  }, []);


  return {
    pdfjsLib,
    error
  };
}
