/**
 * Utility functions untuk testing dan development
 * 
 * Gunakan ini di browser console untuk:
 * - Reset data ke default
 * - Export data
 * - Import data
 */

import { getMembers, getPublications, saveMembers, savePublications } from "@/lib/storage";
import { exampleMembers, examplePublications } from "@/lib/exampleData";

/**
 * Reset semua data ke contoh default
 * Gunakan: window.resetAllData()
 */
export function resetAllData() {
  if (confirm("Yakin ingin mereset SEMUA data ke default? Ini tidak bisa dibatalkan!")) {
    saveMembers(exampleMembers);
    savePublications(examplePublications);
    alert("Data berhasil direset ke default!");
    window.location.reload();
  }
}

/**
 * Export semua data ke JSON file
 * Gunakan: window.exportData()
 */
export function exportData() {
  const members = getMembers();
  const publications = getPublications();
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");

  const data = {
    exportDate: new Date().toISOString(),
    members,
    publications,
  };

  const jsonString = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonString], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `ppkpt-data-${timestamp}.json`;
  link.click();
  URL.revokeObjectURL(url);

  console.log("Data exported successfully!");
}

/**
 * Import data dari JSON file
 * Gunakan: window.importData(jsonObject)
 */
export function importData(jsonData: string) {
  try {
    const parsed = JSON.parse(jsonData);
    if (parsed.members && parsed.publications) {
      saveMembers(parsed.members);
      savePublications(parsed.publications);
      alert("Data berhasil diimport!");
      window.location.reload();
    } else {
      alert("Format JSON tidak valid!");
    }
  } catch (error) {
    console.error("Import error:", error);
    alert("Gagal mengimport data!");
  }
}

/**
 * Tampilkan statistik data
 * Gunakan: window.showStats()
 */
export function showStats() {
  const members = getMembers();
  const publications = getPublications();

  console.log("=== PPKPT DATA STATISTICS ===");
  console.log(`Total Members: ${members.length}`);
  console.log(`Members by Level:`);
  console.log(`  - Level 1: ${members.filter((m) => m.level === 1).length}`);
  console.log(`  - Level 2: ${members.filter((m) => m.level === 2).length}`);
  console.log(`  - Level 3: ${members.filter((m) => m.level === 3).length}`);
  console.log(`\nTotal Publications: ${publications.length}`);
  console.log(`Publications by Category:`);
  console.log(
    `  - Tulisan: ${publications.filter((p) => p.category === "tulisan").length}`
  );
  console.log(
    `  - Laporan: ${publications.filter((p) => p.category === "laporan").length}`
  );
  console.log("============================");
}

/**
 * Clear semua data (localStorage)
 * Gunakan: window.clearAllStorage()
 */
export function clearAllStorage() {
  if (
    confirm(
      "Yakin ingin menghapus SEMUA data dari localStorage? Tidak bisa dibatalkan!"
    )
  ) {
    localStorage.removeItem("org_members");
    localStorage.removeItem("publications");
    alert("Storage berhasil dihapus!");
    window.location.reload();
  }
}

// Tambahkan ke window object agar bisa dipanggil dari console
if (typeof window !== "undefined") {
  (window as any).resetAllData = resetAllData;
  (window as any).exportData = exportData;
  (window as any).importData = importData;
  (window as any).showStats = showStats;
  (window as any).clearAllStorage = clearAllStorage;

  console.log("%c🚀 PPKPT Admin Utils Loaded", "color: blue; font-size: 16px");
  console.log("Available commands:");
  console.log("  - resetAllData()          : Reset data ke default");
  console.log("  - exportData()            : Export data ke JSON file");
  console.log("  - importData(json)        : Import data dari JSON");
  console.log("  - showStats()             : Lihat statistik data");
  console.log("  - clearAllStorage()       : Hapus semua localStorage");
}
