// import { IFileUploadProps } from '@Molecules/FileUpload/fileUpload.types';
// import { ReactNode } from 'react';
// import { onInputChange } from '@Shared/types/forms/inputs.types';

export type OnUploadProgress = (
  percentage: number,
  event?: ProgressEvent
) => void;

// We use this type to actually store the data in our models and for sending it to the backend
export type FileData = {
  url: string;
  localUrl?: string;
  originalFileName: string;
};

// This type is used by 'FileUpload' component in it's callback to provide to parent component (Image Upload, Document Upload)
export type FileUploadPayload = {
  file: File;
  url?: string;
};

// This is the interface which is recommended to be used for props of Upload____ components (UploadImage, UploadDocument)
// export interface IUploadComponentProps<V extends FileData | FileData[] | null>
//   extends Omit<IFileUploadProps, 'multiple' | 'onChange' | 'inputRef'> {
//   onChange: onInputChange<V>;
//   value: V;
//   error: boolean;
//   helperText: string | ReactNode;
//   sourcePage: string;
//   uuid?: string;
// }
