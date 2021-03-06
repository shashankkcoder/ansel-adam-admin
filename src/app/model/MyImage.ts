import { Region } from './region';
import { Album } from './album';

export interface MyImage {
  imageId: number;
  name: string;
  description: string;
  latitude: string;
  longitude: string;
  s3Key: string;
  url: string;
  cautionMessage: string;
  year: string;
  fileName: string;
  region: Region;
  album: Album;
  location: string,
  overallAccessibility: string;
  createdDate: number;
}
