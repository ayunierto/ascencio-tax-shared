export interface UploadImageFile {
  uploadUrl: string;
  mediaToken: string;
}

// Payload to allow clients to upload directly to Cloudinary using a signed request.
export interface UploadSignaturePayload {
  uploadUrl: string;
  cloudName: string;
  apiKey: string;
  timestamp: number;
  signature: string;
  folder: string;
  publicId: string;
}
