# 📁 Project Structure & Architecture

## Directory Tree

```
admin_hci/
│
├── 📄 Root Configuration Files
│   ├── package.json                 # Dependencies & scripts
│   ├── tsconfig.json                # TypeScript config
│   ├── next.config.ts               # Next.js config
│   ├── postcss.config.mjs            # PostCSS config (Tailwind)
│   └── eslint.config.mjs             # ESLint config
│
├── 📚 Documentation Files
│   ├── README.md                     # Default Next.js README
│   ├── README_PPKPT.md               # Project overview
│   ├── ADMIN_GUIDE.md                # Technical documentation
│   ├── USER_GUIDE.md                 # User guide
│   ├── ADMIN_GUIDE.md                # Admin panel guide
│   ├── FEATURES_CHECKLIST.md         # Feature checklist
│   ├── IMPLEMENTATION_SUMMARY.md     # What's implemented
│   └── QUICK_REFERENCE.md            # Tips & shortcuts
│
├── 🚀 Quick Start Scripts
│   ├── start.sh                      # Linux/Mac quick start
│   └── start.bat                     # Windows quick start
│
├── 📦 Dependencies (Auto-generated)
│   ├── node_modules/                 # npm packages
│   └── package-lock.json             # Lock file
│
├── 🎨 Public Assets
│   └── public/                       # Static files
│       ├── next.svg                  # Next.js logo
│       ├── vercel.svg                # Vercel logo
│       └── favicon.ico               # Favicon
│
├── 🔧 Source Code
│   └── src/
│       │
│       ├── 📱 Pages & Routing
│       │   └── app/
│       │       │
│       │       ├── 👨‍💼 Admin Routes
│       │       │   └── admin/
│       │       │       ├── layout.tsx         # Admin layout + sidebar
│       │       │       ├── page.tsx           # Admin dashboard
│       │       │       │
│       │       │       ├── organisasi/
│       │       │       │   └── page.tsx       # Organisasi CRUD
│       │       │       │
│       │       │       └── publikasi/
│       │       │           └── page.tsx       # Publikasi CRUD
│       │       │
│       │       ├── 🏠 Public Routes
│       │       ├── page.tsx                   # Home page
│       │       ├── layout.tsx                 # Root layout
│       │       ├── favicon.ico                # Favicon
│       │       └── globals.css                # Global styles
│       │
│       ├── 🧩 Reusable Components
│       │   └── components/
│       │       ├── Sidebar.tsx                # Admin sidebar nav
│       │       ├── Button.tsx                 # Custom button
│       │       └── Modal.tsx                  # Modal dialog
│       │
│       ├── 📚 Utilities & Helpers
│       │   └── lib/
│       │       ├── storage.ts         # CRUD + localStorage
│       │       ├── exampleData.ts     # Sample data
│       │       └── devUtils.ts        # Dev utilities
│       │
│       └── 🏷️ Type Definitions
│           └── types/
│               └── index.ts           # TypeScript types
│
└── 🗂️ Build Output (Generated)
    └── .next/                        # Next.js build output
```

## 📄 File Descriptions

### Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Dependencies & npm scripts |
| `tsconfig.json` | TypeScript compiler settings |
| `next.config.ts` | Next.js configuration |
| `postcss.config.mjs` | PostCSS & Tailwind config |
| `eslint.config.mjs` | ESLint rules |

### Documentation

| File | Content |
|------|---------|
| `README_PPKPT.md` | Project overview & getting started |
| `ADMIN_GUIDE.md` | Technical architecture & code structure |
| `USER_GUIDE.md` | Step-by-step user guide |
| `FEATURES_CHECKLIST.md` | Complete feature list |
| `IMPLEMENTATION_SUMMARY.md` | What's been implemented |
| `QUICK_REFERENCE.md` | Tips, tricks & keyboard shortcuts |

### Source Code Organization

#### `src/app/` - Next.js App Router
```
app/
├── admin/                    # Admin routes protected
│   ├── layout.tsx           # Layout with sidebar
│   ├── page.tsx             # Dashboard
│   ├── organisasi/
│   │   └── page.tsx         # Org management
│   └── publikasi/
│       └── page.tsx         # Publications management
├── page.tsx                 # Home page
├── layout.tsx               # Root layout
└── globals.css              # Global styles
```

#### `src/components/` - Reusable Components
```
components/
├── Sidebar.tsx              # Navigation sidebar
├── Button.tsx               # Button with variants
└── Modal.tsx                # Modal dialog
```

#### `src/lib/` - Business Logic
```
lib/
├── storage.ts               # Data persistence & CRUD
├── exampleData.ts           # Sample data for testing
└── devUtils.ts              # Development utilities
```

#### `src/types/` - Type Definitions
```
types/
└── index.ts                 # Interface definitions
```

## 🔄 Data Flow Architecture

