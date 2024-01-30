import { Type } from "@angular/core";
import { Challenge1Component } from "src/app/challenges/challenge1/challenge1.component";
import { Challenge2Component } from "src/app/challenges/challenge2/challenge2.component";
import { Challenge3Component } from "src/app/challenges/challenge3/challenge3.component";

export const COMPONENT_MAP: { [key: string]: Type<any> } = {
    '1': Challenge1Component,
    '2': Challenge2Component,
    '3': Challenge3Component,
};

export const ALLOWED_NUMBERS = Object.keys(COMPONENT_MAP);
