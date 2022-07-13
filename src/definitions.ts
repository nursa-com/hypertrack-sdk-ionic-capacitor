export interface HyperTrackSdkPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
