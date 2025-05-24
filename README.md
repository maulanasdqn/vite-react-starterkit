# Vite React Starterkit

A modern, feature-rich starter template for React applications built with Vite, TypeScript, and TailwindCSS. This starterkit provides a solid foundation for building scalable and maintainable web applications with best practices baked in.

## Features

- ⚡️ **Vite** - Lightning fast build tool with instant HMR
- ⚛️ **React** - UI library for building component-based interfaces
- 🔒 **Authentication System** - Ready-to-use login and registration flows
- 🔍 **TypeScript** - Type safety and improved developer experience
- 🎨 **TailwindCSS** - Utility-first CSS framework
- 📱 **Responsive Design** - Mobile-first approach
- 🧩 **Component Structure** - Well-organized component architecture
- 📁 **File-based Routing** - Intuitive route management
- 🔄 **React Query** - Data fetching and state management
- 🧪 **ESLint & StyleLint** - Code quality tools
- 🔧 **Prettier** - Code formatting
- 📦 **PNPM** - Fast, disk space efficient package manager
- 🚀 **GitHub Actions** - CI/CD workflows
- 🏗️ **Code Splitting** - Optimized bundle size with automatic chunking

## Prerequisites

- Node.js (v22.15.0 or later recommended)
- PNPM (v8.15.1 or later)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/vite-react-starterkit.git
cd vite-react-starterkit
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

## Usage

### Development

Run the development server with hot module replacement:

```bash
pnpm dev
```

### Building for Production

Create an optimized production build:

```bash
pnpm build
```

The build output will be in the `dist` directory, with assets organized in the following structure:

- `assets/js/` - JavaScript chunks
- `assets/css/` - CSS files
- `assets/[ext]/` - Other assets by extension

### Linting

Run ESLint and StyleLint:

```bash
pnpm lint
```

## Project Structure

```
vite-react-starterkit/
├── .github/                # GitHub configuration
│   └── workflows/          # GitHub Actions workflows
├── public/                 # Static assets
├── src/
│   ├── api/                # API integration layer
│   │   ├── dashboard/      # Dashboard API
│   │   └── iam/            # Identity and Access Management API
│   ├── app/                # Application routes
│   │   ├── (protected)/    # Protected routes (require authentication)
│   │   └── (public)/       # Public routes
│   ├── entities/           # Domain entities, types, and constants
│   ├── libs/               # Shared libraries and utilities
│   │   ├── axios/          # HTTP client configuration
│   │   ├── cookie/         # Cookie management
│   │   ├── local-storage/  # Local storage utilities
│   │   ├── react-query/    # React Query configuration
│   │   └── react-router/   # Router configuration
│   ├── utils/              # Utility functions
│   ├── main.tsx            # Application entry point
│   └── style.css           # Global styles
├── .eslintrc.js            # ESLint configuration
├── .stylelintrc            # StyleLint configuration
├── .prettierrc             # Prettier configuration
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

## Authentication

The starterkit includes a complete authentication system with:

- Login page
- Registration page
- Protected routes
- Token management
- User session handling

## Styling

The project uses TailwindCSS with custom theme variables defined in `src/style.css`. The theme includes a comprehensive color palette and typography settings.

## API Integration

API calls are organized by domain and feature:

- `api/iam/auth` - Authentication endpoints
- `api/iam/users` - User management
- `api/dashboard` - Dashboard data

Each API module includes:

- `api.ts` - API call functions
- `type.ts` - TypeScript types
- `schema.ts` - Zod validation schemas

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License.
