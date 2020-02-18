import { Component, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class demoService {
  constructor(private http: HttpClient) {}

  url = "http://dummy.restapiexample.com/api/v1/employees";

  getAllEmployees() {
    return this.http.get(this.url);
  }
  getAllEmployeesById(id) {
    return this.http.get(this.url,id);
  }
  postEmployee(employee) {
    return this.http.post(this.url, employee);
  }
  updateEmployee(id, employe) {
    return this.http.put(this.url, id, employe);
  }
  deleteEmployee(id) {
    return this.http.delete(this.url, id);
  }
}
