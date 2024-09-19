import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

// Define the structure of the periodic elements
export interface PeriodicElement {
  position: number;
  name: string;
  weight: number;
  symbol: string;
}

// Sample data for the table
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-root', // Selector for the component
  templateUrl: './app.component.html', // HTML template for the component
  styleUrls: ['./app.component.css'], // CSS styles for the component
  standalone: true, // Indicates that this is a standalone component
  imports: [CommonModule, MatInputModule, MatButtonModule, MatTableModule] // Import necessary Angular Material modules
})
export class AppComponent implements OnInit {
  // Columns to be displayed in the table
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'actions'];
  
  // Data source for the table
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  
  // Variable to hold filter value
  filterValue: string = '';

  // Lifecycle hook that is called after data-bound properties are initialized
  ngOnInit(): void {
    // Custom filter logic for the data source
    this.dataSource.filterPredicate = (data: PeriodicElement, filter: string) => {
      return Object.values(data).some(val =>
        String(val).toLowerCase().includes(filter.toLowerCase())
      );
    };
  }

  // Function to apply filter based on user input
  applyFilter(event: Event): void {
    const input = event.target as HTMLInputElement; // Get the input element
    // Update the filter value in the data source
    this.dataSource.filter = input.value.trim().toLowerCase();
  }

  // Function to open a dialog for editing element properties
  openEditDialog(element: PeriodicElement): void {
    // Prompt user for new values
    const newName = prompt('Edit Name', element.name);
    const newWeight = prompt('Edit Weight', element.weight.toString());
    const newSymbol = prompt('Edit Symbol', element.symbol);

    // Update the element if the user provides new values
    if (newName !== null && newWeight !== null && newSymbol !== null) {
      element.name = newName;
      element.weight = parseFloat(newWeight);
      element.symbol = newSymbol;
      // Update the data source to reflect changes
      this.dataSource._updateChangeSubscription(); // Update data source
    }
  }
}