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
  // card_datas: card_data[] = [
  //   new card_data(
  //     'Maths','12 std mathematics','http://www.clipartroo.com/images/7/scientist-clipart-7718.png','tag 1','science','english','me','Image',
  //   ),  new card_data(
  //     'English','12 std english','http://www.clipartroo.com/images/7/scientist-clipart-7718.png','tag 2','Commerce','Hindi','you','Video',
  //   ),
  // ];

  ngOnInit() { }

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
      Language: "hindi",
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
      file_type: "image",
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

  fieldValue = ['name', 'Language', 'file_type'];

  filterData = {
    Language: [],
    // Language: ["English", "C++"],
    name: [],
    // name: ['Business'],
    file_type: [],
    // file_type: ['image'],
  };

  constructor() { }

  // subject filteration starts here
  newArray = [];

  SubjectFilterArray = [];
  SubjectName_CheckBoxedStatus;
  SubjectFilteredValue = "";
  subj;

  filterSkill = [];

  // tslint:disable-next-line: member-ordering
  sizeOfFilterData = Object.keys(this.filterData).length;

  // tslint:disable-next-line: variable-name
  filterDataObjectArrayCreation(filterData_CategoryNameForKey: any, FiltersubjectNameForArray: any) {

    let dataValue = null;
    let flag = false;
    let forLoopFlag = false;
// tslint:disable-next-line: forin
    for (const key in this.filterData) {
      if (filterData_CategoryNameForKey === key) {
        flag = true;
        dataValue = key;
        break;
      } else {
        flag = false;
      }
      forLoopFlag = true;
    }

    if (forLoopFlag) {
      // for (const key in this.filterData) {
        if (!flag) {
          Object.assign(this.filterData, { [filterData_CategoryNameForKey]: [] });
        } else {
          (this.filterData[dataValue]).push(FiltersubjectNameForArray);
          console.log(this.filterData[dataValue]);
          console.log('true');
          // break;
        }
      // }
    }
    return true;
  }



  subjectName(subj, cat) {
    // console.log(subj.name);
    console.log(cat);
    this.SubjectFilterArray.push(subj.name);
    this.SubjectFilteredValue = subj.name;
    // console.log(this.SubjectFilterArray);

    this.filterDataObjectArrayCreation(cat, subj.name);

    this.filterApplied = true;

    if (this.SubjectName_CheckBoxedStatus) {
      // call function
      // pushing data into the array filterskill
      // this.onFilterSubjectPush();
      // this.newFunction();
    } else {
      // calling the function
      // deleting data from the array filterskill
      // this.onFilterSubjectPop();

    }

    // console.log('before filter skill');
    // console.log(this.filterSkill);
    // console.log('after filter skill');

    if (this.filterSkill.length === 0) {
      this.filterApplied = false;
      // console.log("reset");
    }

  }

  // _language = ['English'];
  // _name = ['Business'];


  onFilterSubjectPush() {

    // const filter = {
    //   Language: 'English',
    //   name: 'Business',
    //   file_type: "video",
    // };



    // const filter = [
    //   ['Language', 'English', 'hindi'],
    //   ['name', 'Business', 'programming'],
    // ];

    // for (let key of filter) {
    //   console.log(key);
    // }



    this.newArray = [];

    // this.newArray = this.skill.filter(item => {
    //   for (const value of this.fieldValue) {
    //       // if (item[value] === filter[value]) {
    //       //   return true;
    //       // } else {
    //       //   return false;
    //     }
    //   }


    //   // return flag;
    // });

    // function filterFunction() {

    const objectSetter = {
      name: false,
      Language: false,
      file_type: false,
    };

    for (const data of this.skill) {
      objectSetter.name = false;
      objectSetter.Language = false;
      objectSetter.file_type = false;

      for (const value of this.fieldValue) {
        console.log(value);
        for (let i = 0; i < this.filterData[value].length; i++) {
          // console.log('filter value', filter[value][i]);
          if (data[value] === undefined || data[value] !== this.filterData[value][i]) {
            console.log('ifTrue');
          }
          else {
            console.log('ifFalse');
            objectSetter[value] = true;
            break;
          }
        }
      }
      console.log(data);
      // for (let valueCheck of this.fieldValue) {
      if (objectSetter.name && objectSetter.Language && objectSetter.file_type) {
        this.newArray.push(data);
        // }
      }
    }
    // return flag;
    // }

    console.log(this.newArray);



  }

  // onFilterSubjectPush() {
  //   var data_filter = this.skill.filter(
  //     element => element.name == this.SubjectFilteredValue
  //   );
  //     // this.filterSkill = [];
  //   for (var i = 0; i < data_filter.length; i++) {
  //     this.filterSkill.push(data_filter[i]);
  //   }
  //   console.log(this.filterSkill);
  // }


  onFilterSubjectPop() {
    var data_filter_pop = this.filterSkill.filter(
      element => element.name == this.SubjectFilteredValue
    );

    for (var i = 0; i < this.filterSkill.length; i++) {
      for (var j = 0; j < data_filter_pop.length; j++) {

        if (this.filterSkill[i].id == data_filter_pop[j].id) {
          this.filterSkill.splice(i, 1);
          console.log(this.filterSkill);
          // console.log(data_filter_pop);
        } else {
          break;
        }
      }
    }
  }

  // subject filteration ends here


  // Author filteration starts here



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
    this.SubjectName_CheckBoxedStatus = (<HTMLInputElement>event.target).checked;
    console.log(this.SubjectName_CheckBoxedStatus);
  }

  newFunction() {

    const filter = {
      address: 'England',
      name: 'Mark',
      age: 25,
    };
    let users = [{
      name: 'John',
      email: 'johnson@mail.com',
      age: 25,
      address: 'USA'
    },
    {
      name: 'Tom',
      email: 'tom@mail.com',
      age: 35,
      address: 'England'
    },
    {
      name: 'Mark',
      email: 'mark@mail.com',
      age: 28,
      address: 'England'
    },
    {
      name: 'Mark',
      email: 'mark@mail.com',
      age: 28,
      address: 'England'
    }, {
      name: 'Mark',
      email: 'mark@mail.com',
      age: 28,
      address: 'England'
    }, {
      name: 'Mark',
      email: 'mark@mail.com',
      age: 25,
      address: 'England'
    }
    ];


    users = users.filter(item => {
      for (let key in filter) {
        if (item[key] === undefined || item[key] != filter[key])
          return false;
      }
      return true;
    });

    console.log(users);

  }

  // onUpdateAuthorName(event: Event) {
  //   this.authorName_boolean = (<HTMLInputElement>event.target).checked;
  //   console.log(this.authorName_boolean);
  // }

  // function to push array in the filter skill

}
