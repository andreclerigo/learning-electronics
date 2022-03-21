import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { exercise, SharedService, theme } from '../shared.service';
import { AddExerciseComponent } from './add-exercise/add-exercise.component';
import { EditExerciseComponent } from './edit-exercise/edit-exercise.component';
import { MatTableDataSource } from '@angular/material/table';
import * as _moment from 'moment';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
const moment = _moment;

export const DATE_FORMAT = {
  parse: {
      dateInput: ['DD-MM-YYYY', 'DD/MM/YYYY']
  },
  display: {
      dateInput: 'DD-MM-YYYY',
      monthYearLabel: 'YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'YYYY'
  }
};

@Component({
  selector: 'app-my-exercises',
  templateUrl: './my-exercises.component.html',
  styleUrls: ['./my-exercises.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: DATE_FORMAT },
  ]
})
export class MyExercisesComponent implements OnInit {
  displayedColumns: string[] = ['question', 'theme', 'classes', 'date'];
  dataSource!: MatTableDataSource<any>;

  all_themes: theme[] = [];
  all_units: string[] = [];
  all_exercises: exercise[] = [];

  constructor(public add_edit_ex_dialog: MatDialog, private _service: SharedService) {
    this._service.getThemes().subscribe((data: any) => {
      this.all_themes = data as theme[];
    });

    this._service.getUnits().subscribe((data: any) => {
      this.all_units = data;
    });
  }

  ngOnInit(): void {
    this.refreshTable();
  }

  refreshTable() {
    this._service.getMyExercises().subscribe((data: any) => {
      console.log(data);
      data.forEach((ex: exercise) => {
        // Changing theme ID array to theme name array
        var theme_names: string[] = [];

        console.log(ex);
        
        ex.theme.forEach((id: any) => {
          theme_names.push(this.all_themes[id - 1].name);
        });

        ex.theme = theme_names;

        // Get the correct date format
        ex.date = moment(ex.date).format('DD-MM-YYYY');

        this.all_exercises.push(ex);
      });
      
      this.dataSource = new MatTableDataSource(this.all_exercises);
    });
  }

  /* Open Add or Edit Exercise Dialog */
  addEx() {
    const dialogRef = this.add_edit_ex_dialog.open(AddExerciseComponent, {
      width: '50%',
      height: '60%', 
      minWidth: '500px',
      data: {
        'ModalTitle': "Adicionar Exercício",
        'themes': this.all_themes,
        'units': this.all_units
      }
    });
  }

  /* Open Add or Edit Exercise Dialog */
  editEx(exercise_data: any) {
    const dialogRef = this.add_edit_ex_dialog.open(EditExerciseComponent, {
      width: '50%',
      height: '60%', 
      data: {
        'ModalTitle': "Editar Exercício",
        'themes': this.all_themes,
        'units': this.all_units,
        'exercise': exercise_data
      }
    });
  }
}
