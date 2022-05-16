import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  form:FormGroup=this.fb.group({
    url:''
  })
  currentDate=new Date()
  constructor(private fb:FormBuilder){

  }
  ngOnInit(){
    this.form=this.fb.group ({
      url:['https://www.google.com',[ Validators.required,Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]]
    })
    this.form.get('url')?.valueChanges.pipe(debounceTime(500)).subscribe(value => console.log("form ->",value))
  }
}
