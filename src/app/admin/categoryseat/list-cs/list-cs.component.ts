import { Component, OnInit } from '@angular/core';
import { CategorySeatsService } from 'src/app/services/api/admin/categoryseat.service';
import { categorySeatdto } from 'src/app/services/model/categoryseatdto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-cs',
  templateUrl: './list-cs.component.html',
  styleUrls: ['./list-cs.component.css'],
})
export class ListCsComponent implements OnInit {
  private catseatId: any;
  items = 5;
  categoryseatdto: any;
  p: number = 1;

  constructor(private catseat: CategorySeatsService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.catseat.getAllCategorySeats().subscribe((res) => {
      this.categoryseatdto = res.data;
    });
  }


  deleteCs(catseatId: any) {
    this.catseatId = catseatId;
  }

  confirmDeleteCs() {
    this.catseat.deleteCatSeat(this.catseatId).subscribe((res) => {
        alert('Xóa loại ghế thành công');
        this.router.navigate(['/admin/list-cs']);
        this.getAll()
      },
      () => {
        alert('Xóa thất bại');
      });
  }
}
