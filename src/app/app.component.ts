import { Component, VERSION } from '@angular/core';

interface Stat {
  value: string;
  displayText: string;
  icon: string;
  enabled: boolean;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tours of Heroes';

  allowedParams = new Map<'ON' | 'OFF', Stat>([
    [
      'ON',
      { value: 'ON', icon: 'done', displayText: 'Enable', enabled: false }
    ],
    [
      'OFF',
      { value: 'OFF', icon: 'close', displayText: 'Disable', enabled: false }
    ]
  ]);

  developmentMode: any;
  maintenanceMode: any;

  copyObject(inputMap) {
    console.log(inputMap);
    var copiedMap = new Map<string, Stat>([]);
    inputMap.forEach((value: Stat, key: string) => {
      console.log(key, value);
      copiedMap.set(key, value);
    });
    console.log(copiedMap);
    return copiedMap;
  }

  getAllowedOperations(currentMode, currentState) {
    this.developmentMode = this.copyObject(this.allowedParams);
    this.maintenanceMode = this.copyObject(this.allowedParams);
    console.log('maintenacn');
    console.log(this.maintenanceMode.get('ON'));
    console.log(this.maintenanceMode.get('OFF'));
    console.log('dev');
    console.log(this.developmentMode.get('ON'));
    console.log(this.developmentMode.get('OFF'));
    this.maintenanceMode.get('ON').enabled = true;
    console.log('maintenacn');

    console.log(this.maintenanceMode.get('ON'));
    console.log(this.maintenanceMode.get('OFF'));
    console.log('dev');

    console.log(this.developmentMode.get('ON'));
    console.log(this.developmentMode.get('OFF'));
  }
}
