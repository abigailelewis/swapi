
import { Component, OnInit } from '@angular/core';
import { StarwarsService } from './starwars.service';
// import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms'
@Component({
  selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {
  value: Object;
  form: FormGroup;


  constructor(private starwars:StarwarsService, private formBuilder: FormBuilder ) { } //private route: ActivatedRoute, private router: Router

  ngOnInit() {

    this.form = this.formBuilder.group({
      type: new FormControl(),
      term: new FormControl()
    })

}
onSubmit(){
  this.starwars.getValue(this.form.value.type, this.form.value.term ).subscribe(data => {
    this.value = data;
    console.log(data);
  });
}
}

