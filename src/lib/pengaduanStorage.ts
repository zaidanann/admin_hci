import fs from "fs";
import path from "path";
import { Complaint } from "@/types";

const DATA_DIR = path.join(process.cwd(), "data");
const FILE_PATH = path.join(DATA_DIR, "pengaduan.json");

function ensureDataFile() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(FILE_PATH)) fs.writeFileSync(FILE_PATH, JSON.stringify([]));
}

export function readAllComplaints(): Complaint[] {
  ensureDataFile();
  try {
    const raw = fs.readFileSync(FILE_PATH, "utf-8");
    return JSON.parse(raw) as Complaint[];
  } catch (err) {
    console.error("Failed reading complaints:", err);
    return [];
  }
}

export function writeAllComplaints(comments: Complaint[]) {
  ensureDataFile();
  fs.writeFileSync(FILE_PATH, JSON.stringify(comments, null, 2));
}

export function addComplaint(payload: Omit<Complaint, "id" | "createdAt" | "updatedAt">): Complaint {
  const list = readAllComplaints();
  const now = new Date().toISOString();
  const newItem: Complaint = {
    ...payload,
    id: Date.now().toString(),
    createdAt: now,
    updatedAt: undefined,
  } as Complaint;
  list.unshift(newItem);
  writeAllComplaints(list);
  return newItem;
}

export function getComplaintById(id: string): Complaint | null {
  const list = readAllComplaints();
  return list.find((c) => c.id === id) ?? null;
}

export function updateComplaint(id: string, updates: Partial<Complaint>): Complaint | null {
  const list = readAllComplaints();
  const idx = list.findIndex((c) => c.id === id);
  if (idx === -1) return null;
  const updated = { ...list[idx], ...updates, updatedAt: new Date().toISOString() } as Complaint;
  list[idx] = updated;
  writeAllComplaints(list);
  return updated;
}

export function deleteComplaint(id: string): boolean {
  const list = readAllComplaints();
  const filtered = list.filter((c) => c.id !== id);
  if (filtered.length === list.length) return false;
  writeAllComplaints(filtered);
  return true;
}
