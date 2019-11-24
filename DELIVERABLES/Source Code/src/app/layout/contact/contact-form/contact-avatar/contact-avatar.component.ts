import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService, SessionService } from '../../../../shared/services/index';
import { ImageCroppedEvent } from '../../../../shared/modules/image-cropper/image-cropper.component';

@Component({
  selector: 'app-contact-avatar',
  templateUrl: './contact-avatar.component.html',
  styleUrls: ['./contact-avatar.component.scss']
})
export class ContactAvatarComponent implements OnInit {
  static defaultRatio = 1 / 1;
  static title = '';
  imageChangedEvent: any = '';
  croppedImage: any = '';
  imageFile: Blob;
  defaultRatio = 1 / 1;
  title;
  constructor(
    public activeModal: NgbActiveModal,
    private alertService: AlertService,
    private sessionService: SessionService
  ) { }

  ngOnInit() {
    this.defaultRatio = ContactAvatarComponent.defaultRatio;
    this.title = ContactAvatarComponent.title;
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(image: ImageCroppedEvent) {
    this.imageFile = image.file;
    this.croppedImage = image.base64;
  }

  saveImage() {
    const imageBase64 = this.croppedImage.split(',')[1];
    // this.sessionService.imageFile = this.imageFile;
    this.sessionService.saveFileImage(this.imageFile);
    this.sessionService.saveAvatarContact(imageBase64);
    this.activeModal.close();
  }
}
