import { isString } from 'util';

export class FilterServices {
  CategoryData = {
    Status: [
      { statusId: 1, statusName: 'approved' },
      { statusId: 2, statusName: 'rejected' },
      { statusId: 3, statusName: 'to be approved' }
    ],
    Languages: [
      { languageId: 1, languageName: 'English' },
      { languageId: 2, languageName: 'Hindi' },
      { languageId: 3, languageName: 'Marathi' }
    ],
    Formats: [
      { formatId: 1, formatName: 'video' },
      { formatId: 2, formatName: 'audio' },
      { formatId: 3, formatName: 'pdf' }
    ],
    Channels: [
      { channelId: 1, channelName: 'mobile' },
      { channelId: 2, channelName: 'web' }
    ],
    Categories: [
      { catId: 1, catName: 'hbcjbjcjdjcbdjcbjjdc' },
      { catId: 2, catName: 'jdc' }
    ],
    Tags: [
      { tagId: 1, tags: 'tags', status: false },
      { tagId: 2, tags: 'tags1', status: false },
      { tagId: 3, tags: 'tags2', status: false },
      { tagId: 4, tags: 'tags3', status: false }
    ],
  };
  // *********************************************Vikas*********************************************************

  asset: any = [
    {
      assetDate: '2019-04-23T14:11:12.000Z',
      assetId: 1,
      assetName: 'aditya',
      assetRef:
        'https://bhaveshedgetest.s3.ap-south-1.amazonaws.com/assessment1.png',
      bitlyLink: null,
      categoryId: 2,
      channelId: 2,
      cost: 22,
      description: 'this is aditya demo for',
      formatId: 1,
      languageId: 1,
      reviewerId: 3,
      statusId: 3,
      tags: ['tags', 'tags1'],
      visible: 1
    },
    {
      assetDate: '2019-04-24T15:31:48.000Z',
      assetId: 2,
      assetName: 'test2446666',
      assetRef:
        'https://bhaveshedgetest.s3.ap-south-1.amazonaws.com/calendar-image.png',
      bitlyLink: null,
      categoryId: 2,
      channelId: 1,
      cost: 255,
      description: 'This is demo description.',
      formatId: 2,
      languageId: 2,
      reviewerId: 1,
      statusId: 3,
      tags: ['tags', 'tags2'],
      visible: 1
    },
    {
      assetDate: '2019-04-25T07:14:30.000Z',
      assetId: 4,
      assetName: 'Video Asset',
      assetRef:
        'https://bhaveshedgetest.s3.ap-south-1.amazonaws.com/01_Cost_Tracker_Intoduction.mp4',
      bitlyLink: null,
      categoryId: 2,
      channelId: 2,
      cost: 4000,
      description: 'This is Video Asset Description.',
      formatId: 3,
      languageId: 1,
      reviewerId: 1,
      statusId: 3,
      tags: ['tags3', 'tags1'],
      visible: 1
    },
    {
      assetDate: '2019-04-25T17:06:56.000Z',
      assetId: 7,
      assetName: 'demo for vikas',
      assetRef: 'https://bhaveshedgetest.s3.amazonaws.com/Videolist.jpeg',
      bitlyLink: null,
      categoryId: 2,
      channelId: 1,
      cost: 233,
      description: 'This is demo description.',
      formatId: 1,
      languageId: 3,
      reviewerId: 3,
      statusId: 3,
      tags: ['tags3', 'tags2'],
      visible: 1
    }
  ];

  fieldValue = [];
  ObjectSetterValueArray = [];

  filterData = {};

  // searchTags:any;

  // subject filteration starts here
  // main array
  newArray = [];

  // array for display on html page
  // Initially without filter it will hold data of asset
  displayArray = this.asset;

  // nofilterAsset variable for validation
  noFilterAsset: boolean = false;

  // new array for tags
  tagArray = [];
  //
  filterTag: any = [];
  // number display to n
  SelectedCategoryLength: any = {};

  SubjectFilterArray = [];
  SubjectName_CheckBoxedStatus: boolean;
  // subj: any;

  /*

  After loading the screen
  ***********************************
  when we select the checkbox SubjectName function will be called.

  After execution of statement takes places

  */

