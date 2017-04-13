import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataProvider 
{
    constructor(private af: AngularFire) {}

    list(path: string): FirebaseListObservable<any> 
    {
        return this.af.database.list(path);
    }

    object(path: string): FirebaseObjectObservable<any> 
    {
       return this.af.database.object(path);
    }
}