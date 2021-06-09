import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface LinkInterface {
  name: string;
  icon: IconDefinition;
  link?: string;
  permissions?: string[];
}
