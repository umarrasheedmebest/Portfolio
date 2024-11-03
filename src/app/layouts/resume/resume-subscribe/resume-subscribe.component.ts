import { Component, OnInit, Inject } from "@angular/core";
import { Validators, FormGroup, FormBuilder, } from "@angular/forms";
import { DOCUMENT } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment.prod";

@Component({
  selector: 'app-resume-subscribe',
  templateUrl: './resume-subscribe.component.html',
  styleUrls: ['./resume-subscribe.component.scss']
})
export class ResumeSubscribeComponent implements OnInit {

  public getjsonvalue: any;
  public postjsonvalue: any;
  public myForm: FormGroup;
  public submitted: boolean;
  public blogData: any;
  public work: any = "Poultry Broiler";
  public activeClass = "index";

  constructor(
    private http: HttpClient,
    @Inject(DOCUMENT) private document: Document,
    private FB: FormBuilder,
  ) { }

  ngOnInit() {
    debugger;
    this.myForm = this.FB.group({
      id: [""],
      requestType: ["", [Validators.required]],
      requestByName: ["", [Validators.required]],
      companyName: ["", [Validators.required]],
      mobile: ["", [Validators.required]],
      email: ["", [Validators.required]],
      message: [""],
      sourceurl: [""],
    });
  }

  async submit() {
  //   let values = this.myForm.value;
  //   if (!this.myForm.controls["id"].value) {
  //     this.myForm.controls["id"].setValue(0);
  //   }
  //   if (!this.myForm.controls["requestType"].value) {
  //     this.myForm.controls["requestType"].setValue("Proposal Quotation");
  //   } else {
  //     this.myForm.controls["requestType"].setValue("Demo request");
  //   }
  //   await this.http
  //     .post(environment.apiURL + "Customer_Request/save", this.myForm.value)
  //     .toPromise()
  //     .then((user: any) => {
  //       debugger;
  //       if (user.id > 0) {
  //         this.myForm.controls["id"].setValue(user.id);
  //         alert(user.messages);
  //       } else { }
  //     })
  //     .catch((error) => {
  //       if (error) {
  //       }
  //     });
  // }
  // public getMathod() {
  //   this.http.get("");
  }
}

