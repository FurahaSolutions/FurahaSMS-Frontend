import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';

@Injectable({
  providedIn: 'root'
})

export class DbService {
  db = new PouchDB('libraryClassifications');

  get(data: any) {
    return this.db.get(data);
  }

  put(data: any) {
    return this.db.put(data);
  }
}
