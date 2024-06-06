import { AxiosError } from 'axios';
import { instance } from '@/configs';

export const APIPreferences = {
  getPreferences: async () => {
    try {
      const preferences = await instance.get('/preference');
      const allergies = await instance.get('/allergy');

      const mergedData = [
        ...preferences.data.data.map((item) => ({ id: item.id, name: item.name, type: 'preference' })),
        ...Object.values(allergies.data.data).map((item) => ({ id: item.id, name: item.name, type: 'allergy' })),
      ];

      return mergedData;
    } catch (err) {
      if (err instanceof AxiosError) {
        throw new Error(err.response?.data?.message);
      } else {
        throw new Error(err.message);
      }
    }
  },
};
