import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-app-file-upload',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app-file-upload.html',
  styleUrl: './app-file-upload.css',
})
export class AppFileUpload {
selectedFile!: File;

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadFile() {
    const formData = new FormData();
    formData.append('file', this.selectedFile);

    //formData.append('file', this.selectedFile);
formData.append('name', 'Amir');


    this.http.post(
      'http://localhost:8081/api/v1/files/upload',
      formData,
      { responseType: 'text' }
    ).subscribe({
      next: (res) => alert(res),
      error: (err) => console.error(err)
    });
  }
}
