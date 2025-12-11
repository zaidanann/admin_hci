import { NextResponse } from "next/server";
import { getComplaintById, updateComplaint, deleteComplaint } from "@/lib/pengaduanStorage";

export function GET(_req: Request, { params }: { params: { id: string } }) {
  const id = params.id;
  const item = getComplaintById(id);
  if (!item) return NextResponse.json({ success: false, message: "Not found" }, { status: 404 });
  return NextResponse.json({ success: true, data: item });
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id;
    const body = await req.json();
    const updated = updateComplaint(id, body);
    if (!updated) return NextResponse.json({ success: false, message: "Not found" }, { status: 404 });
    return NextResponse.json({ success: true, data: updated });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, message: "Invalid JSON" }, { status: 400 });
  }
}

export function DELETE(_req: Request, { params }: { params: { id: string } }) {
  const id = params.id;
  const ok = deleteComplaint(id);
  if (!ok) return NextResponse.json({ success: false, message: "Not found" }, { status: 404 });
  return NextResponse.json({ success: true });
}
