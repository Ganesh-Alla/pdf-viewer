"use client"
import React from 'react'
import { usePDFLoader } from '@/components/pdf-viewer/PDFLoader';
import dynamic from 'next/dynamic';

const PdfClient = () => {
  const { pdfjsLib, error } = usePDFLoader();
  if (!pdfjsLib) return null;
  // Create a client-only wrapper component


const PDFViewer = dynamic(
  () => import('@/components/pdf-viewer/PDFViewer'),
  { ssr: false }
);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
    <div className="mx-auto max-w-3xl">
      <div className="rounded-lg bg-white shadow-sm">
        {error ? (
          <div className="p-4 text-red-500">Error loading PDF: {error}</div>
        ) : (
          <PDFViewer />
        )}
        </div>
      </div>
    </div>
  )
}

export default PdfClient