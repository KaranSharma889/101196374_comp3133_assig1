import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SpacexapiService } from './../network/spacexapi.service';
import { Mission } from './../models/mission';

@Component({
  selector: 'app-missionslist',
  templateUrl: './missionslist.component.html',
  styleUrls: ['./missionslist.component.css']
})
export class MissionslistComponent implements OnInit {

  allMissions: Mission[] = [];

  constructor(
    private SpacexapiService: SpacexapiService
  ) { }

  ngOnInit(): void {
    this.getAllMissionsList();
  }

  //get all missions list
  getAllMissionsList() {
    this.SpacexapiService.getMissionsList().subscribe((res:any) => {
      this.allMissions = res;
      console.log(this.allMissions[0].mission_name)
    })
  }

}
