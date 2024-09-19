# Periodic Table in Angular

This project demonstrates how to create a responsive data table using Angular and Angular Material. The table allows for filtering and editing of data entries.

## Features

- **Data Table**: Displays a list of elements with columns for position, name, weight, and symbol.
- **Filtering**: An input field to filter the displayed data based on user input.
- **Editing**: A button to edit the details of each element in the table.

## Technologies Used

- Angular
- Angular Material
- TypeScript
- HTML
- CSS

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- Angular CLI

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Majki03/table_angular.git

2. Navigate to the project directory:

   ```bash
   cd angular-material-table-example

3. Install the dependencies:

   ```bash
   npm install

### Running the Application

1. To start the development server, run:

   ```bash
   ng serve

2. Open your web browser and navigate to http://localhost:4200/ to see the application in action.

## Code Overwiew

### AppComponent

- **Data Model**: Defines a PeriodicElement interface to represent the elements in the table.
- **Data Source**: Uses MatTableDataSource for the table's data source.
- **Filtering**: The applyFilter method filters the displayed data based on user input.
- **Editing**: The openEditDialog method allows users to edit the properties of the elements.

### HTML Template
- Contains an input field for filtering.
- Uses Angular Material table directives to create a structured and styled table.
- Each row contains an "Edit" button that triggers the edit functionality.

### Styles
- Uses CSS to style the table, headers, cells, and buttons.
- Implements responsive design for a better user experience.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.