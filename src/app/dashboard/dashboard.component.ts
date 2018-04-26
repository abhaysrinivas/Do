import { OnInit } from '@angular/core';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {User} from "./User";
import { AdventureTimeService } from './asset.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { Observable } from 'rxjs/observable';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  characters: Observable<any[]>;
  columns: string[];
  
  constructor(private atService: AdventureTimeService) { 
      document.getElementById('login').style.display = '';
      document.getElementById('login').innerHTML = 'Logout';
      sessionStorage.setItem('loginTitle', 'Logout');
      document.getElementById('welcome').style.display = '';
      document.getElementById('welcome').style.color = '#ff0080';
  }



  ngOnInit() {
    this.columns = this.atService.getColumns(); 
    //["name", "age", "species", "occupation"]
    this.characters = this.atService.getCharacters();
 
  }


  options = [
    {name:'Organization 1', value:'1', checked:true},
    {name:'Organization 2', value:'2', checked:false},
    {name:'Organization 3', value:'3', checked:true},
    {name:'Organization 4', value:'4', checked:true}

  ]

  get selectedOptions() { // right now: ['1','3']
    return this.options
              .filter(opt => opt.checked)
              .map(opt => opt.value)
  }

  checkoptions() {
    if(this.selectedOptions.length == 1) {
      alert('success')
    } else {
      alert('failure')
    }
  }

}


export const CHARACTERS: any[] =
[
  {
    name: 'Earl of Lemongrab',
    age: 'Unknown',
    species: 'Lemon Candy',
    occupation: 'Earl, Heir to the Candy Kingdom Throne'
  },
  {
    name: 'Bonnibel Bubblegum',
    age: '19',
    species: 'Gum Person',
    occupation: 'Returned Ruler of the Candy Kingdom'
  },
  {
    name: 'Phoebe',
    age: '16',
    species: 'Flame Person',
    occupation: 'Ruler of the Fire Kingdom'
  },
  {
    name: 'Lumpy Space Princess',
    age: '18',
    species: 'Lumpy Space Person', 
    occupation: 'Babysitter'
  },
]

$(document).on('click', '.panel-heading span.clickable', function(e){
  var $this = $(this);
if(!$this.hasClass('panel-collapsed')) {
  $this.parents('.panel').find('.panel-body').slideUp();
  $this.addClass('panel-collapsed');
  $this.find('i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
} else {
  $this.parents('.panel').find('.panel-body').slideDown();
  $this.removeClass('panel-collapsed');
  $this.find('i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
}
})
