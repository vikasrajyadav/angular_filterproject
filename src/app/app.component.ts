import { Component } from "@angular/core";
import { card_data } from "./app.model";
import { Subject } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "demo-app";
  card_datas: card_data[] = [
    new card_data(
      'Maths','12 std mathematics','http://www.clipartroo.com/images/7/scientist-clipart-7718.png','tag 1','science','english','me','Image',
    ),  new card_data(
      'English','12 std english','http://www.clipartroo.com/images/7/scientist-clipart-7718.png','tag 2','Commerce','Hindi','you','Video',
    ),
  ];

  ngOnInit(){}

  filterApplied: boolean = false;
  File_type = [
    { name: "image", id: "1", htmlId: "image1" },
    { name: "video", id: "2", htmlId: "video1" },
    { name: "html", id: "3", htmlId: "html1" },
    { name: "text", id: "4", htmlId: "text1" }
  ];
  Level = [
    { name: "level 1", htmlId: "level1", id: "1" },
    { name: "level 2", htmlId: "level2", id: "2" },
    { name: "level 3", htmlId: "level3", id: "3" }
  ];
  Author = [
    { name: "Author1", htmlId: "Author1", id: "1" },
    { name: "Author2", htmlId: "Author2", id: "2" },
    { name: "Author3", htmlId: "Author3", id: "3" }
  ];
  Subject = [
    { name: "Business", htmlId: "business1", id: "1" },
    { name: "programming", htmlId: "business2", id: "2" },
    { name: "HR", htmlId: "business3", id: "3" }
  ];

  skill = [
    {
      name: "Business",
      author: "Author1",
      Language: "English",
      description:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
      category: "level 1",
      file_type: "video",
      tag: ["tag-1", "tag-2", "tag-3"],
      imagePath: "https://dummyimage.com/vga",
      id: "1"
    },
    {
      name: "programming",
      author: "Author1",
      Language: "C",
      description: "dummy 2 dummy 2 dummy 2 dummy 2 dummy 2 dummy 2 ",
      category: "level 2",
      file_type: "image",
      tag: ["tag-1", "tag-2", "tag-3"],
      imagePath: "https://dummyimage.com/vga",
      id: "2"
    },
    {
      name: "programming",
      author: "Author2",
      Language: "C++",
      description: "dummy 3 dummy 3 dummy 3 dummy 3 dummy 3 dummy 3 ",
      category: "level 3",
      file_type: "text",
      tag: ["tag-1", "tag-2", "tag-3"],
      imagePath: "https://dummyimage.com/vga",
      id: "3"
    },
    {
      name: "HR",
      author: "Author2",
      Language: "Candidate Apti",
      description: "dummy 4 dummy 4 dummy 4 dummy 4 dummy 4 dummy 4 dummy 4 ",
      category: "level 3",
      file_type: "html",
      tag: ["tag-1", "tag-2", "tag-3"],
      imagePath: "https://dummyimage.com/vga",
      id: "4"
    },
    {
      name: "Business",
      author: "Author3",
      Language: "English",
      description:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
      category: "level 1",
      file_type: "video",
      tag: ["tag-1", "tag-2", "tag-3"],
      imagePath: "https://dummyimage.com/vga",
      id: "5"
    },
    {
      name: "Business",
      author: "Author2",
      Language: "English",
      description:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
      category: "level 1",
      file_type: "video",
      tag: ["tag-1", "tag-2", "tag-3"],
      imagePath: "https://dummyimage.com/vga",
      id: "6"
    },
    {
      name: "Business",
      author: "",
      Language: "English",
      description:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
      category: "level 1",
      file_type: "video",
      tag: ["tag-1", "tag-2", "tag-3"],
      imagePath: "https://dummyimage.com/vga",
      id: "7"
    }
  ];

  constructor() {}

  // subject filteration starts here

  subject_filter_array = [];
  subjectName_boolean;
  filter_value_subj = "";
  subj;

  filterSkill = [];

  subjectName(subj) {
    console.log(subj.name);
    this.subject_filter_array.push(subj.name);
    this.filter_value_subj = subj.name;
    console.log(this.subject_filter_array);

    this.filterApplied = true;

    if (this.subjectName_boolean) {
      // call function
      // pushing data into the array filterskill
      this.onFilterSubjectPush();
    } else {
      // calling the function
      // deleting data from the array filterskill
      this.onFilterSubjectPop();

    }

    console.log('before filter skill');
    console.log(this.filterSkill);
    console.log('after filter skill');

    if(this.filterSkill.length === 0){
      this.filterApplied = false;
      console.log("reest");
    }

  }

  onFilterSubjectPush() {
    var data_filter = this.skill.filter(
      element => element.name == this.filter_value_subj
    );

    for (var i = 0; i < data_filter.length; i++) {
      this.filterSkill.push(data_filter[i]);
    }
    console.log(this.filterSkill);
  }


  onFilterSubjectPop() {
    var data_filter_pop = this.filterSkill.filter(
      element => element.name == this.filter_value_subj
    );

    for (var i = 0; i<this.filterSkill.length; i++) {
      for (var j = 0; j < data_filter_pop.length; j++) {

        if(this.filterSkill[i].id == data_filter_pop[j].id){
          this.filterSkill.splice(i,1);
          console.log(this.filterSkill);
          // console.log(data_filter_pop);
        }else{
          break;
        }
      }
    }
  }

  // subject filteration ends here


