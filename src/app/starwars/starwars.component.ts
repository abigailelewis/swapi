import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service';
// import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms'
@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.css']
})
export class StarwarsComponent implements OnInit {
  value: Object;
  form: FormGroup;

  // people: any = [];
  // films: any = [];
  // starships: any = [];

  constructor(private starwars:StarwarsService, private formBuilder: FormBuilder ) { } //private route: ActivatedRoute, private router: Router

  ngOnInit() {

    this.form = this.formBuilder.group({
      type: new FormControl(),
      term: new FormControl()
    })
  //   this.getPeople();
  //   this.getFilms();
  //   this.getStarships();
  // }

}
onSubmit(){
  this.starwars.getValue(this.form.value.type, this.form.value.term ).subscribe(data => {
    this.value = data;
    console.log(data);
  });
}
}
// getPeople() {
//   this.people = [];
//   this.starwars.getPeople().subscribe((data: []) => {
//     console.log(data);
//     this.people = data;
//   });
// }
// getFilms() {
//   this.films = [];
//   this.starwars.getFilms().subscribe((data1: []) => {
//     console.log(data1);
//     this.films = data1;
//   });
// }

// getStarships() {
//   this.starships = [];
//   this.starwars.getStarships().subscribe((data2: []) => {
//     console.log(data2);
//     this.starships = data2;
//   });


