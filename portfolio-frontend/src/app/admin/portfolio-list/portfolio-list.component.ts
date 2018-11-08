import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.scss']
})
export class PortfolioListComponent implements OnInit {

  portfolioArray = [];
  showDeleteMessage = false;
  searchText: string ="";
  constructor(
    private portfolioService: PortfolioService
  ) { }

  ngOnInit() {
    this.portfolioService.getAllPortfolioItems().subscribe(
      list => {
        this.portfolioArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
        console.log(this.portfolioArray);
      }
    );


  }

  confirmDeletePortfolioItem ($key) {
    if (confirm('Are you sure?')) {
      this.portfolioService.deletePortfolioItem($key);
      this.showDeleteMessage = true;
      setTimeout( () => this.showDeleteMessage = false, 3000);
    }
  }

  filterCondition(portfolio) {
    return portfolio.title.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }



}
