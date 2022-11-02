import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-modal-order',
    templateUrl: './modal-order.component.html',
    styleUrls: ['./modal-order.component.css'],
})
export class ModalOrderComponent implements OnInit {
    constructor() {}
    data = [''];
    result = [''];
    reset() {
        this.seats.forEach((seat) => {
            seat.isSelect = false;
        });
    }
    select(id: string) {
        this.seats.forEach((seat) => {
            if (id === seat.id) {
                seat.isSelect = !seat.isSelect;
                this.result.push(seat.name);
                this.data = [...this.result];
            }
        });
       
    }
    

    seats = [
        {
            id: '1A',
            name: '1A',
            isSelect: false,
            disable: true,
        },
        {
            id: '2A',
            name: '2A',
            isSelect: false,
            disable: false,
        },
        {
            id: '3A',
            name: '3A',
            isSelect: false,
            disable: false,
        },
        {
            id: '4A',
            name: '4A',
            isSelect: false,
            disable: false,
        },
        {
            id: '5A',
            name: '5A',
            isSelect: false,
            disable: false,
        },
        {
            id: '6A',
            name: '6A',
            isSelect: false,
            disable: false,
        },
        {
            id: '7A',
            name: '7A',
            isSelect: false,
            disable: false,
        },
        {
            id: '8A',
            name: '8A',
            isSelect: false,
            disable: false,
        },
        {
            id: '9A',
            name: '9A',
            isSelect: false,
            disable: false,
        },
        {
            id: '10A',
            name: '10A',
            isSelect: false,
            disable: false,
        },
        {
            id: '11A',
            name: '11A',
            isSelect: false,
            disable: false,
        },
        {
            id: '12A',
            name: '12A',
            isSelect: false,
            disable: false,
        },
        {
            id: '1B',
            name: '1B',
            isSelect: false,
            disable: false,
        },
        {
            id: '2B',
            name: '2B',
            isSelect: false,
            disable: false,
        },
        {
            id: '3B',
            name: '3B',
            isSelect: false,
            disable: false,
        },
        {
            id: '4B',
            name: '4B',
            isSelect: false,
            disable: false,
        },
        {
            id: '5B',
            name: '5B',
            isSelect: false,
            disable: false,
        },
        {
            id: '6B',
            name: '6B',
            isSelect: false,
            disable: false,
        },
        {
            id: '7B',
            name: '7B',
            isSelect: false,
            disable: false,
        },
        {
            id: '8B',
            name: '8B',
            isSelect: false,
            disable: false,
        },
        {
            id: '9B',
            name: '9B',
            isSelect: false,
            disable: false,
        },
        {
            id: '10B',
            name: '10B',
            isSelect: false,
            disable: false,
        },
        {
            id: '11B',
            name: '11B',
            isSelect: false,
            disable: false,
        },
        {
            id: '12B',
            name: '12B',
            isSelect: false,
            disable: false,
        },
        {
            id: '1C',
            name: '1C',

            isSelect: false,
            disable: false,
        },
        {
            id: '2C',
            name: '2C',

            isSelect: false,
            disable: false,
        },
        {
            id: '3C',
            name: '3C',

            isSelect: false,
            disable: false,
        },
        {
            id: '4C',
            name: '4C',

            isSelect: false,
            disable: false,
        },
        {
            id: '5C',
            name: '5C',

            isSelect: false,
            disable: false,
        },
        {
            id: '6C',
            name: '6C',

            isSelect: false,
            disable: false,
        },
        {
            id: '7C',
            name: '7C',

            isSelect: false,
            disable: false,
        },
        {
            id: '8C',
            name: '8C',

            isSelect: false,
            disable: false,
        },
        {
            id: '9C',
            name: '9C',

            isSelect: false,
            disable: false,
        },
        {
            id: '10C',
            name: '10C',
            isSelect: false,
            disable: false,
        },
        {
            id: '11C',
            name: '11C',
            isSelect: false,
            disable: false,
        },
        {
            id: '12C',
            name: '12C',
            isSelect: false,
            disable: false,
        },
        {
            id: '1D',
            name: '1D',

            isSelect: false,
            disable: false,
        },
        {
            id: '2D',
            name: '2D',

            isSelect: false,
            disable: false,
        },
        {
            id: '3D',
            name: '3D',

            isSelect: false,
            disable: false,
        },
        {
            id: '4D',
            name: '4D',

            isSelect: false,
            disable: false,
        },
        {
            id: '5D',
            name: '5D',

            isSelect: false,
            disable: false,
        },
        {
            id: '6D',
            name: '6D',

            isSelect: false,
            disable: false,
        },
        {
            id: '7D',
            name: '7D',

            isSelect: false,
            disable: false,
        },
        {
            id: '8D',
            name: '8D',

            isSelect: false,
            disable: false,
        },
        {
            id: '9D',
            name: '9D',

            isSelect: false,
            disable: false,
        },
        {
            id: '10D',
            name: '10D',
            isSelect: false,
            disable: false,
        },
        {
            id: '11D',
            name: '11D',
            isSelect: false,
            disable: false,
        },
        {
            id: '12D',
            name: '12D',
            isSelect: false,
            disable: false,
        },
        {
            id: '1E',
            name: '1E',
            isSelect: false,
            disable: false,
        },
        {
            id: '2E',
            name: '2E',
            isSelect: false,
            disable: false,
        },
        {
            id: '3E',
            name: '3E',
            isSelect: false,
            disable: false,
        },
        {
            id: '4E',
            name: '4E',
            isSelect: false,
            disable: false,
        },
        {
            id: '5E',
            name: '5E',
            isSelect: false,
            disable: false,
        },
        {
            id: '6E',
            name: '6E',
            isSelect: false,
            disable: false,
        },
        {
            id: '7E',
            name: '7E',
            isSelect: false,
            disable: false,
        },
        {
            id: '8E',
            name: '8E',
            isSelect: false,
            disable: false,
        },
        {
            id: '9E',
            name: '9E',
            isSelect: false,
            disable: false,
        },
        {
            id: '10E',
            name: '10E',
            isSelect: false,
            disable: false,
        },
        {
            id: '11E',
            name: '11E',
            isSelect: false,
            disable: false,
        },
        {
            id: '12E',
            name: '12E',
            isSelect: false,
            disable: false,
        },
    ];
    ngOnInit(): void {}
}
