import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm!: FormGroup;
  data:any;
  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)]],
      message: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  submitForm(): void {
    if (this.contactForm.valid) {
      // Perform your form submission logic here
      console.log(this.contactForm.value);
      // Reset the form after submission
      this.contactForm.reset();
    } else {
      // Mark all form controls as touched to display validation errors
      this.markAllControlsAsTouched();
    }
  }

  markAllControlsAsTouched(): void {
    for (const controlName in this.contactForm.controls) {
      if (this.contactForm.controls.hasOwnProperty(controlName)) {
        this.contactForm.controls[controlName].markAsTouched();
      }
    }
  }
}
