export const titleValidation = title => {
  if (title.length > 3 && title.length < 200) {
    return { error: false }
  }
  return { error: true, message: 'Invalid title.' }
}
export const contentValidation = content => {
  if (content.length > 20 && content.length < 3000) {
    return { error: false }
  }
  return { error: true, message: 'Invalid content.' }
}

export const categoryValidation = category => {
  const categories_allowed = [
    'technology',
    'art',
    'science',
    'cinema',
    'design',
    'food'
  ]
  if (!categories_allowed.includes(category)) {
    return { error: true, message: 'Invalid category.' }
  }
  return { error: false }
}
