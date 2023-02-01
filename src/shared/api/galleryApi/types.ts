export type GetImageListResponse = {
  id: string,
  urls: Record<'full' | 'raw' | 'regular' | 'small' | 'thumb' | 'small_s3', string>,
  alt_description: string | null
}[];
