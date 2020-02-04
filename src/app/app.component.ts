import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public tasks: string[] = [];

  public showTasksCount = true;

  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      task: ['', [Validators.required]]
    });
  }

  public addTask() {
    if (this.form.invalid) {
      return;
    }

    this.tasks.push(this.form.value.task);
    this.form.reset();
  }

  public removeTask(index: number) {
    this.tasks.splice(index, 1);
  }

  public showHideTaskCount() {
    this.showTasksCount = !this.showTasksCount;
  }

}
