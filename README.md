# IP Address Tracker

A responsive IP Address Tracker built with React, TypeScript, Tailwind CSS, and React Leaflet. The application allows users to search for any valid IP address and view its geolocation details, including location, timezone, ISP information, and an interactive map.

## Live Demo

[Live Site](https://ip-address-tracker-eight-opal.vercel.app/)

## Features

* View the user's current IP address information on page load
* Search for any valid IP address
* Display IP address details
* Show location (city and region)
* Display timezone information
* Display Internet Service Provider (ISP)
* Interactive map with dynamic marker updates
* Responsive design for desktop and mobile devices

## Technologies Used

### Frontend

* React
* TypeScript
* Vite
* Tailwind CSS

### Mapping

* React Leaflet
* Leaflet
* OpenStreetMap

### API

* FreeIPAPI

### Deployment

* Vercel

## Installation

Clone the repository:

```bash
git clone https://github.com/bukolaolafenwa/ip-address-tracker.git
```

Navigate into the project folder:

```bash
cd ip-address-tracker
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── InfoCard.tsx
│   ├── MapView.tsx
│   └── SearchBar.tsx
├── services/
│   └── ipApi.ts
├── types/
│   └── ip.ts
├── App.tsx
└── main.tsx
```

## Challenges Solved

* Integrated IP geolocation services
* Implemented dynamic search functionality
* Updated map position based on search results
* Switched from a paid API service to a free alternative
* Resolved Git merge conflicts during deployment
* Improved responsive UI behaviour across devices

## Author

Bukola Olafenwa
