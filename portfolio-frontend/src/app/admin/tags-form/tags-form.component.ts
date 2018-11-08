import { Component, OnInit } from '@angular/core';
import { FormBuilder }  from '@angular/forms';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-tags-form',
  templateUrl: './tags-form.component.html',
  styleUrls: ['./tags-form.component.scss']
})
export class TagsFormComponent implements OnInit {

  submitted = false;
  tagsCreateForm = this.portfolioService.tagsForm;
  constructor(
    private portfolioService: PortfolioService
  ) { }

  ngOnInit() {
  }

  addTags() {
    console.log("tags");
  }

}
