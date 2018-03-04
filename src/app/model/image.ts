import { Album } from './album';

export interface Image {
  imageId: number;
  name: string;
  description: string;
  latitude: number,
  longitude: number,
  s3Key: string,
  url: string,
  cautionMessage: string,
  year: string,
  album: Album,
  location: string,
  overallAccessibility: string,
  createdDate: number,
}
