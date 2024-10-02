import { Direction } from '@interfaces/Direction';
import { FramesMap } from '@interfaces/FramesMap';

export type SpriteSheet = {
  assets: Array<{
    label: string;
    framesMap: FramesMap | undefined;
    animations: Array<{
      direction?: Direction;
      keysCodesCombination?: string;
      wait?: boolean;
      label?: string;
      default: boolean;
      speed: number;
    }>;
  }>;
};
