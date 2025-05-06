/**
 * Type definitions for PDF.js
 */

export interface PDFDocumentProxy {
  numPages: number;
  getPage: (pageNumber: number) => Promise<PDFPageProxy>;
  destroy: () => Promise<void>;
}

export interface PDFPageProxy {
  getViewport: (options: { scale: number; rotation?: number }) => PDFViewport;
  render: (options: PDFRenderParams) => PDFRenderTask;
  getTextContent: () => Promise<PDFTextContent>;
}

export interface PDFViewport {
  width: number;
  height: number;
  scale: number;
  transform: number[];
}

export interface PDFRenderParams {
  canvasContext: CanvasRenderingContext2D;
  viewport: PDFViewport;
}

export interface PDFRenderTask {
  promise: Promise<void>;
}

export interface PDFRenderError {
  promise?: Promise<void>;
  message?: string;
  name?: string;
}

export interface PDFProgressData {
  loaded: number;
  total: number;
}

export interface PDFJSLib {
  getDocument: (source: string) => PDFDocumentLoadingTask;
  GlobalWorkerOptions: {
    workerSrc: string;
  };
  Util: {
    transform: (matrix1: number[], matrix2: number[]) => number[];
  };
}

export interface PDFDocumentLoadingTask {
  promise: Promise<PDFDocumentProxy>;
  onProgress?: (progressData: PDFProgressData) => void;
}

export interface PDFTextContent {
  items: PDFTextItem[];
  styles: Record<string, PDFTextStyle>;
}

export interface PDFTextStyle {
  fontFamily?: string;
  ascent?: number;
  descent?: number;
  vertical?: boolean;
}

export interface PDFTextItem {
  str: string;
  dir: string;
  transform: number[];
  width: number;
  height: number;
  fontName: string;
}
