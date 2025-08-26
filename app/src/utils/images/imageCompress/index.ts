// @ts-ignore
import ImageCompressor from './services/image-compressor.min.js';

// https://www.npmjs.com/package/js-image-compressor

export const ImageCompress = (bin: Blob) => {
  return new Promise<Blob>((resolve, reject) => {
    new ImageCompressor({
      file: bin,
      quality: 0.2,
      mimeType: 'image/jpeg',
      width: 1920,
      height: 1080,
      // maxWidth: 1920,
      // maxHeight: 1080,
      // minWidth: 500,
      // minHeight: 500,
      convertSize: Infinity,
      loose: true,
      redressOrientation: true,
      // beforeCompress: () => {},
      // beforeDraw: () => {},
      // afterDraw: () => {},
      success: (result: Blob) => {
        const binSize = (bin.size / 1024).toFixed(2);
        const resultSize = (result.size / 1024).toFixed(2);
        const ratio = (((bin.size - result.size) / bin.size) * 100).toFixed(2) + '%';
        console.log(`Image compressor: ${binSize} Kb -> ${resultSize} Kb, ratio: ${ratio}`);
        resolve(result);
      },
      error: reject,
    });
  });
};
