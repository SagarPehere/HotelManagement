import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { FormApiService } from 'src/app/services/form-api.service';

@Component({
  selector: 'app-app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    images:string="assets/images/background.jpg";

  constructor(private breakpointObserver: BreakpointObserver, private formApi: FormApiService) {}
  

  // userModuleSelected(){
  //   let selectedModule = "users";
  //   this.formApi.moduleNavigation(selectedModule);
  // }
  // adminModuleSelected(){
  //   let selectedModule = "Admin";
  //   this.formApi.moduleNavigation(selectedModule);
  // }
  // ownerModuleSelected(){
  //   let selectedModule = "owners";
  //   this.formApi.moduleNavigation(selectedModule);
  // }
  ModuleSelected(endpoint:string){
      let selectedModule = endpoint;
      this.formApi.moduleNavigation(selectedModule);
    }

}