// Author filteration starts here

author_filter_array = [];
authorName_boolean;
filter_value_auth = "";
auth;

filterSkill2 = [];

authorName(auth) {
  // console.log("before");
  // console.log(auth.name);
  // console.log("after");
  // this.author_filter_array.push(auth.name);
  this.filter_value_auth = auth.name;
  // // console.log(this.author_filter_array);

  this.filterApplied = true;

  if (this.authorName_boolean) {
    // call function
    // pushing data into the array filterskill
    this.onFilterAuthorPush();
  } else {
    // calling the function
    // deleting data from the array filterskill
    this.onFilterAuthorPop();

    // console.log(this.filterSkill);
  }

  // console.log('before filter2 skill');
  // console.log('after filter2 skill');

  // if(this.filterSkill.length === 0){
  //   this.filterApplied = false;
  //   console.log("author reset");
  // }
}

onFilterAuthorPush() {
  var data_filter = this.skill.filter(
    element => element.author == this.filter_value_auth
  );

  for (var i = 0; i < data_filter.length; i++) {


    if(this.filterSkill.length == 0){
      this.filterSkill.push(data_filter[i]);
      console.log("pushed");
      console.log(this.filterSkill[i].id);
    }
    else{
     if(this.filterSkill[i].name){

     } else{

     }
    }

  }
  // console.log("author ARRAY");
  // console.log(this.filterSkill2);
}


onFilterAuthorPop() {
  var data_filter_pop = this.filterSkill.filter(
    element => element.author == this.filter_value_auth
  );

  for (var i = 0; i<this.filterSkill.length; i++) {
    for (var j = 0; j < data_filter_pop.length; j++) {

      if(this.filterSkill[i].id == data_filter_pop[j].id){
        this.filterSkill.splice(i,1);
        console.log(this.filterSkill);
        // console.log(data_filter_pop);
      }else{
        break;
      }
    }
  }
}

// Author filteration ends here
mergedArray = this.skill;
  // merging array
  // filter_mergedarray() {

  //   for (var i = 0; i < this.filterSkill.length; i++) {
  //     this.mergedArray.push(this.filterSkill[i]);
  //   }
  //   console.log(this.mergedArray);

  // }

  onUpdateSubjectName(event: Event) {
    this.subjectName_boolean = (<HTMLInputElement>event.target).checked;
    console.log(this.subjectName_boolean);
  }

  onUpdateAuthorName(event: Event) {
    this.authorName_boolean = (<HTMLInputElement>event.target).checked;
    console.log(this.authorName_boolean);
  }

  // function to push array in the filter skill
}
