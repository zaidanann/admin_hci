import { NextResponse } from "next/server";
import { readAllComplaints, addComplaint } from "@/lib/pengaduanStorage";
import { Complaint } from "@/types";

// GET /api/pengaduan -> list
export function GET() {
  const list = readAllComplaints();
  return NextResponse.json({ success: true, data: list } as any);
}

// POST /api/pengaduan -> create
export async function POST(req: Request) {
  try {
    const body = await req.json();
    // Basic validation
    if (!body.incidentDescription) {
      return NextResponse.json({ success: false, message: "incidentDescription is required" }, { status: 400 });
    }

    const payload: Omit<Complaint, "id" | "createdAt" | "updatedAt"> = {
      reporterName: body.reporterName || "Anonim",
      reporterContact: body.reporterContact || "",
      reporterStatus: body.reporterStatus || "",
      victimName: body.victimName || "",
      victimContact: body.victimContact || "",
      incidentDescription: body.incidentDescription,
      incidentDate: body.incidentDate || new Date().toISOString().split("T")[0],
      attachments: body.attachments || [],
      status: "baru",
    };

    const created = addComplaint(payload);
    return NextResponse.json({ success: true, data: created });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, message: "Invalid JSON" }, { status: 400 });
  }
}
