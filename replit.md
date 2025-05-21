# Portfolio Website Architecture Overview

## Overview
This project is a personal portfolio website for Yashraj Salunkhe, a full-stack developer and AI engineer. It's built using a modern web architecture with a React frontend and an Express backend. The application showcases the developer's projects, skills, certifications, and achievements, with a contact form that sends submissions to a backend API.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture
The system follows a monorepo structure with clear separation between:

1. **Frontend (client)**: React-based single-page application with Tailwind CSS and Shadcn UI components for styling.
2. **Backend (server)**: Express.js server that handles API requests and serves the static frontend files.
3. **Database**: Uses Drizzle ORM with a planned PostgreSQL database for data persistence.
4. **Shared Code**: Schema definitions and types are kept in a shared directory for reuse between client and server.

The application follows the JAMstack architecture pattern, with most content rendered client-side and data fetched from the server via API endpoints.

## Key Components

### Frontend
- **React**: Used for building the user interface components
- **Tailwind CSS**: For styling with utility classes
- **Framer Motion**: Provides animations throughout the site
- **React Query**: Manages server state and API requests
- **shadcn/ui**: A collection of reusable UI components
- **wouter**: Lightweight routing library

The frontend is organized by features, with each section of the portfolio (Hero, About, Projects, Skills, etc.) as a separate component. UI components are separated into a dedicated `/components/ui` directory following the shadcn/ui pattern.

### Backend
- **Express.js**: Handles HTTP requests and routing
- **Drizzle ORM**: Type-safe database operations
- **Zod**: Schema validation for API requests

The backend provides API endpoints (currently only a contact form endpoint) and serves the compiled frontend assets in production.

### Data Layer
- **Drizzle ORM**: Used for database interactions
- **PostgreSQL**: Planned database for persistent storage (not fully implemented yet)
- **Schema definitions**: Located in `shared/schema.ts` for type-safe use across frontend and backend

## Data Flow

1. **UI Rendering**:
   - React components render the portfolio content
   - Data for projects, skills, and achievements comes from local state files in `client/src/data/`
   
2. **Contact Form**:
   - User fills out the contact form
   - Client validates input using React Hook Form
   - The form submits data to `/api/contact` endpoint
   - Server validates input using Zod
   - Server responds with success/error message

3. **User Authentication** (planned but not implemented):
   - Schema for users exists in `shared/schema.ts`
   - Storage interface provides methods for user management

## External Dependencies

### Frontend Dependencies
- **React ecosystem**: React, React DOM, React Hook Form
- **UI components**: shadcn/ui with Radix UI primitive components
- **Styling**: Tailwind CSS, clsx for class composition
- **Animation**: Framer Motion for transitions and UI effects
- **State management**: React Query for server state

### Backend Dependencies
- **Server**: Express.js
- **Database**: Drizzle ORM, likely with PostgreSQL
- **Validation**: Zod for schema validation
- **Development**: Vite for development server, esbuild for production build

## Deployment Strategy
The application is configured to deploy on Replit:

1. **Development**: `npm run dev` runs the application in development mode using Vite
2. **Build**: `npm run build` compiles the frontend with Vite and the backend with esbuild
3. **Production**: `npm run start` runs the compiled application

The deployment uses Replit's autoscale feature and exposes port 5000 externally as port 80.

## Future Improvements

1. **Complete Database Implementation**: Fully implement PostgreSQL with Drizzle ORM
2. **Authentication System**: Implement login/signup functionality using the existing user schema
3. **Content Management**: Build an admin dashboard for updating portfolio content
4. **Performance Optimization**: Implement code splitting and lazy loading for improved load times
5. **Expanded API**: Add more backend endpoints for dynamic content management

## Development Guidelines

1. Use the existing folder structure:
   - `client/src/` for frontend code
   - `server/` for backend code
   - `shared/` for shared types and schemas

2. Follow the established patterns:
   - Use React functional components with hooks
   - Maintain the separation between UI components and feature components
   - Use Zod for validation on both client and server

3. For new features:
   - Create new endpoints in `server/routes.ts`
   - Add new frontend components in `client/src/components/`
   - Define shared types in `shared/` directory