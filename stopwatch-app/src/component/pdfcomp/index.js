import React, { useRef } from "react";
import { jsPDF } from "jspdf";
import "./App.css"; // For optional styling

function PdfApp() {
  const editorRef = useRef(null);

  const downloadPDF = () => {
    const pdf = new jsPDF();
    const content = editorRef.current.innerText;

    const margin = 10;
    const pageHeight = pdf.internal.pageSize.height;
    const lineHeight = 10;
    let yPosition = margin;

    const lines = pdf.splitTextToSize(content, pdf.internal.pageSize.width - 2 * margin);

    lines.forEach((line) => {
      if (yPosition + lineHeight > pageHeight - margin) {
        pdf.addPage();
        yPosition = margin;
      }
      pdf.text(line, margin, yPosition);
      yPosition += lineHeight;
    });

    pdf.save("document.pdf");
  };

  return (
    <div className="App">
      <h1>React Text Editor to PDF</h1>
      <div
        ref={editorRef}
        contentEditable
        id="editor"
        placeholder="Type your text here..."
      >
        This is a rich-text editor. You can type here, format the text, and save it as a PDF.
      </div>
      <button onClick={downloadPDF}>Download as PDF</button>
    </div>
  );
}

export default PdfApp;
