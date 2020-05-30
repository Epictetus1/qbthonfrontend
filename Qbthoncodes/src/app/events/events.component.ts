import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  displayCreateEvent = false;
  eventCreationForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  get f() { return this.eventCreationForm.controls}; 

  ngOnInit(): void {
    this.eventCreationForm= this.formBuilder.group({eventDate: ['', Validators.required],
    skills: ['', Validators.required]});
  }
  displayscreen(): void{
    this.displayCreateEvent = true;
  }

}
