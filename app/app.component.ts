import { Component } from '@angular/core';
import { RoomService } from '././room.service';
//import { RatingComponent } from './rating.component';
//import { Rating22Component } from './rating22.component';
//import { UserFormComponent } from './user-form.component';
import { Slider} from './slider.component';


/*@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ventilation';
}
*/




@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `


  
  <rooms></rooms> 
  

  




  ` ,
  styleUrls: ['./app.component.css'],
  providers: [RoomService]
})
export class AppComponent {
    //<slider></slider>
//<mat-slider min="1" max="5" step="0.5" value="1.5"></mat-slider>
    //*ngFor="let counter of numberOfQuestions"

    //<rooms></rooms>
    //<product [data]="product"></product>

    //<app-navigation></app-navigation>
//    <products></products> 


    /*
    <div class="row">
<div class="col-xs-8">
                    <h2>Progress:</h2>
                    <div class="btn-toolbar">
                        <!-- ng-repeat to loop throuh all questions and display the button markup for each -->
                        
                        <div >
                        <button class="btn btn-primary">
                        </button>
                        </div>   
                        
                    </div>
                </div>

<div class="col-xs-4">
                    <div class="row">
                        <h4>Legend:</h4>
                        <div class="col-sm-4">
                            <button class="btn btn-info">
                                <span class="glyphicon glyphicon-pencil"></span>
                            </button>
                            <p>Answered</p>
                        </div>
                        <div class="col-sm-4">
                            <button class="btn btn-danger">
                                <span class="glyphicon glyphicon-question-sign"></span>
                            </button>
                            <p>Unanswered</p>
                        </div>
                    </div>
                </div>

</div>
    */

    myModel=0;
  title = 'Second997';
  isValid = !false;
  imageUrl = " https://www.w3schools.com/html/pic_mountain.jpg";

  onClickMe($event){
    console.log("Clicked77",$event)
    }
}
