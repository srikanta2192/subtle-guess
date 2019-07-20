import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  response_content = {
    choice: "choice",
    other_choices: ["1", "2"]
  }
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.post("http://localhost:3000", {
      choices: ["Yash", "Srikanta", "Mitesh", "Anusha"]
    }).subscribe((response: any)=>{
      this.response_content = response
      console.log(response)
    })
  }

}
