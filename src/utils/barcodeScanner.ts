
import { BrowserMultiFormatReader } from 'zxing';

export async function scanBarcodeFromImage(imageFile: File): Promise<string> {
  const reader = new BrowserMultiFormatReader();
  
  // Configure for better accuracy - using the available API in the zxing package
  reader.timeBetweenScansMillis = 100;
  reader.possibleFormats = ["EAN_13", "EAN_8", "CODE_128", "CODE_39", "UPC_A", "UPC_E"];
  
  // Create an image URL from the file
  const imageUrl = URL.createObjectURL(imageFile);
  
  try {
    const result = await reader.decodeFromImageUrl(imageUrl);
    URL.revokeObjectURL(imageUrl); // Clean up
    return result.getText();
  } catch (error) {
    URL.revokeObjectURL(imageUrl); // Clean up
    throw new Error('No barcode found in image');
  }
}

export function isBarcodeValid(barcode: string): boolean {
  // Basic validation - should be at least 8 digits
  return /^\d{8,}$/.test(barcode);
}
