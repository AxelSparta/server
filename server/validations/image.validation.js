export const imageValidation = (image, maxSizeInMb) => {
  const array_of_allowed_file_types = ['image/png', 'image/jpeg', 'image/jpg']

  if (!array_of_allowed_file_types.includes(image.mimetype))
    return {
      error: true,
      message: 'Only image files allowed.'
    }

  if (image.size / (1024 * 1024) > maxSizeInMb)
    return {
      error: true,
      message: 'Image too large.'
    }

  return { error: false }
}
