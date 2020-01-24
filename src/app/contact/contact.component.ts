import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmailService } from '../shared/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private email: EmailService) { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl(null),
      email: new FormControl(null, [Validators.required, Validators.email]),
      subject: new FormControl(null),
      message: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    if (this.contactForm.status === 'VALID') {
      const message =  {
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        subject: this.contactForm.value.subject,
        message: this.contactForm.value.message
      };
      this.email.sendMessage(message).subscribe(
        response => console.log(response)
      );
    }
  }
}
