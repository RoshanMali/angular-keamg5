import { Component, OnInit } from '@angular/core';

import { demoService } from "../demo.service";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  form: FormGroup;

  constructor(private service: demoService, private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      id: [],
      employee_name: [],
      employee_salary: [],
      employee_age: []
    });
  }
  add() {
    this.service.postEmployee(this.form.value).subscribe();
  }
}