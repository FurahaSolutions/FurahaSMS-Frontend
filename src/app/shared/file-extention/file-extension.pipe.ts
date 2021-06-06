import { Pipe, PipeTransform } from '@angular/core';
import { faFile } from '@fortawesome/free-solid-svg-icons/faFile';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { fileExtensionData } from './file-extention.data';

@Pipe({
  name: 'fileExtension'
})
export class FileExtensionPipe implements PipeTransform {

  transform(value: string | undefined, ...args: unknown[]): IconDefinition | string {
    if(!value) {
      return '';
    }
    const data = fileExtensionData.find(item => item.fileTypes.includes(value.toLowerCase()));
    if(args[0] === 'color') {
      return data ? data.color : '#ffffff';
    }
    return data ? data.icon : faFile;
  }

}
