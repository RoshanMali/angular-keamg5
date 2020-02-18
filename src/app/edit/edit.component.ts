import { Component, OnInit, Input } from "@angular/core";
import { demoService } from "../demo.service";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  form: FormGroup;
  @Input() selected: string;
  constructor(private service: demoService, private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      id: [],
      employee_name: [],
      employee_salary: [],
      employee_age: []
    });
    this.service.getAllEmployeesById(this.selected).subscribe(x => {
      this.form.patchValue(x);
    })
  }
  update() {
    this.service.updateEmployee(this.selected, this.form.value).subscribe();
  }
}
