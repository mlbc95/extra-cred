import { HttpService } from '../../services/http.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-class-form',
  templateUrl: './add-class-form.component.html',
  styleUrls: ['./add-class-form.component.css']
})
export class AddClassFormComponent implements OnInit {

  addEventForm: FormGroup;
  cName:string;
  cDsc:string;


  constructor(
    private formBuilder: FormBuilder,
    public Http:HttpService
  ) { }

  ngOnInit() {
    // Init Form
    this.addEventForm = this.formBuilder.group({
      events: this.formBuilder.array([this.formBuilder.group({
        date: ['', Validators.required],
        name: ['', Validators.required],
        description: ['', Validators.required]
      })])
    });
  }

  addEvent() {
    (<FormArray>this.addEventForm.get('events')).push(this.formBuilder.group({
      date: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required]
    }))
  }

  removeEvent(index) {
    (<FormArray>this.addEventForm.get('events')).removeAt(index);
  }

  private getEventsControls(form) {
    return form.get('events').controls;
  }
  onSubmit(){
    const body = {
      name: this.cName,
      description: this.cDsc,
      events: this.addEventForm.get('events').value
    }

    console.log(body);

    this.Http.post('classes', body, {'Content-Type': 'application/json'}).subscribe(
      data => console.log(data)
    );
  }

}
