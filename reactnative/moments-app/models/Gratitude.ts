export type Gratitude = {
  id: string;
  text: string;
  images: ImageMetadata[];
  flower: string;
  createdAt: number; // timestamp
  syncPending: boolean;
};

export type ImageMetadata = {
  id: string;
  localPath: string;
  cloudUrl?: string;
  syncPending: boolean;
};