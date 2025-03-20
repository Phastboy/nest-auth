import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import { Readable } from 'stream';

@Injectable()
export class CloudinaryService {
  async uploadImage(file: Express.Multer.File): Promise<string> {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: 'avatars',
        },
        (error, result) => {
          if (error) reject(error);
          const secureUrl = result?.secure_url;
          if (secureUrl) {
            resolve(result?.secure_url);
          } else {
            reject(new Error('failed to retrieve secure url from cloudinary'));
          }
        },
      );

      const readableStream = new Readable();
      readableStream.push(file.buffer);
      readableStream.push(null);
      readableStream.pipe(uploadStream);
    });
  }

  async deleteImage(publicId: string): Promise<void> {
    cloudinary.uploader.destroy(publicId);
  }
}
