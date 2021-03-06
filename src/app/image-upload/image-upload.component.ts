import { Router } from '@angular/router';
import { ImageService } from './../service/image.service';
import { Observable } from 'rxjs/Observable';
import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { Headers, Response, Http } from '@angular/http';
import { UploadMetadata } from './before-upload.interface';
import { forkJoin } from 'rxjs/observable/forkJoin';

import { Style } from './style';
import { UploadFormComponent } from './upload-form/upload-form.component';

export class FileHolder {
  public pending: boolean = false;
  public serverResponse: { status: number, response: any };

  public imageName: string;
  public imageDescription: string;
  public year: string;
  public latitude: string;
  public longitude: string;
  public safetyWarning: string;

  constructor(public src: string, public file: File) {
  }
}

@Component({
  selector: 'image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit, OnChanges {

  @Input() files: FileHolder[] = [];
  fileCounter: number = 0;
  fileOver: boolean = false;
  showFileTooLargeMessage: boolean = false;

  @Input() beforeUpload: (param: UploadMetadata) => UploadMetadata | Promise<UploadMetadata> = data => data;
  @Input() buttonCaption = 'Select Images';
  @Input() disabled = false;
  @Input('class') cssClass = 'img-ul';
  @Input() clearButtonCaption = 'Clear';
  @Input() dropBoxMessage = 'Drop your images here!';
  @Input() fileTooLargeMessage;
  @Input() headers: Headers | { [name: string]: any };
  @Input() max = 100;
  @Input() maxFileSize: number;
  @Input() preview = true;
  @Input() partName: string;
  @Input() style: Style;
  @Input('extensions') supportedExtensions: string[];
  @Input() url: string;
  @Input() userUploadedFile: FileList;
  @Input() withCredentials = false;
  @Input() uploadedFiles: string[] | Array<{ url: string, fileName: string, blob?: Blob }> = [];
  @Output() removed = new EventEmitter<FileHolder>();
  @Output() uploadStateChanged = new EventEmitter<boolean>();
  @Output() uploadFinished = new EventEmitter<FileHolder>();

  @Input() uploadBox = true;
  @Input() press;
  @Input() presssubmit=false;
  @ViewChild('input')
  private inputElement: ElementRef;
  private pendingFilesCounter: number = 0;

  // @ViewChild(UploadFormComponent)
  // private uploadFormComponent: UploadFormComponent;

  uploadedForm: any;

  parentMessage = "message from parent";

  constructor(private imageService: ImageService, private http: Http, private router:Router) {
  }

  ngOnInit() {
    if (!this.fileTooLargeMessage) {
      this.fileTooLargeMessage = 'An image was too large and was not uploaded.' + (this.maxFileSize ? (' The maximum file size is ' + this.maxFileSize / 1024) + 'KiB.' : '');
    }
    this.supportedExtensions = this.supportedExtensions ? this.supportedExtensions.map((ext) => 'image/' + ext) : ['image/*'];
  }

  deleteAll() {
    this.files.forEach(f => this.removed.emit(f));
    this.files = [];
    this.fileCounter = 0;
    this.inputElement.nativeElement.value = '';
  }

  deleteFile(file: FileHolder): void {
    let index = this.files.indexOf(file);
    this.files.splice(index, 1);
    this.fileCounter--;
    this.inputElement.nativeElement.value = '';
    this.removed.emit(file);
  }

  ngOnChanges(changes) {
    if (changes.uploadedFiles && changes.uploadedFiles.currentValue.length > 0) {
      this.processUploadedFiles();
    }
  }

  onFileChange(files: FileList) {
    this.userUploadedFile = files;
    if (this.disabled) return;

    let remainingSlots = this.countRemainingSlots();
    let filesToUploadNum = files.length > remainingSlots ? remainingSlots : files.length;

    if (this.url && filesToUploadNum != 0) {
      this.uploadStateChanged.emit(true);
    }

    this.fileCounter += filesToUploadNum;
    this.showFileTooLargeMessage = false;
    this.uploadFiles(files, filesToUploadNum);

    this.uploadBox = false;
  }

  onFileOver = (isOver) => this.fileOver = isOver;

  private countRemainingSlots = () => this.max - this.fileCounter;

  private onResponse(response: Response, fileHolder: FileHolder) {
    fileHolder.serverResponse = { status: response.status, response };
    fileHolder.pending = false;

    this.uploadFinished.emit(fileHolder);

    if (--this.pendingFilesCounter == 0) {
      this.uploadStateChanged.emit(false);
    }
  }

  private processUploadedFiles() {
    for (let i = 0; i < this.uploadedFiles.length; i++) {
      let data: any = this.uploadedFiles[i];

      let fileBlob: Blob,
        file: File,
        fileUrl: string;

      if (data instanceof Object) {
        fileUrl = data.url;
        fileBlob = (data.blob) ? data.blob : new Blob([data]);
        file = new File([fileBlob], data.fileName);
      } else {
        fileUrl = data;
        fileBlob = new Blob([fileUrl]);
        file = new File([fileBlob], fileUrl);
      }

      this.files.push(new FileHolder(fileUrl, file));
    }
  }

  private async uploadFiles(files: FileList, filesToUploadNum: number) {
    for (let i = 0; i < filesToUploadNum; i++) {
      const file = files[i];

      if (this.maxFileSize && file.size > this.maxFileSize) {
        this.fileCounter--;
        this.inputElement.nativeElement.value = '';
        this.showFileTooLargeMessage = true;
        continue;
      }

      const beforeUploadResult: UploadMetadata = await this.beforeUpload({ file, url: this.url, abort: false });

      if (beforeUploadResult.abort) {
        this.fileCounter--;
        this.inputElement.nativeElement.value = '';
        continue;
      }

      const img = document.createElement('img');
      img.src = window.URL.createObjectURL(beforeUploadResult.file);

      const reader = new FileReader();
      reader.addEventListener('load', (event: any) => {
        const fileHolder: FileHolder = new FileHolder(event.target.result, beforeUploadResult.file);

        this.uploadSingleFile(fileHolder, beforeUploadResult.url, beforeUploadResult.formData);
        this.files.push(fileHolder);
      }, false);
      reader.readAsDataURL(beforeUploadResult.file);
    }
  }

  private uploadSingleFile(fileHolder: FileHolder, url = this.url, customForm?: { [name: string]: any }) {
    if (url) {
      this.pendingFilesCounter++;
      fileHolder.pending = true;

      this.imageService
        .postImage(url, fileHolder.file, this.headers, this.partName, customForm, this.withCredentials)
        .subscribe(
          response => this.onResponse(response, fileHolder),
          error => {
            this.onResponse(error, fileHolder);
            this.deleteFile(fileHolder);
          });
    } else {
      this.uploadFinished.emit(fileHolder);
    }
  }

  viewFiles() {
    console.log('view files');
    console.log('before');
    console.log(this.uploadFileHolders);
  }

  uploadFileHolders: FileHolder[] = this.files;

  

  updateInput(input) {
    // Add file only if it is not already in the list
    if (this.uploadFileHolders.find(x => x.file.name === input.file.name) == null) {
      this.uploadFileHolders.push(input);
    }
  }

  submitAllFiles() {
    debugger

    let fileHolderCounter = 1;
    let observables: Observable<any>[] = [];
    
    
    for (let file of this.uploadFileHolders) {
      console.log(file);

      let formData = new FormData();

      if (file.imageName) {
        formData.append('name', file.imageName);
      }
      if (file.imageDescription) {
        formData.append('description', file.imageDescription);
      }
      if (file.year) {
        formData.append('year', file.year);
      }
      if (file.latitude) {
        formData.append('latitude', file.latitude);
      }
      if (file.longitude) {
        formData.append('longitude', file.longitude);
      }
      if (file.safetyWarning) {
        formData.append('cautionMessage', file.safetyWarning);
      }

      formData.append('file[]', file.file);


      let image$ = this.imageService.uploadMiscImage('http://18.144.43.217:9090/anseladams/upload', formData);
      image$.subscribe(response => {
        //console.log(response);
        if (fileHolderCounter == this.uploadFileHolders.length) {
          alert('All images uploaded successfully!');
          window.location.href = 'all-photos';
        }
        fileHolderCounter ++;
      });

      observables.push(image$);
    }
    
     /*forkJoin(observables)
    .subscribe(dataArray => {
      alert('All images uploaded successfully!');
      window.location.href = 'all-photos';
    }); */
  }

  addto()
  {
    console.log("add to function called....");
  }
  checkin()
  {
    location.reload();
    this.router.navigateByUrl('/all-photos');
  }

}
