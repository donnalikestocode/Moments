import { Gratitude } from '../models/Gratitude';
import { loadGratitudes, saveGratitudes } from '../storage/persistence';
import { v4 as uuidv4 } from 'uuid';

class GratitudeService {
  private gratitudes: Gratitude[] = []; // the service owns the state

  async initialize() {
    this.gratitudes = await loadGratitudes()
  }

  getAll(): Gratitude[] {
    return this.gratitudes.sort((a, b) => b.createdAt - a.createdAt);
  }

  async create(text: string, flower: string, images: string[]) {
    const newGratitude: Gratitude = {
      id: uuidv4(),
      text,
      flower,
      createdAt: Date.now(),
      syncPending: true,
      images: images.map((path) => ({
        id: uuidv4(),
        localPath:path,
        syncPending:true,
      })),
    };

    this.gratitudes.push(newGratitude);
    await saveGratitudes(this.gratitudes);
  }

}

export const gratitudeService = new GratitudeService();