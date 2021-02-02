import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map } from "rxjs/operators";
import { CourseActions } from "../actions/action-types";
import { allCoursesLoaded } from "../actions/course.action";
import { CoursesHttpService } from "../services/courses-http.service";

@Injectable()
export class CoursesEffect {

    loadAllCorses$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(CourseActions.loadAllCourses),
                concatMap(action => 
                    this.coursesHttpService.findAllCourses()
                ),
                map(courses => allCoursesLoaded({courses}))
            )

    );

    constructor(private actions$: Actions, private coursesHttpService: CoursesHttpService) {

    }
}