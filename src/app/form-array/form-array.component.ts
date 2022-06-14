import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent implements OnInit {
  myForm: any = FormGroup;
  arr: any = FormArray;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      'name': new FormControl("", [Validators.required]),
      'address': new FormControl("", [Validators.required]),
      'phone_number': new FormControl("", [Validators.required]),
      'email': new FormControl("", [Validators.required]),
      'date': new FormControl("", [Validators.required]),
      arr: this.fb.array([this.createItem()])
    })
  }
  createItem() {
    return this.fb.group({
      patient_name: [""],
      date_admit: [""]
    })
  }
  add() {
    this.arr = this.myForm.get('arr') as FormArray;
    this.arr.push(this.createItem());
  }
  remove(i: number) {
    this.arr = this.myForm.get('arr') as FormArray;
    this.arr.removeAt(i);

  }
  submit() {
    console.log(this.myForm);
    console.log(this.myForm.value);
  }

}
