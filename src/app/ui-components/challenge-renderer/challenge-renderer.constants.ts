import { Type } from "@angular/core";
import { Challenge1Component } from "src/app/challenges/challenge1/challenge1.component";
import { Challenge2Component } from "src/app/challenges/challenge2/challenge2.component";
import { Challenge3Component } from "src/app/challenges/challenge3/challenge3.component";
import { Challenge4Component } from "src/app/challenges/challenge4/challenge4.component";
import { Challenge5Component } from "src/app/challenges/challenge5/challenge5.component";
import { Challenge6Component } from "src/app/challenges/challenge6/challenge6.component";
import { Challenge7Component } from "src/app/challenges/challenge7/challenge7.component";

export const COMPONENT_MAP: { [key: string]: Type<any> } = {
    '1': Challenge1Component,
    '2': Challenge2Component,
    '3': Challenge3Component,
    '4': Challenge4Component,
    '5': Challenge5Component,
    '6': Challenge6Component,
    '7': Challenge7Component,
};

export const ALLOWED_NUMBERS = Object.keys(COMPONENT_MAP);

export const FINISHED_ON: { [key: string]: string } = {
    '1': '30.01.2024',
    '2': '31.01.2024',
    '3': '05.02.2024',
    '4': '12.02.2024',
    '5': '15.02.2024',
    '6': '18.02.2024',
    '7': '20.02.2024',
}
