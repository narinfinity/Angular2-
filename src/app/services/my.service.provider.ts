import { DataService } from './data.service';
import { MyService } from './my.service';


let myServiceFactory = (dataService: DataService) => {
  return new MyService(dataService);
};

export let myServiceProvider =
  {
    provide: MyService,
    useFactory: myServiceFactory,
    deps: [DataService]
  };