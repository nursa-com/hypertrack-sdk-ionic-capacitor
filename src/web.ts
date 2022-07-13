import { WebPlugin } from '@capacitor/core';

import type { HyperTrackSdkPlugin } from './definitions';

export class HyperTrackSdkWeb extends WebPlugin implements HyperTrackSdkPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
