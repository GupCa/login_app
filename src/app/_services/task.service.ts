import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '@/_models';

@Injectable({ providedIn: 'root' })
export class TaskService {
    constructor(private http: HttpClient) { }

    getTask() {
        return this.http.get<User[]>(`${config.taskApiUrl}/task`);
    }
}