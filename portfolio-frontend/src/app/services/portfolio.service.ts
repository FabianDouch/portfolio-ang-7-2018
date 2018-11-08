import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FormGroup, FormBuilder, Validators, NgForm }  from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  portfolioList: AngularFireList<any>;

  constructor(
    private firebase: AngularFireDatabase,
    private fb: FormBuilder
  ) {

  }
  form = this.fb.group({
    $key: [null],
    title: [null, [Validators.required, Validators.minLength(4)]],
    link: [null,[Validators.required, Validators.minLength(4)]],
    imageUrl: [null],
    //change this to automatically get a full list of tags
    tags: [null],
    description: [null, [Validators.required, Validators.minLength(4)]],
    featured: [false]
  });

  tagsForm = this.fb.group({
    $key: [null],
    $tagName: [null, [Validators.required]]
  });


  getAllPortfolioItems () {
    this.portfolioList = this.firebase.list('portfolio');
    return this.portfolioList.snapshotChanges();
  }

  addPortfolioItem (portfolioItem) {
    this.portfolioList.push({
     title: portfolioItem.title,
     link: portfolioItem.link,
     imageUrl: portfolioItem.imageUrl,
     tags: portfolioItem.tags,
     description: portfolioItem.description,
     featured: portfolioItem.featured
    });
  }

  populateForm (portfolio) {
    this.form.setValue(
      {
        $key: portfolio.$key,
        title: portfolio.title,
        link: portfolio.link,
        imageUrl: '',
        tags: '',
        description: portfolio.description,
        featured: portfolio.featured
      }
    );

  }

  updatePortfolioItem (portfolio) {
    this.portfolioList.update(portfolio.$key, {
      title: portfolio.title,
      link: portfolio.link,
      imageUrl: '',
      tags: '',
      description: portfolio.description,
      featured: portfolio.featured
    });
  }

  deletePortfolioItem ($key: string) {
    this.portfolioList.remove($key);
  }








}
