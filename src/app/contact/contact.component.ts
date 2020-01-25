import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmailService } from '../shared/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild('userMessage', {static: true}) userMessage: ElementRef;
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
        response => {
          if (response === 'sent') {
            this.configureUserMessage('success', 'Message Sent!');
          } else if (response === 'failure') {
            this.configureUserMessage('failure', 'Message was unable to send. Try again or contact me at austin.scott.j@gmail.com.');
          }
        },
        err => {
          this.configureUserMessage('failure', 'Message was unable to send. Try again or contact me at austin.scott.j@gmail.com.');
        }
      );
      this.contactForm.reset();
    } else {
      this.configureUserMessage('failure', 'Please enter valid Email address and message.');
    }
  }

  configureUserMessage(className: string, message: string) {
    this.userMessage.nativeElement.classList.add(className);
    this.userMessage.nativeElement.innerText = message;
    setTimeout(() => {
      this.userMessage.nativeElement.innerText = '';
      this.userMessage.nativeElement.classList.remove(className);
    }, 3000);
  }
}
