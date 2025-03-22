# Plan and TODO List

## Phase 1: Core Infrastructure & MVP

- **Setup & Core:**
    - [x] Create React project with TypeScript: ~~`npx create-react-app geedus --template typescript`~~ Used Vite instead: `npm create vite@latest geedus -- --template react-ts`
    - [x] Install core dependencies:
        - `npm install @mantine/core @mantine/hooks d3 @tldraw/tldraw sortablejs firebase @firebase/auth @firebase/firestore @firebase/storage`
    - [ ] Create project structure (modular architecture)
    - [ ] Configure React Router for navigation
    - [ ] Define Mantine theme and global styles
    - [ ] Initialize Firebase project (Auth, Firestore, Storage)
    - [ ] Implement Authentication:
        - Auth context/hooks
        - Email/password login/signup
        - OAuth providers (Google, Microsoft)
        - Protected routes
    - [ ] Build User Profiles and Settings
    - [ ] Define Firestore database schema
    - [ ] Create Word Cloud Generator (D3.js)
        - Integrate AI assistance (OpenAI API)
        - Input validation
    - [ ] Integrate tldraw for whiteboard
    - [ ] Save/load resources to Firestore
    - [ ] Add Google Analytics integration
    - [ ] Implement accessibility features (ARIA, keyboard nav)
    - [ ] Start user and developer documentation

## Phase 2: Enhanced Resources & Whiteboard

- **Resource Tools:**
    - [ ] Build Interactive Hundreds Square
    - [ ] Build Timetable Generator (SortableJS)
    - [ ] Structured AI Prompts (JSON/TypeScript templates)
    - [ ] Enhance AI assistance for all tools
- **Whiteboard Improvements:**
    - [ ] Resource picker/browser component
    - [ ] Drag-and-drop resources onto whiteboard
    - [ ] Slide management system
- **Infrastructure:**
    - [ ] Optimize Firebase Storage/Firestore
    - [ ] Add CI/CD pipeline

## Phase 3: Advanced Features & Polish

- **Social Features:**
    - [ ] Collaboration tools
    - [ ] User analytics dashboard
- **UI/UX Enhancements:**
    - [ ] Dark/light mode toggle
    - [ ] Interactive tutorials
- **Testing:**
    - [ ] End-to-end testing framework
    - [ ] Performance optimization

---

## Detailed TODO List (By Phase)

### Phase 1: Core Infrastructure & MVP

#### Setup & Configuration

- [ ] Initialize React project
- [ ] Install dependencies
- [ ] Configure ESLint/Prettier
- [ ] Create basic component structure

#### Authentication System

- [ ] Implement email/password flow
- [ ] Set up OAuth providers
- [ ] Protect routes with auth guards
- [ ] Test authentication flows

#### Core Features

- [ ] Whiteboard implementation (tldraw)
- [ ] Word Cloud generator (D3.js)
- [ ] Resource save/load system
- [ ] Basic accessibility features

#### Infrastructure

- [ ] Firebase project setup
- [ ] Firestore database schema design
- [ ] Google Analytics integration
- [ ] Initial documentation draft

### Phase 2: Enhanced Resources & Whiteboard

#### Advanced Tools

- [ ] Hundreds Square implementation
- [ ] Timetable scheduler
- [ ] AI prompt templates

#### Whiteboard Enhancements

- [ ] Resource management system
- [ ] Interactive slide editor
- [ ] Collaboration features

#### Performance Optimization

- [ ] Firestore query optimization
- [ ] Caching strategy
- [ ] Loading states

### Phase 3: Advanced Features & Polish

#### Social Features

- [ ] Real-time collaboration
- [ ] User analytics dashboard
- [ ] Achievement system

#### UI/UX Improvements

- [ ] Theme customization
- [ ] Onboarding tutorial
- [ ] Mobile responsiveness

#### Testing & Deployment

- [ ] End-to-end test suite
- [ ] Authentication tests
    - [ ] Resource management tests
    - [ ] Collaboration tests
- [ ] Performance benchmarks
- [ ] Deployment configuration (Netlify/Vercel)

