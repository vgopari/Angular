import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("form") form: NgForm;
  student = { email: "", subscription: "" };
  submitted = false;
  subs = ['Basic', 'Advanced', 'Pro'];
  onSubmit() {
    this.submitted = true;
    this.student.email = this.form.value.Email;
    this.student.subscription = this.form.value.Subscription;
  }
}
