# Business Directory

Welcome to the Business Directory project! This Astro-based project aims to provide a directory for businesses, organized by categories and subcategories. It includes features such as dynamic category pages, breadcrumb navigation, and a centralized layout.

## 🚀 Project Overview

This project is built with [Astro](https://astro.build), a modern static site generator. The directory helps connect users with local businesses, providing an easily navigable interface for finding various business categories.

## � Project Structure

Here's an overview of the project structure:

```plaintext
/
├── public/
│   ├── businesses.json  # Data file containing list of businesses
│   ├── categories.json  # Data file containing categories and subcategories
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── BusinessList.astro  # Component for displaying businesses
│   ├── layouts/
│   │   └── Layout.astro  # Main layout file
│   ├── pages/
│   │   ├── [category].astro  # Main category page
│   │   ├── [...category].astro  # Nested category page
│   │   ├── about.astro  # About page
│   │   ├── contact.astro  # Contact page
│   │   ├── index.astro  # Home page
│   │   └── business/
│   │       └── [...slug].astro  # Business detail page
│   └── types.ts  # TypeScript definitions
├── .gitignore
├── astro.config.mjs  # Astro configuration
├── package-lock.json
├── package.json
└── tsconfig.json
```

## 🛠 Installation & Development

To set up and run this project locally, follow these steps:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/dodyw/astro-business-directory.git
   cd astro-business-directory
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Run the development server:**

   ```sh
   npm run dev
   ```

   The development server will start at `http://localhost:4321`.

## 🚀 Build & Deploy

To build the project for production, run:

```sh
npm run build
```

This will generate the static files in the `dist` directory. To preview the build locally, you can run:

```sh
npm run preview
```

## 📋 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/dodyw/astro-business-directory/issues).

## 🙏 Acknowledgements

- [Astro](https://astro.build)
- [Open Sans Font](https://fonts.google.com/specimen/Open+Sans)

## 🎉 Credits

&copy; 2024 Business Directory. All rights reserved. Developed by [Nicecoder.com](https://nicecoder.com).
