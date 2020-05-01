import { Component, OnInit, ViewChild, ElementRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs/operators';
import { TypeaheadSearchComponent } from '../typeahead-search/typeahead-search.component';
import { CountryService } from '../service/country.service';

@Component({
  selector: 'app-darshboard',
  templateUrl: './darshboard.component.html',
  styleUrls: ['./darshboard.component.scss']
})
export class DarshboardComponent implements OnInit {

  @ViewChild('searchBtn') public searchBtn: ElementRef;
  @ViewChild('searchcontainer', { read: ViewContainerRef }) entry: ViewContainerRef;
  isSearchActive: Observable<boolean>;
  public inActiveSearchSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  componentRef: any;

  private searchDataSource: Array<any> = [];
  selectedItem: any;

  constructor(private factoryResolver: ComponentFactoryResolver,
              private countryService: CountryService) { }

  ngOnInit() {
    this.isSearchActive = this.inActiveSearchSubject.asObservable().pipe(delay(0));

    this.countryService.getAllCountry().subscribe(data => {
      this.searchDataSource = data;
    });

    this.initializeSearch();
  }

  initializeSearch(): void {
    this.isSearchActive.subscribe((isActive: boolean) => {
      if (isActive) {
        // initialize component
        setTimeout(() => {
          this.entry.clear();
          const factory = this.factoryResolver.resolveComponentFactory(TypeaheadSearchComponent);
          this.componentRef = this.entry.createComponent(factory);
          const searchDataSource = this.searchDataSource.map(item => Object.assign({}, item));
          this.componentRef.instance.searchDataSource = searchDataSource;
          this.initializeSearchSubscriber();
        });
      } else {
        // remove component
      }
    });
  }

  initializeSearchSubscriber(): void {
    if (this.componentRef) {
      this.componentRef.instance.userSelectedResult.subscribe((result: any) => {
        console.log(result);
        this.selectedItem = result.target;
        this.selectedItem = JSON.stringify(this.selectedItem, null, 2);

        console.log(this.selectedItem);
      });

      this.componentRef.instance.closeSearchEvent.subscribe(value => {
        this.closeSearch();
      });
    }
  }

  searchOnTable(): void {
    this.inActiveSearchSubject.next(true);
  }

  closeSearch(): void {
    this.inActiveSearchSubject.next(false);
  }

}
