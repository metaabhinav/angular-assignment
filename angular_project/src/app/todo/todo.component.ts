import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators ,   NgForm } from '@angular/forms'
import { ITask } from '../model/task';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent {
  todoForm !: FormGroup;
// New list
  tasks: ITask[] = []
  // In progress 
  inprogress: ITask[] = []
  done: ITask[] = []
  updateId !: any;
  isEditEnable: boolean = false;
  isProgressUpdateClick: boolean = false;

  constructor(private fb: FormBuilder) {

  }

  /**
   * Used for validation on input form
   */
  ngOnInit(): void {
    this.todoForm = this.fb.group({
      itemTitle: ['', Validators.required],
      itemdesc: ['', Validators.required],
      priority: ['', Validators.required]

    })
  }


  /**
   * Used to update task
   */
  updateTask() {
    if(this.isProgressUpdateClick)
    {
      this.inprogress[this.updateId].title = this.todoForm.value.itemTitle
      this.inprogress[this.updateId].description = this.todoForm.value.itemdesc
      this.inprogress[this.updateId].priority = this.todoForm.value.priority
      this.inprogress[this.updateId].done = false;
    }
   else{
    this.tasks[this.updateId].title = this.todoForm.value.itemTitle
    this.tasks[this.updateId].description = this.todoForm.value.itemdesc
    this.tasks[this.updateId].priority = this.todoForm.value.priority
    this.tasks[this.updateId].done = false;
   }
    this.todoForm.reset();
    this.updateId = undefined;
    this.isEditEnable = false;
    this.isProgressUpdateClick = false;
  }


  /**
   * Used to add task in list
   */
  addTask( ) {

    this.tasks.push({
      title: this.todoForm.value.itemTitle,
      description: this.todoForm.value.itemdesc,
      done: false,
      creationDate:  Date(),
      completionDate: Date(),
      priority: this.todoForm.value.priority

    })

    this.todoForm.reset();
  }

  deleteNewTask(i: number) {
    this.tasks.splice(i, 1);
  }

  deleteInProgressTask(i: number) {
    this.tasks.splice(i, 1);
  }

  deleteCompletedTask(i: number) {
    this.tasks.splice(i, 1);
  }

  onEditNew(item: ITask, index: number) {
    this.todoForm.controls['itemTitle'].setValue(item.title);
    this.todoForm.controls['itemdesc'].setValue(item.description);
    this.todoForm.controls['priority'].setValue(item.priority);
    this.updateId = index;
    this.isEditEnable = true;
    this.isProgressUpdateClick = false;
  }

  onEditInProgress(item: ITask, index: number) {
    this.todoForm.controls['itemTitle'].setValue(item.title);
    this.todoForm.controls['itemdesc'].setValue(item.description);
    this.todoForm.controls['priority'].setValue(item.priority);
    this.updateId = index;
    this.isEditEnable = true;
    this.isProgressUpdateClick = true;
  }



  drop(event: CdkDragDrop<ITask[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
