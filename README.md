# React Native Assignment

# Drive Link For Screenshots and Screen Recording

https://drive.google.com/drive/folders/1YTbiZZpFqtdbxaNqQW9s4IvWUDaRU9QJ

# Notes:-

I did not have access to the icons in developer mode, so I was unable to retrieve all the required icons. As a result, the navigation icons currently used are placeholders based on the available assets. I appreciate your understanding.

If you have any questions or require further clarification, feel free to reach out. +91 8789067634 or mukeshk0326@gmail.com

## Overview

This project is a React Native application built using TypeScript as part of the Fleapo hiring assessment. The application follows best practices in folder structure, component reusability, and project management.

## Features

- **Screens Implemented:**
  - My Profile ( ProfileHeader - TopRestraunts - RecentActivity - GraphPage - Lists - NavigationPage )
  - People List -> Search filters for (friends, verified and everyone)
  - Dummy Screens (Coming soon Text)
- **Reusable Components:**
  - Button
- **Navigation:**
  - React Navigation for screen transitions
  - Bottom Tab Navigator (where applicable)
- **State Management:**
  - React Context API for theme and global state management
- **Styling:**
  - Used React Native’s `StyleSheet` API
  - Maintains proper spacing, margins, and paddings as per Figma design

## Folder Structure

````
/root
│── src
│   ├── assets            # Contains fonts, images, and icons
│   │   ├── fonts         # Custom fonts for typography
│   │   ├── icons         # SVG and PNG icons
│   │   │   ├── navigation # Icons related to navigation
│   │   ├── images        # Image assets
│   │       ├── activity  # Activity-related images
│   │       ├── dishes    # Images related to dishes
│   ├── components        # Reusable UI components (Buttons, Cards, etc.)
│   ├── navigation        # Navigation setup using React Navigation
│   ├── screens           # App screens (My Profile, People List, etc.)
│   ├── utils             # Utility functions and theme configurations
│   │   ├── theme.ts      # Global theme for colors, typography, and spacing
│   │   ├── Types.ts      # TypeScript types
│   ├── App.tsx           # Root application file
│── .eslintc.js           # ESLint configuration
│── .prettierrc.js        # Prettier configuration
│── .gitignore            # Git ignore file
│── package.json          # Project dependencies
│── README.md             # Project documentation


## Installation & Setup

1. Clone the repository:
   ```sh
   git clone <repository_url>
   cd <project_name>
````

2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the application:
   ```sh
   npx react-native run-android  # For Android
   npx react-native run-ios      # For iOS (Mac only)
   ```

## Assets & Theme

- Extracted icons, images, and colors from Figma
- Used a global theme file (`theme.ts`) for colors, typography, and spacing

## Submission Details

- Project uploaded to GitHub
- README includes setup instructions
- Screenshots/screen recording provided
