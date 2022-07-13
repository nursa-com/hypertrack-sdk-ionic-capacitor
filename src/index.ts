import { registerPlugin } from '@capacitor/core';

import type { HyperTrackSdkPlugin } from './definitions';

const HyperTrackSdk = registerPlugin<HyperTrackSdkPlugin>('HyperTrackSdk', {
  web: () => import('./web').then(m => new m.HyperTrackSdkWeb()),
});

export * from './definitions';
export { HyperTrackSdk };
