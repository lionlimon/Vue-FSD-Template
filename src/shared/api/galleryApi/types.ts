type Image = {
  id: string,
  urls: Record<'full' | 'raw' | 'regular' | 'small' | 'thumb' | 'small_s3', string>,
  alt_description: string | null,
  liked_by_user: boolean,
}

export type GetImageListResponse = Image[];

export type SearchImageListResponse = {
  total: number,
  total_pages: number,
  results: Image[];
}
