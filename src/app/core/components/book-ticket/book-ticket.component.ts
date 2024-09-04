import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.scss']
})
export class BookTicketComponent implements OnInit {
  constructor(private eref: ElementRef) { }

  trip = [
    { text: 'One way', value: 'ONE_WAY', icon: 'arrow_right_alt' },
    { text: 'Round trip', value: 'ROUND_TRIP', icon: 'compare_arrows' },
    { text: 'Multi city', value: 'MULTI_CITY', icon: 'map' }
  ]

  class: String[] = [
    'Economy',
    'Business',
    'First'
  ]

  todayDate: Date = new Date();

  tripClicked: boolean = false;

  guestClicked: boolean = false;

  classClicked: boolean = false;

  addButtonEnabled: boolean = false;

  totalPassengers: number = 1;

  tripValue = {
    text: 'One way', value: 'ONE_WAY', icon: 'arrow_right_alt'
  };

  classValue: String = this.class[0];

  guestDropdownContents = [
    { id: 1, header: 'Adults', description: 'Age 12+', value: 1 },
    { id: 2, header: 'Children', description: 'Age 2 – 11 years', value: 0 },
    { id: 3, header: 'Infants', description: 'Under 2 years', value: 0 },
    { id: 4, header: 'Infants with Seat', description: 'Under 2 years', value: 0 }
  ]

  guestData = {};

  searchForm!: FormGroup;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.searchForm = new FormGroup({
      trip: new FormControl(this.trip[0]),
      guests: new FormControl(null),
      class: new FormControl(null),
      journeyDetails: new FormArray([])
    })
  }

  @HostListener('document:click', ['$event'])
  onWindowClick(event: MouseEvent) {
    // if (!this.eref.nativeElement.contains(event.target)) {
    //   this.tripClicked = false;
    //   this.guestClicked = false;
    // }
    let clickedInsideOfTrip = (event.target as HTMLElement).closest('.drop-down');
    let clickedInsideOfGuest = (event.target as HTMLElement).closest('.guest-drop-box');
    if (!clickedInsideOfTrip) {
      this.tripClicked = false;
      this.classClicked = false;
    }
    if (!clickedInsideOfGuest) {
      this.guestClicked = false;
    }
  }

  onclickTrip(event: Event): void {
    this.tripClicked = !this.tripClicked;
    this.guestClicked = false;
    this.classClicked = false;
    event.stopPropagation();
  }

  onSelectTrip(data: any): void {
    this.tripValue = data;
    this.tripClicked = false;
  }

  onGuestClick(event: Event): void {
    this.guestClicked = !this.guestClicked;
    this.tripClicked = false;
    this.classClicked = false;
    event.stopPropagation();
  }

  addReduceGuestPersons(data: any, action: string): void {
    if (data) {
      this.addButtonEnabled = this.totalPassengers > 9 ? true : false;
      let updateItem: any = this.guestDropdownContents.find((item) => {
        return item.id == data.id
      });
      if (action == 'Add' && this.totalPassengers < 10) {
        updateItem['value'] = updateItem?.value + 1;
      } else if (action == 'Reduce' && this.totalPassengers > 1) {
        if (updateItem.id == 1 && updateItem.value > 1) {
          updateItem['value'] = updateItem?.value - 1;
        } else if (updateItem.id !== 1 && updateItem.value > 0) {
          updateItem['value'] = updateItem?.value - 1;
        }
      }
      this.totalPassengers = this.guestDropdownContents.reduce((acc, curr) => { return acc + curr.value; }, 0);
    }
  }

  onClickClass(event: Event): void {
    this.classClicked = !this.classClicked;
    this.guestClicked = false;
    this.tripClicked = false;
    event.stopPropagation();
  }

  selectClass(data: any): void {
    this.classValue = data;
    this.classClicked = false;
  }

}