```
┌─────────────────────────────────────────────────────────┐
│                  User Interface Layer                    │
│  ┌──────────────────┬──────────────────────────────────┐ │
│  │   Admin Pages    │     Public Pages                 │ │
│  │  - Dashboard     │  - Home                          │ │
│  │  - Organisasi    │  - Display Org Structure         │ │
│  │  - Publikasi     │  - Display Publications          │ │
│  └──────────────────┴──────────────────────────────────┘ │
└──────────────────────┬──────────────────────────────────┘
                       │
┌──────────────────────┴──────────────────────────────────┐
│              Reusable Components Layer                  │
│  ┌──────────────────┬────────────┬────────────────────┐ │
│  │  Sidebar         │  Button    │  Modal             │ │
│  └──────────────────┴────────────┴────────────────────┘ │
└──────────────────────┬──────────────────────────────────┘
                       │
┌──────────────────────┴──────────────────────────────────┐
│           State Management & Business Logic             │
│  ┌──────────────────────────────────────────────────────┐ │
│  │           React Hooks (useState, useEffect)         │ │
│  │  - Form state management                            │ │
│  │  - Data fetching on mount                           │ │
│  └──────────────────────────────────────────────────────┘ │
└──────────────────────┬──────────────────────────────────┘
                       │
┌──────────────────────┴──────────────────────────────────┐
│                Storage Layer (lib/)                     │
│  ┌────────────────────────────────────────────────────┐ │
│  │  storage.ts - CRUD Functions                       │ │
│  │  - getMembers() / getPublications()                │ │
│  │  - addMember() / addPublication()                  │ │
│  │  - updateMember() / updatePublication()            │ │
│  │  - deleteMember() / deletePublication()            │ │
│  │  - saveMembers() / savePublications()              │ │
│  └────────────────────────────────────────────────────┘ │
└──────────────────────┬──────────────────────────────────┘
                       │
┌──────────────────────┴──────────────────────────────────┐
│                Persistence Layer                        │
│              localStorage (Browser)                     │
│  ┌──────────────────┬──────────────────────────────────┐ │
│  │  Key: org_members            Key: publications    │ │
│  │  Value: JSON array           Value: JSON array    │ │
│  └──────────────────┴──────────────────────────────────┘ │
└────────────────────────────────────────────────────────┘
```

## 🎯 Component Hierarchy

```
RootLayout
├── AdminLayout (for /admin/*)
│   ├── Sidebar
│   │   └── Link components
│   └── main (children)
│       ├── AdminDashboard (/admin)
│       ├── OrganisasiPage (/admin/organisasi)
│       │   ├── Modal
│       │   │   └── Form
│       │   ├── Table
│       │   │   └── Buttons
│       │   └── Button
│       └── PublikasiPage (/admin/publikasi)
│           ├── Tabs
│           ├── Modal
│           │   └── Form
│           ├── Table
│           │   └── Buttons
│           └── Button
│
└── HomePage (/)
    ├── Header
    │   └── Link to Admin
    ├── OrganisationSection
    │   ├── Level1Members (centered)
    │   ├── Level2Members (grid)
    │   └── Level3Members (grid)
    ├── PublicationSection
    │   ├── Tabs (Tulisan/Laporan)
    │   └── PublicationCards (grid)
    └── Footer
```

## 🔐 Type Safety Flow

```
TypeScript Types (types/index.ts)
    │
    ├── OrganizationMember
    │   │
    │   ├── Used in: storage.ts functions
    │   ├── Used in: Admin components
    │   └── Used in: Public page
    │
    └── Publication
        │
        ├── Used in: storage.ts functions
        ├── Used in: Admin components
        └── Used in: Public page
```

## 📊 State Management Pattern

```
┌─ Component Level State ──────────────────────┐
│                                              │
│  State:                                      │
│  - [members, setMembers]                     │
│  - [publications, setPublications]           │
│  - [isModalOpen, setIsModalOpen]             │
│  - [editingId, setEditingId]                 │
│  - [formData, setFormData]                   │
│                                              │
│  Effects:                                    │
│  - Load data on mount                        │
│  - Update display when data changes          │
│                                              │
│  Event Handlers:                             │
│  - handleOpenModal()                         │
│  - handleCloseModal()                        │
│  - handleSubmit()                            │
│  - handleDelete()                            │
│  - handleInputChange()                       │
│                                              │
└──────────────────────────────────────────────┘
         │
         ├──> Calls storage functions
         │
         ├──> Re-fetches data
         │
         └──> Updates state
                │
                └──> Component re-renders
```

## 🎨 Styling Architecture

```
Global Styles (globals.css)
    │
    ├── Font imports
    ├── Base styles
    └── Tailwind directives
           │
           └── Tailwind Config (postcss.config.mjs)
                  │
                  └── Used in all components via className

Component Styles
    │
    ├── Tailwind classes (primary method)
    ├── Utility classes (spacing, colors, etc)
    └── Custom variants (Button, Modal)
```

## 📦 Deployment Structure

```
Production Build (.next/)
│
├── Optimized bundles
├── CSS optimization
├── Image optimization
└── Static generation where possible
```

## 🔄 API/Data Flow (Current - localStorage)

```
Admin Forms
    │
    ├──> Form Submission
    │
    ├──> storage.ts function called
    │    - addMember() / addPublication()
    │    - updateMember() / updatePublication()
    │    - deleteMember() / deletePublication()
    │
    ├──> saveMembers() / savePublications()
    │
    ├──> localStorage.setItem()
    │
    └──> Component state updated
         │
         └──> UI re-renders
```

## Future: API/Backend Integration

```
Admin Forms
    │
    ├──> Form Submission
    │
    ├──> API Route (src/app/api/)
    │    - POST /api/organisasi
    │    - PUT /api/organisasi/[id]
    │    - DELETE /api/organisasi/[id]
    │    - POST /api/publikasi
    │    - PUT /api/publikasi/[id]
    │    - DELETE /api/publikasi/[id]
    │
    ├──> Backend Server
    │
    ├──> Database (MongoDB/PostgreSQL)
    │
    └──> Response back to frontend
         │
         └──> UI updates
```

---

**This architecture ensures:**
- ✅ Clean separation of concerns
- ✅ Reusable components
- ✅ Type-safe code
- ✅ Easy to maintain & extend
- ✅ Scalable for future growth
