import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';

@Pipe({
  name: 'category',
  pure: false
})
export class CategoryPipe implements PipeTransform {

  transform(input: Project[], desiredCategory) {
    var output: Project[] = [];
    if (input != null) {

      if(desiredCategory == "crisis"){
        console.log(desiredCategory);
        for (var i = 0; i < input.length; i++) {
          if (input[i].category == "crisis") {
            output.push(input[i]);
          }
        }
        return output;
      } else if(desiredCategory == "selfish") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].category == "selfish") {
            output.push(input[i]);
          }
        }
        return output;
      } else if(desiredCategory == "uncalled-for") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].category == "uncalled-for") {
            output.push(input[i]);
          }
        }
        return output;
      } else if(desiredCategory == "allProjects"){
        return input;
      } else {
        console.log('stuff')
      }
    }

  }

}
