import { Component } from '@angular/core';
import { card_data } from './app.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-app';
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
    { name: 'image', id: '1', htmlId: 'image1' },
    { name: 'video', id: '2', htmlId: 'video1' },
    { name: 'html', id: '3', htmlId: 'html1' },
    { name: 'text', id: '4', htmlId: 'text1' }
  ];
  Level = [
    { name: 'level 1', htmlId: 'level1', id: '1' },
    { name: 'level 2', htmlId: 'level2', id: '2' },
    { name: 'level 3', htmlId: 'level3', id: '3' }
  ];
  Author = [
    { name: 'Author1', htmlId: 'Author1', id: '1' },
    { name: 'Author2', htmlId: 'Author2', id: '2' },
    { name: 'Author3', htmlId: 'Author3', id: '3' }
  ];
  Subject = [
    { name: 'Business', htmlId: 'business1', id: '1' },
    { name: 'programming', htmlId: 'business2', id: '2' },
    { name: 'HR', htmlId: 'business3', id: '3' }
  ];

  skill = [
    {
      name: 'Business',
      author: 'Author1',
      Language: 'English',
      description:
        'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
      category: 'level 1',
      file_type: 'video',
      tag: ['tag-1', 'tag-2', 'tag-3'],
      imagePath: 'https://dummyimage.com/vga',
      id: '1'
    },
    {
      name: 'programming',
      author: 'Author1',
      Language: 'C',
      description: 'dummy 2 dummy 2 dummy 2 dummy 2 dummy 2 dummy 2 ',
      category: 'level 2',
      file_type: 'image',
      tag: ['tag-1', 'tag-2', 'tag-3'],
      imagePath: 'https://dummyimage.com/vga',
      id: '2'
    },
    {
      name: 'programming',
      author: 'Author2',
      Language: 'C++',
      description: 'dummy 3 dummy 3 dummy 3 dummy 3 dummy 3 dummy 3 ',
      category: 'level 3',
      file_type: 'text',
      tag: ['tag-1', 'tag-2', 'tag-3'],
      imagePath: 'https://dummyimage.com/vga',
      id: '3'
    },
    {
      name: 'HR',
      author: 'Author2',
      Language: 'Candidate Apti',
      description: 'dummy 4 dummy 4 dummy 4 dummy 4 dummy 4 dummy 4 dummy 4 ',
      category: 'level 3',
      file_type: 'html',
      tag: ['tag-1', 'tag-2', 'tag-3'],
      imagePath: 'https://dummyimage.com/vga',
      id: '4'
    },
    {
      name: 'Business',
      author: 'Author3',
      Language: 'hindi',
      description:
        'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
      category: 'level 1',
      file_type: 'video',
      tag: ['tag-1', 'tag-2', 'tag-3'],
      imagePath: 'https://dummyimage.com/vga',
      id: '5'
    },
    {
      name: 'Business',
      author: 'Author2',
      Language: 'English',
      description:
        'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
      category: 'level 1',
      file_type: 'image',
      tag: ['tag-1', 'tag-2', 'tag-3'],
      imagePath: 'https://dummyimage.com/vga',
      id: '6'
    },
    {
      name: 'Business',
      author: '',
      Language: 'English',
      description:
        'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
      category: 'level 1',
      file_type: 'video',
      tag: ['tag-1', 'tag-2', 'tag-3'],
      imagePath: 'https://dummyimage.com/vga',
      id: '7'
    }
  ];

  // fieldValue = ['name', 'Language', 'file_type'];
  fieldValue = [];
  ObjectSetterValueArray = [];

  filterData = {
    // Language: [],
    // Language: ["English", "C++"],
    // name: [],
    // author: [],
    // name: ['Business'],
    // file_type: [],
    // file_type: ['image'],
    // category: [],
  };


  // filterData = {
  //     Language: 'English',
  //     name: 'Business',
  //     file_type: "video",
  //   };


  constructor() { }

  // subject filteration starts here
  newArray = [];

  SubjectFilterArray = [];
  SubjectName_CheckBoxedStatus;
  SubjectFilteredValue = '';
  subj;

  filterSkill = [];


  /*

  After loading the screen
  ***********************************
  when we select the checkbox SubjectName function will be called.

  After execution of statement takes places

  */

  filterDataObjectArrayCreation(filterData_CategoryNameForKey: any, FiltersubjectNameForArray: any, checkboxStatus: boolean) {


    let dataValue = null;
    let flag = false;
    for (const key in this.filterData) {
      if (filterData_CategoryNameForKey === key) {
        flag = true;
        dataValue = key;
        break;
      } else {
        flag = false;
      }
    }
    if (checkboxStatus) {
      if (!flag) {
        Object.assign(this.filterData, { [filterData_CategoryNameForKey]: [] });
        (this.filterData[filterData_CategoryNameForKey]).push(FiltersubjectNameForArray);
        // console.log('Filter data after insertion object with array checkbox', this.filterData);
      } else {
        (this.filterData[dataValue]).push(FiltersubjectNameForArray);
        // console.log('Filter data after insertion object with array checkbox', this.filterData[dataValue]);
        console.log('true');
      }
      console.log('Filter data after insertion object with array checkbox', this.filterData);
      // console.log(this.filterData);
    } else {
      for (let i = 0; i < this.filterData[dataValue].length; i++) {
        if (this.filterData[dataValue][i] === FiltersubjectNameForArray) {
          this.filterData[dataValue].splice(i, 1);
          console.log('Filter data after Splicing object with array checkbox', this.filterData);
          console.log(this.filterData[dataValue]);
        }
      }
    }
  }


  objectSetter = {
    // name: false,
    // Language: false,
    // file_type: false,
  };

  fieldValueCreatorFunction() {
    // const keys = Object.keys(this.filterData);
    this.fieldValue = Object.keys(this.filterData);
    console.log('FieldValue Object Data', this.fieldValue);
    for (const ObjectSetterData of this.fieldValue) {
      Object.assign(this.objectSetter, { [ObjectSetterData]: false });
    }
  }



  subjectName(subj, cat) {
    // console.log(subj.name);
    // console.log('Category name', cat);
    this.SubjectFilterArray.push(subj.name);
    this.SubjectFilteredValue = subj.name;
    // console.log(this.SubjectFilterArray);

    this.filterDataObjectArrayCreation(cat, subj.name, this.SubjectName_CheckBoxedStatus);
    this.fieldValueCreatorFunction();
    this.onFilterSubjectPush();

    this.filterApplied = true;

    if (this.SubjectName_CheckBoxedStatus) {
      // call function
      // pushing data into the array filterskill
      // this.filterDataObjectArrayCreation(cat, subj.name, this.SubjectName_CheckBoxedStatus);
      // this.fieldValueCreatorFunction();
      // this.onFilterSubjectPush();
    } else {
      // calling the function
      // deleting data from the array filterskill
      // this.onFilterSubjectPop();

    }

    if (this.filterSkill.length === 0) {
      this.filterApplied = false;
    }

  }

  onFilterSubjectPush() {
    this.newArray = [];
    for (const data of this.skill) {

      // objectSetter.name = false;
      // objectSetter.Language = false;
      // objectSetter.file_type = false;

      for (const ObjectSetterData of this.fieldValue) {
        Object.assign(this.objectSetter, { [ObjectSetterData]: false });
      }

      for (const value of this.fieldValue) {
        console.log('Value', value);
        console.log('FilterData of particular value', this.filterData[value]);
        console.log('Length of FilterData of particular value', this.filterData[value].length);
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.filterData[value].length; i++) {
          if (data[value] === undefined || data[value] !== this.filterData[value][i]) {
            console.log('ifTrue');
          } else {
            console.log('ifFalse');
            this.objectSetter[value] = true;
            break;
          }
        }
      }

      //       let finalFlag : boolean = true;
      //       let tempObj  = {
      //         "a":true,
      //         "b":true
      //       }

      //       let tempObjKey = Object.keys(tempObj); // ['a','b']
      //       for(let tempObjKeyData in tempObj){
      // console.log
      //       }

      // for(let objKey in this.objectSetter){
      //   if(objKey)
      // }
      // console.log(data);
      // for (let valueCheck of this.fieldValue) {
      // if (this.objectSetter.name && this.objectSetter.Language && this.objectSetter.file_type) {

      // let ObjectDataValue = null;
      let Objectflag = true;
      this.ObjectSetterValueArray = Object.values(this.objectSetter);

      // tslint:disable-next-line: forin
      // for (const key in this.objectSetter) {

      // if (this.objectSetter[key] === true) {
      //   Objectflag = true;
      //   // ObjectDataValue = key;
      //   break;
      // } else {
      //   Objectflag = false;
      // }
      // }

      // for(let value of tempObjKey){
      //   if(finalFlag && value){
      //        finalFlag = true;
      //   }else{
      //        finalFlag = false;
      //   }
      // }

      for (const objectSetterValueArrayData of this.ObjectSetterValueArray) {
        if (Objectflag && objectSetterValueArrayData) {
          Objectflag = true;
        } else {
          Objectflag = false;
        }
      }

      if (Objectflag) {
        this.newArray.push(data);
      }
    }

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
  // onFilterSubjectPop() {
  //   var data_filter_pop = this.filterSkill.filter(
  //     element => element.name == this.SubjectFilteredValue
  //   );

  //   for (var i = 0; i < this.filterSkill.length; i++) {
  //     for (var j = 0; j < data_filter_pop.length; j++) {

  //       if (this.filterSkill[i].id == data_filter_pop[j].id) {
  //         this.filterSkill.splice(i, 1);
  //         console.log(this.filterSkill);
  //         // console.log(data_filter_pop);
  //       } else {
  //         break;
  //       }
  //     }
  //   }
  // }

  // subject filteration ends here


  onUpdateSubjectName(event: Event) {
    this.SubjectName_CheckBoxedStatus = (<HTMLInputElement>event.target).checked;
    console.log('Subject Name', this.SubjectName_CheckBoxedStatus);
  }


  // onUpdateAuthorName(event: Event) {
  //   this.authorName_boolean = (<HTMLInputElement>event.target).checked;
  //   console.log(this.authorName_boolean);
  // }

  // function to push array in the filter skill

}