  // tslint:disable-next-line: max-line-length
  filterDataObjectArrayCreation(
    filterData_CategoryNameForKey: any,
    FiltersubjectNameForArray: any,
    checkboxStatus: boolean
  ) {
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
        this.filterData[filterData_CategoryNameForKey].push(
          FiltersubjectNameForArray[filterData_CategoryNameForKey]
        );
        // console.log('Filter data after insertion object with array checkbox', this.filterData);
      } else {
        this.filterData[dataValue].push(
          FiltersubjectNameForArray[filterData_CategoryNameForKey]
        );
        // console.log('Filter data after insertion object with array checkbox', this.filterData[dataValue]);
        // console.log('true');
      }
      // console.log('Filter data after insertion object with array checkbox', this.filterData);
      // console.log(this.filterData);
    } else {
      for (let i = 0; i < this.filterData[dataValue].length; i++) {
        if (
          this.filterData[dataValue][i] === FiltersubjectNameForArray[dataValue]
        ) {
          this.filterData[dataValue].splice(i, 1);
          if (this.filterData[dataValue].length === 0) {
            delete this.filterData[dataValue];
            this.SelectedCategoryLength[dataValue] = 0;
            delete this.objectSetter[dataValue];
            break;
          }
          // console.log('Filter data after Splicing object with array checkbox', this.filterData);
          // console.log(this.filterData[dataValue]);
        }
      }
    }
  }

  objectSetter = {};

  fieldValueCreatorFunction() {
    // const keys = Object.keys(this.filterData);
    this.fieldValue = Object.keys(this.filterData);
    // console.log('FieldValue Object Data', this.fieldValue);
    for (const ObjectSetterData of this.fieldValue) {
      Object.assign(this.objectSetter, { [ObjectSetterData]: false });
    }

    for (const filterDataCate of this.fieldValue) {
      Object.assign(this.SelectedCategoryLength, {
        [filterDataCate]: this.filterData[filterDataCate].length
      });
    }
    // console.log('object length', this.SelectedCategoryLength);
  }

  tagCreatorFunction(CategoryObject: any, StatusToPushOrPop: any) {
    this.filterData = [];
    if (StatusToPushOrPop) {
      this.tagArray.push(CategoryObject);
      for (const data of this.tagArray) {
        for (const key in data) {
          if (isString(data[key])) {
            // console.log('key type',isString(data[key]));
            // console.log(key);
            this.filterTag.push(key);
          }
        }
      }
    }
    console.log('Filter TagArray', this.filterTag);
    console.log('Tag Array', this.tagArray);
  }

  subjectName(subj: any, cat: any) {
    // console.log(subj.name);
    // console.log('Category name', cat);
    // this.SubjectFilterArray.push(subj.name);

    if (cat === 'tags') {
      for (const tagArray of this.CategoryData.Tags) {
        if (subj === tagArray) {
          console.log('tag matches');
          tagArray.status = this.SubjectName_CheckBoxedStatus;
          break;
        }
      }
    }

    this.filterDataObjectArrayCreation(
      cat,
      subj,
      this.SubjectName_CheckBoxedStatus
    );
    this.fieldValueCreatorFunction();
    this.onFilterSubjectPush(cat);
    // this.tagCreatorFunction(subj, this.SubjectName_CheckBoxedStatus);
  }

  onFilterSubjectPush(filterData_CategoryNameForKey: any) {
    this.newArray = [];
    for (const data of this.asset) {
      for (const ObjectSetterData of this.fieldValue) {
        Object.assign(this.objectSetter, { [ObjectSetterData]: false });
      }

      for (const value of this.fieldValue) {
        // this.tagArray = [];
        // console.log('Value', value);
        // console.log('FilterData of particular value', this.filterData[value]);
        // console.log('Length of FilterData of particular value', this.filterData[value].length);
        // tslint:disable-next-line: prefer-for-of
        // if (value === filterData_CategoryNameForKey) {
        if (value == 'tags') {
          console.log(value);

          for (const tagData of data[value]) {
            for (let i = 0; i < this.filterData[value].length; i++) {
              // Pushing data into tag array
              // this.tagArray.push({[value]:this.filterData[value][i]});

              if (
                tagData == undefined ||
                tagData != this.filterData[value][i]
              ) {
                // console.log('ifTrue');
                // let checkData = data[value];
              } else {
                // console.log('ifFalse');
                this.objectSetter[value] = true;
                // let checkData = data[value];
                break;
              }
            }
          }
        } else {
          console.log('else part executed');

          for (let i = 0; i < this.filterData[value].length; i++) {
            // Pushing data into tag array
            // this.tagArray.push({[value]:this.filterData[value][i]});

            // if (data[value] === undefined || data[value] !== this.filterData[value][i]) {
            if (
              data[value] == undefined ||
              data[value] != this.filterData[value][i]
            ) {
              // console.log('ifTrue');
              // let checkData = data[value];
            } else {
              // console.log('ifFalse');
              this.objectSetter[value] = true;
              // let checkData = data[value];
              break;
            }
          }
        }
      }
      // }

      // let ObjectDataValue = null;
      let Objectflag = true;
      this.ObjectSetterValueArray = Object.values(this.objectSetter);

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

    // console.log(this.tagArray);
    console.log(this.newArray);

    if (this.fieldValue.length !== 0) {
      if (this.newArray.length !== 0) {
        this.displayArray = this.newArray;
        this.noFilterAsset = false;
      } else {
        this.displayArray = [];
        // this.noFilterAsset = true;
      }
    } else {
      this.noFilterAsset = false;
      this.displayArray = this.asset;
    }
  }

  // subject filteration ends here

  onUpdateSubjectName(event: Event) {
    this.SubjectName_CheckBoxedStatus = (<HTMLInputElement>(
      event.target
    )).checked;
    // console.log('Subject Name', this.SubjectName_CheckBoxedStatus);
  }
}
