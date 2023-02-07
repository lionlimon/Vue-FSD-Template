import { defineStore } from 'pinia';
import { actions } from './actions';
import { getters } from './getters';
import { state } from './state';

export const useGalleryModel = defineStore('gallery', {
  state,
  getters,
  actions,
});
