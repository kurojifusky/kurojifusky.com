type EntryConstraints<T extends Record<string, any>> = {
  contentTypeId: string
  fields: T
}

interface FileMetadata {
  fields: {
    title?: string
    description?: string
    file: {
      url: string
    }
  }
}

export type BlogPost = EntryConstraints<{
  title: string
  slug: string
  banner: FileMetadata & string
  description: string
  content: object
}>
