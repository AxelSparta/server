export const imageValidation = (image, maxSizeInMb) => {
  const arrayOfAllowedFileTypes = ['image/png', 'image/jpeg', 'image/jpg']

  if (!arrayOfAllowedFileTypes.includes(image.mimetype)) {
    return {
      error: true,
      message: 'Only image files allowed.'
    }
  }

  if (image.size / (1024 * 1024) > maxSizeInMb) {
    return {
      error: true,
      message: 'Image too large.'
    }
  }

  return { error: false }
}
