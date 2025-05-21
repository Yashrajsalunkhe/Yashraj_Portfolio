# Yashraj-Portfolio

Yashraj-Portfolio is a modern portfolio web application built with TypeScript, React, and Tailwind CSS. It is designed to showcase projects, skills, achievements, and more in an elegant and interactive way.

## Features

- **Responsive Design**: Fully responsive and optimized for all devices.
- **Dynamic Components**: Includes reusable UI components like buttons, cards, modals, and more.
- **Theming**: Supports light and dark themes.
- **Interactive Animations**: Smooth animations and transitions for a better user experience.
- **Data-Driven**: Dynamically renders content from structured data files.

## Project Structure

The project is organized as follows:

```
Yashraj-Portfolio/
├── client/                # Frontend code
│   ├── src/
│   │   ├── components/   # Reusable React components
│   │   ├── data/         # Static data files
│   │   ├── hooks/        # Custom React hooks
│   │   ├── img/          # Images and assets
│   │   ├── lib/          # Utility functions and libraries
│   │   ├── pages/        # Page components
├── server/                # Backend code
├── shared/                # Shared resources like schemas
├── package.json           # Project dependencies and scripts
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Yashraj-Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`.

### Build

To build the project for production:
```bash
npm run build
```

### Deployment

The project is configured for autoscale deployment. Use the following command to start the production server:
```bash
npm run start
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Powered by [Vite](https://vitejs.dev/)