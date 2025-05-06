import React from "react";
import {
	Root,
	ZoomMenu,
	PageNavigation,
	DocumentMenu,
	Pages,
	Page,
	CanvasLayer,
	TextLayer,
	AnnotationLayer,
	HighlightLayer,
} from "./index";

const PDFViewer = () => {
	return (
		<Root
			source={"https://arxiv.org/pdf/2404.15040"}
			className="h-[700px] w-full border overflow-hidden rounded-lg"
			loader={<div className="p-4">Loading...</div>}
		>
			<div className="p-1 relative flex justify-between border-b">
				<ZoomMenu />
				<PageNavigation />
				<DocumentMenu documentUrl={"https://arxiv.org/pdf/2404.15040"} />
			</div>
			<Pages>
				<Page>
					<CanvasLayer />
					<TextLayer />
					<AnnotationLayer />
					<HighlightLayer />
				</Page>
			</Pages>
		</Root>
	);
};

export default PDFViewer;