import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCreateDedicationStore = create(
  persist(
    (set) => ({
        message: '',
        author: '',
        song_id: '',
        song_name: '',
        artist: '',
        preview_url: '',
        image_cancion: '',
        image_id: '',
        image: '',
        id_dedication: '',
       setMessage: (message) => set({ message }),
       setAuthor: (author) => set({ author }),
       setSongId: (song_id) => set({ song_id }),
       setSongName: (song_name) => set({ song_name }),
       setArtist: (artist) => set({ artist }),
       setPreviewUrl: (preview_url) => set({ preview_url }),
       setImageCancion: (image_cancion) => set({ image_cancion }),
       setImage: (image) => set({ image }),
       setImageId: (image_id) => set({ image_id }),
       setIdDedication: (id_dedication) => set({ id_dedication }),

       clearStore: () => set({ message: '', author: '', song_id: '', song_name: '', artist: '', preview_url: '', image_cancion: '', image: '', image_id: '' }),
    }),
    {
      name: 'dedication',
    }
  )
);

export default useCreateDedicationStore;