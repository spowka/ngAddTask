import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public tasks: string[] = [];
  public showTasksCount: boolean = true;

  public form: FormGroup = new FormGroup({
    task: new FormControl()
  });

  public addTask() {
    if (!this.form.value.task) return;
    this.tasks.push(this.form.value.task);
    this.form.reset();
  }

  public removeTask(index: number) {
    this.tasks.splice(index, 1);
  }

  public showHideTaskCount() {
    this.showTasksCount = !this.showTasksCount;
  }

  constructor() { }
}
