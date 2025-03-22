# Overview of the plan
This digital website educational platform aims to revolutionize how teachers create and deliver digital learning materials through an integrated suite of AI-enhanced tools. At its core, the project combines specialized resource generators (word clouds, math grids, timetables), an interactive whiteboard system, and social sharing capabilities—all designed to dramatically reduce preparation time while increasing lesson quality. The platform distinguishes itself by enabling educators to seamlessly create, customize, and present interactive resources within a single ecosystem, with AI assistance guiding the creation process. By addressing pain points in resource preparation, presentation flexibility, and collaboration, while maintaining rigorous accessibility and security standards, the platform empowers teachers to deliver more engaging and effective lessons without requiring advanced technical skills—ultimately creating a community-driven ecosystem where educators can share, discover, and build upon each other's best teaching materials.
# Key Architectural Decisions

1. *Component-Based Architecture*:
   - Components are organized by feature and reusability
   - Common UI elements are separated for maximum reuse
   - Domain-specific components (resources, whiteboard) are grouped together

2. *Context API for State Management*:
   - Auth, Theme, and domain-specific contexts provide global state
   - Reduces prop drilling and centralizes related state

3. *Custom Hooks for Reusable Logic*:
   - Firebase interactions abstracted behind hooks
   - Domain-specific logic encapsulated in custom hooks

4. *Service Layer*:
   - External services (Firebase, AI, Analytics) isolated in service modules
   - Easy to swap implementations or mock for testing

5. *Type-Safety*:
   - Dedicated types directory for shared TypeScript interfaces
   - Promotes type consistency across the application

6. *Page-Based Organization*:
   - Routes map to page components
   - Pages compose components but contain minimal logic

7. *Utility Functions*:
   - Common helper functions organized by purpose
   - Promotes code reuse and testability

This structure provides:
- Clear separation of concerns
- Scalability for adding new features
- Consistent patterns for developers to follow
- Easy testability with isolated components and services
- Modular architecture that supports the phases in your plan

# Project Structure
src/
├── assets/                      # Static assets
│   ├── icons/                   # SVG icons
│   ├── images/                  # Images
│   └── fonts/                   # Custom fonts
│
├── components/                  # Reusable UI components
│   ├── common/                  # Common UI elements
│   │   ├── Button/
│   │   ├── Tooltip/
│   │   ├── Modal/
│   │   ├── Dropdown/
│   │   └── ErrorBoundary/
│   │
│   ├── layout/                  # Layout components
│   │   ├── Header/
│   │   ├── Sidebar/
│   │   ├── Footer/
│   │   └── PageContainer/
│   │
│   ├── auth/                    # Authentication components
│   │   ├── LoginForm/
│   │   ├── SignupForm/
│   │   ├── OAuthButtons/
│   │   └── PasswordReset/
│   │
│   ├── resources/               # Educational resource components
│   │   ├── WordCloud/
│   │   ├── HundredsSquare/
│   │   ├── Timetable/
│   │   └── ResourcePreview/
│   │
│   └── whiteboard/              # Whiteboard components
│       ├── Canvas/
│       ├── ToolPalette/
│       ├── Slides/
│       └── ResourcePanel/
│
├── contexts/                    # React Context providers
│   ├── AuthContext.tsx
│   ├── ThemeContext.tsx
│   ├── WhiteboardContext.tsx
│   └── ResourceContext.tsx
│
├── hooks/                       # Custom React hooks
│   ├── useAuth.ts
│   ├── useFirestore.ts
│   ├── useResources.ts
│   ├── useAI.ts
│   └── useWhiteboard.ts
│
├── services/                    # Service layer
│   ├── firebase/                # Firebase services
│   │   ├── config.ts            # Firebase configuration
│   │   ├── auth.ts              # Authentication methods
│   │   ├── firestore.ts         # Firestore methods
│   │   └── storage.ts           # Storage methods
│   │
│   ├── ai/                      # AI service integration
│   │   ├── openai.ts            # OpenAI API integration
│   │   └── promptTemplates.ts   # Structured AI prompts
│   │
│   └── analytics/               # Analytics services
│       └── google.ts            # Google Analytics integration
│
├── types/                       # TypeScript type definitions
│   ├── auth.types.ts
│   ├── resources.types.ts
│   ├── whiteboard.types.ts
│   └── api.types.ts
│
├── utils/                       # Utility functions
│   ├── formatting.ts
│   ├── validation.ts
│   ├── accessibility.ts
│   └── storage.ts
│
├── pages/                       # Application pages
│   ├── Auth/
│   │   ├── Login.tsx
│   │   ├── Signup.tsx
│   │   └── PasswordReset.tsx
│   │
│   ├── Dashboard/
│   │   ├── Dashboard.tsx
│   │   ├── ResourceLibrary.tsx
│   │   └── Analytics.tsx
│   │
│   ├── Resources/
│   │   ├── WordCloudGenerator.tsx
│   │   ├── HundredsSquare.tsx
│   │   └── TimetableGenerator.tsx
│   │
│   ├── Whiteboard/
│   │   ├── WhiteboardEditor.tsx
│   │   └── SlideManager.tsx
│   │
│   ├── Settings/
│   │   ├── Profile.tsx
│   │   ├── Preferences.tsx
│   │   └── Account.tsx
│   │
│   └── NotFound.tsx
│
├── routes/                      # Routing configuration
│   ├── PrivateRoute.tsx         # Protected route component
│   ├── PublicRoute.tsx          # Public route component
│   └── AppRoutes.tsx            # Main routing configuration
│
├── styles/                      # Global styles and theme
│   ├── theme.ts                 # Mantine theme configuration
│   ├── globalStyles.ts          # Global CSS
│   └── animations.ts            # Global animations
│
├── config/                      # Application configuration
│   ├── constants.ts             # App constants
│   └── features.ts              # Feature flags
│
├── App.tsx                      # Main application component
├── index.tsx                    # Entry point
└── vite-env.d.ts                # Vite type declarations

