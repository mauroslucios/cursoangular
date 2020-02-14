import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
    selector:'app-course-list',
    templateUrl:'course.component.html',
    styleUrls:['course.component.scss']
})
export class CourseListComponent implements OnInit{

    courses: Course[] = [];

    ngOnInit():void{
        this.courses= [
            {
                id: 1,
                name: 'AngularJs',
                imageUrl: '',
                price: 125,
                code: 'AJS01',
                duration: 730,
                rating: 5.4
            },
            {
                id: 2,
                name: 'NodeJs',
                imageUrl: '',
                price: 125,
                code: 'NJS02',
                duration: 730,
                rating: 5.4
            },
            {
                id: 3,
                name: 'JavaScript',
                imageUrl: '',
                price: 125,
                code: 'JS02',
                duration: 730,
                rating: 5.4
            }
        ]
    }
    

}