import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function PlacementCertificate({ studentName, score, startPhase }) {
  const certRef = useRef(null);
  const today = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  const phaseEmojis = { 1: "🌱", 2: "🌿", 3: "🌳" };
  const phaseNames = { 1: "Seed", 2: "Sprout", 3: "Tree" };

  async function handleDownload() {
    const canvas = await html2canvas(certRef.current, { scale: 2, useCORS: true });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({ orientation: "landscape", unit: "px", format: [canvas.width / 2, canvas.height / 2] });
    pdf.addImage(imgData, "PNG", 0, 0, canvas.width / 2, canvas.height / 2);
    pdf.save(`${studentName}-placement-certificate.pdf`);
  }

  return (
    <div className="space-y-4">
      {/* Certificate */}
      <div
        ref={certRef}
        className="bg-white rounded-2xl p-8 text-center relative overflow-hidden"
        style={{
          border: "6px solid #10b981",
          boxShadow: "inset 0 0 0 3px #d1fae5",
          fontFamily: "'Nunito', sans-serif",
        }}
      >
        {/* Corner decorations */}
        <div className="absolute top-3 left-3 text-2xl opacity-40">⭐</div>
        <div className="absolute top-3 right-3 text-2xl opacity-40">⭐</div>
        <div className="absolute bottom-3 left-3 text-2xl opacity-40">⭐</div>
        <div className="absolute bottom-3 right-3 text-2xl opacity-40">⭐</div>

        {/* Header */}
        <div className="mb-2">
          <div className="text-4xl mb-1">🎓</div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">Certificate of Achievement</p>
          <div className="mt-2 mb-3 flex items-center justify-center gap-2">
            <div className="h-px w-16 bg-emerald-200" />
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            <div className="h-px w-16 bg-emerald-200" />
          </div>
        </div>

        {/* Body */}
        <p className="text-sm text-gray-500 mb-1">This is to certify that</p>
        <h2
          className="text-3xl font-extrabold mb-1"
          style={{ color: "#065f46", fontFamily: "'Nunito', sans-serif" }}
        >
          {studentName}
        </h2>
        <p className="text-sm text-gray-500 mb-3">has successfully completed the</p>
        <div
          className="inline-block px-5 py-2 rounded-xl mb-3"
          style={{ backgroundColor: "#d1fae5", color: "#065f46" }}
        >
          <p className="text-base font-bold">Literacy Placement Assessment</p>
        </div>

        <p className="text-sm text-gray-600 mb-1">with a score of</p>
        <p
          className="text-4xl font-extrabold mb-3"
          style={{ color: "#10b981", fontFamily: "'Nunito', sans-serif" }}
        >
          {score}%
        </p>

        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
          style={{ backgroundColor: "#f0fdf4", border: "1px solid #bbf7d0" }}
        >
          <span className="text-lg">{phaseEmojis[startPhase]}</span>
          <span className="text-sm font-bold text-emerald-700">
            Starting Level: Phase {startPhase} — {phaseNames[startPhase]}
          </span>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-center gap-2 mt-2">
          <div className="h-px w-12 bg-emerald-200" />
          <p className="text-xs text-gray-400">{today}</p>
          <div className="h-px w-12 bg-emerald-200" />
        </div>
        <p className="text-[10px] text-gray-300 mt-1 tracking-widest uppercase">TeachWithMe · Literacy Program</p>
      </div>

      {/* Download button */}
      <Button onClick={handleDownload} variant="outline" className="w-full gap-2 rounded-xl">
        <Download className="w-4 h-4" />
        Download Certificate
      </Button>
    </div>
  );
}