import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons/faFilePdf';
import { faFilePowerpoint } from '@fortawesome/free-solid-svg-icons/faFilePowerpoint';
import { faFileExcel } from '@fortawesome/free-solid-svg-icons/faFileExcel';
import { faFileWord } from '@fortawesome/free-solid-svg-icons/faFileWord';
import { faFileImage } from '@fortawesome/free-solid-svg-icons/faFileImage';
import { faFile } from '@fortawesome/free-solid-svg-icons/faFile';
import { faFileAudio } from '@fortawesome/free-solid-svg-icons/faFileAudio';
import { faFileVideo } from '@fortawesome/free-solid-svg-icons/faFileVideo';
import { faDatabase } from '@fortawesome/free-solid-svg-icons/faDatabase';

interface IFileExtensionColor {
  fileTypes: string[];
  icon: IconDefinition;
  color: string;
}
export const fileExtensionData: IFileExtensionColor[] = [
  { fileTypes: ['pdf'], icon: faFilePdf, color: '#fa8072' },
  { fileTypes: ['pptx'], icon: faFilePowerpoint, color: '#ee946a' },
  { fileTypes: ['xls', 'xlsm', 'xlsx'], icon: faFileExcel, color: '#00ff7f' },
  { fileTypes: ['doc', 'docx'], icon: faFileWord, color: '#8ac4f3' },
  { fileTypes: ['jpg', 'jpeg', 'png', 'tiff', 'bmp', 'wmf', 'webp', 'gif'], icon: faFileImage, color: '#cbf38a' },
  { fileTypes: ['txt'], icon: faFile, color: '#ffffff' },
  { fileTypes: ['mp3', 'aac', '3gp', 'aa', 'act', 'aiff', 'alac', 'amr', 'ape'], icon: faFileAudio, color: '#ffffff' },
  {
    fileTypes: ['mp4', 'webm', 'mpg', 'mpeg', 'mpe', 'ogg', 'm4p', 'm4v', 'avi', 'wmv', 'mov', 'flv', 'swf'],
    icon: faFileVideo,
    color: '#ffffff'
  },
  { fileTypes: ['csv'], icon: faDatabase, color: '#ffffff' }
];
