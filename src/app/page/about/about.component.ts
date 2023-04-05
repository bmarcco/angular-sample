import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AboutService } from './about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource<any>();
  displayColumns = ['body','id','title','userId'];
  constructor(private service:AboutService) { }

  ngOnInit(): void {

    this.service.getPosts().subscribe((x:any)=>{
      this.dataSource.data = x;
      this.dataSource.paginator = this.paginator;
      console.log(x);
    })
  }

}
