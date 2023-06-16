import { Component, OnInit } from '@angular/core';
import { categorySeatdto } from '../../../services/model/categoryseatdto';
import { CategorySeatsService } from '../../../services/api/admin/categoryseat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-cs',
  templateUrl: './create-cs.component.html',
  styleUrls: ['./create-cs.component.css'],
})
export class CreateCsComponent implements OnInit {
  categorySeat: any;
  price: any;

  constructor(private catSeat: CategorySeatsService, private router: Router) {
  }

  ngOnInit(): void {
  }

  add() {
    this.catSeat.addNewCategorySeat({categorySeatName: this.categorySeat, price: this.price}).subscribe((res) => {
        alert('Thêm mới thành công');
        this.router.navigate(['/admin/list-cs']);
      },
      () => {
        alert('Thêm mới thất bại');
      });
  }
}
