import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const blogs = [
      { id: 1, title: 'Mr. Nice' , content: 'Some content inside are  usually boring and dull plaese check the content decide the content'},
      { id: 2, title: 'Narco'    , content: 'Some content inside are  usually boring and dull plaese check the content decide the content'},
      { id: 3, title: 'Bombasto' , content: 'Some content inside are  usually boring and dull plaese check the content decide the content'},
      { id: 4, title: 'Celeritas', content: 'Some content inside are  usually boring and dull plaese check the content decide the content'},
      { id: 5, title: 'Magneta'  , content: 'Some content inside are  usually boring and dull plaese check the content decide the content'},
      { id: 6, title: 'RubberMan', content: 'Some content inside are  usually boring and dull plaese check the content decide the content'},
      { id: 7, title: 'Dynama'   , content: 'Some content inside are  usually boring and dull plaese check the content decide the content'},
      { id: 8, title: 'Dr IQ'    , content: 'Some content inside are  usually boring and dull plaese check the content decide the content'},
      { id: 9, title: 'Magma'    , content: 'Some content inside are  usually boring and dull plaese check the content decide the content'},
      { id: 10, title: 'Tornado' , content: 'Some content inside are  usually boring and dull plaese check the content decide the content'}
    ];
return {blogs};
  }
}
