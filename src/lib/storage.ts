import { OrganizationMember, Publication } from "@/types";

// Simulasi database dengan localStorage
const STORAGE_KEY_MEMBERS = "org_members";
const STORAGE_KEY_PUBLICATIONS = "publications";

// Default data
const DEFAULT_MEMBERS: OrganizationMember[] = [
  {
    id: "1",
    name: "Tia Rahmania, M.Psi, Psikologi",
    position: "Ketua",
    education: "M.Psi",
    level: 1,
    department: "Leadership",
    order: 1,
  },
  {
    id: "2",
    name: "Muhammad Zakaria, S.Pd",
    position: "Sekretaris",
    education: "S.Pd",
    level: 1,
    department: "Leadership",
    order: 2,
  },
];

const DEFAULT_PUBLICATIONS: Publication[] = [
  {
    id: "1",
    title: "Tulisan Pertama",
    category: "tulisan",
    author: "Admin",
    description: "Deskripsi tulisan pertama",
    date: new Date().toISOString().split("T")[0],
    order: 1,
  },
];

// Members functions
export function getMembers(): OrganizationMember[] {
  if (typeof window === "undefined") return DEFAULT_MEMBERS;
  try {
    const data = localStorage.getItem(STORAGE_KEY_MEMBERS);
    return data ? JSON.parse(data) : DEFAULT_MEMBERS;
  } catch {
    return DEFAULT_MEMBERS;
  }
}

export function saveMembers(members: OrganizationMember[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY_MEMBERS, JSON.stringify(members));
}

export function addMember(member: Omit<OrganizationMember, "id">): OrganizationMember {
  const members = getMembers();
  const newMember: OrganizationMember = {
    ...member,
    id: Date.now().toString(),
  };
  members.push(newMember);
  saveMembers(members);
  return newMember;
}

export function updateMember(
  id: string,
  updates: Partial<OrganizationMember>
): OrganizationMember | null {
  const members = getMembers();
  const index = members.findIndex((m) => m.id === id);
  if (index === -1) return null;
  members[index] = { ...members[index], ...updates };
  saveMembers(members);
  return members[index];
}

export function deleteMember(id: string): boolean {
  const members = getMembers();
  const filtered = members.filter((m) => m.id !== id);
  if (filtered.length === members.length) return false;
  saveMembers(filtered);
  return true;
}

// Publications functions
export function getPublications(): Publication[] {
  if (typeof window === "undefined") return DEFAULT_PUBLICATIONS;
  try {
    const data = localStorage.getItem(STORAGE_KEY_PUBLICATIONS);
    return data ? JSON.parse(data) : DEFAULT_PUBLICATIONS;
  } catch {
    return DEFAULT_PUBLICATIONS;
  }
}

export function savePublications(publications: Publication[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY_PUBLICATIONS, JSON.stringify(publications));
}

export function addPublication(
  publication: Omit<Publication, "id">
): Publication {
  const publications = getPublications();
  const newPublication: Publication = {
    ...publication,
    id: Date.now().toString(),
  };
  publications.push(newPublication);
  savePublications(publications);
  return newPublication;
}

export function updatePublication(
  id: string,
  updates: Partial<Publication>
): Publication | null {
  const publications = getPublications();
  const index = publications.findIndex((p) => p.id === id);
  if (index === -1) return null;
  publications[index] = { ...publications[index], ...updates };
  savePublications(publications);
  return publications[index];
}

export function deletePublication(id: string): boolean {
  const publications = getPublications();
  const filtered = publications.filter((p) => p.id !== id);
  if (filtered.length === publications.length) return false;
  savePublications(filtered);
  return true;
}
