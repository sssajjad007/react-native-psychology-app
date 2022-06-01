import { observable, action, computed, makeObservable } from "mobx";
import type { INoteImage } from "../types";

export class CreateNoteState {
  constructor() {
    makeObservable(this, {
      prevImagesCount: observable,
      images: observable,
      noteTitle: observable,
      noteContent: observable,
      showMenu: observable,
      addImage: action,
      addImageId: action,
      removeImage: action,
      replaceImage: action,
      setNoteTitle: action,
      setNoteContent: action,
      reset: action,
      toggleMenu: action,
      hasImages: computed,
      imageIds: computed,
    });
  }
  prevImagesCount: number = 0;
  images: INoteImage[] = [];
  noteTitle: string = "";
  noteContent: string = "";
  showMenu: boolean = false;

  addImage(newImagePath: string) {
    this.prevImagesCount = this.images.length;
    for (let index = 0; index < this.images.length; index++) {
      const { id, path } = this.images[index];
      if (path === newImagePath) {
        return;
      }
    }
    this.images.push({ id: "", path: newImagePath });
  }
  addImageId(imagePath: string, id: string) {
    for (let index = 0; index < this.images.length; index++) {
      const { path } = this.images[index];
      if (path === imagePath) {
        this.images[index].id = id;
        return;
      }
    }
  }
  removeImage(path: string) {
    // const images: INoteImage[] = [];
    // this.prevImagesCount = this.images.length;
    // for (let index = 0; index < this.images.length; index++) {
    //   const image = this.images[index];
    //   if (image.path === path) {
    //     continue;
    //   }
    //   images.push(image);
    // }
    // this.images = images;
    this.images = this.images.filter((image) => image.path !== path);
  }

  replaceImage(oldPath: string, newPath: string) {
    const images: INoteImage[] = [];
    for (let index = 0; index < this.images.length; index++) {
      const image = this.images[index];
      if (image.path === oldPath) {
        images.push({ id: "", path: newPath });
        continue;
      }
      images.push(image);
    }
    this.images = images;
  }
  setNoteTitle(title: string) {
    this.noteTitle = title;
  }
  setNoteContent(content: string) {
    this.noteContent = content;
  }
  reset() {
    this.images = [];
    this.prevImagesCount = 0;
    this.noteTitle = "";
    this.noteContent = "";
  }
  toggleMenu(status: boolean | undefined) {
    if (typeof status === "undefined") {
      this.showMenu = !this.showMenu;
    } else {
      this.showMenu = status;
    }
  }
  get hasImages(): boolean {
    return this.images.length !== 0;
  }
  get imageIds(): string[] {
    const imageIds: string[] = [];
    for (let index = 0; index < this.images.length; index++) {
      const { id } = this.images[index];
      imageIds.push(id);
    }
    return imageIds;
  }
}
