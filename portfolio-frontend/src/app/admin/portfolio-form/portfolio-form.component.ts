import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-portfolio-form',
  templateUrl: './portfolio-form.component.html',
  styleUrls: ['./portfolio-form.component.scss']
})
export class PortfolioFormComponent implements OnInit {

  submitted = false;
  showSuccessMessage = false;
  portfolioCreateForm = this.portfolioService.form;

  //formControls = this.portfolioService.form.controls;
  constructor(
    private portfolioService: PortfolioService
  ) { }

  ngOnInit() {

  }

  // convenience getter for easy access to form fields
  get formControls() { return this.portfolioCreateForm.controls; }

  addPortfolioPost() {
      this.submitted = true;
      if (this.portfolioCreateForm.invalid) {
        return;
      }
      if (this.portfolioCreateForm.get('$key').value === null){
        this.portfolioService.addPortfolioItem(this.portfolioCreateForm.value);
        this.showSuccessMessage = true;
        this.submitted = false;
        this.portfolioCreateForm.reset();

      } else {
        this.portfolioService.updatePortfolioItem(this.portfolioCreateForm.value);
      }




  }

}
