import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormApiService {

  listUrl = "http://localhost:3000/Hotel-List";

  userUrl!: string;
  email: any;
  getApiData: any;
  postData: any = [];
  postDataObj: any;
  hotelListbyOwner: any = [];
  postApiData: any;
  deleteDatabyOwner: any;
  isNewRegistration = false;
  hotelId: any;
  signUpOwner: any;
  signUpUser: any;
  signUpAdmin: any;
  isUserloggedin = false;

  subject = new Subject<any>();



  moduleNavigation(module: string) {
    this.userUrl = `http://localhost:3000/${module}`;
  }

  constructor(private apiRequest: HttpClient) { }

  // adding new user/admin/owner 
  addUsers(user: any) {
    return this.apiRequest.post(this.userUrl, user);
  }

  // Checking authentication of user/admin/owner
  getApi() {
    return this.apiRequest.get(this.userUrl)
  }

  getHotellist() {
    return this.apiRequest.get(this.listUrl);
  }
  //for admin/owner
  deleteApi(id: any) {
    return this.apiRequest.delete(this.listUrl + "/" + id)
  }

  postHotelCall(body: any) {
    return this.apiRequest.post(this.listUrl, body)
  }
  patchHotelCall(formData: any) {
    return this.apiRequest.patch(this.listUrl + '/' + this.hotelId, formData)
  }

  //getHotelCall by Id
  getHotelCallById(id: any) {
    return this.apiRequest.get(this.listUrl + "/" + id)
  }



}
