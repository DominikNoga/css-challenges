import { Type } from "@angular/core";
import { Challenge1Component } from "src/app/challenges/challenge1/challenge1.component";
import { Challenge2Component } from "src/app/challenges/challenge2/challenge2.component";
import { Challenge3Component } from "src/app/challenges/challenge3/challenge3.component";
import { Challenge4Component } from "src/app/challenges/challenge4/challenge4.component";

export const COMPONENT_MAP: { [key: string]: Type<any> } = {
    '1': Challenge1Component,
    '2': Challenge2Component,
    '3': Challenge3Component,
    '4': Challenge4Component,
};

export const ALLOWED_NUMBERS = Object.keys(COMPONENT_MAP);

export const FINISHED_ON: { [key: string]: string } = {
    '1': '30.01.2024',
    '2': '31.01.2024',
    '3': 'in progress',
    '4': '12.02.2024',
}
