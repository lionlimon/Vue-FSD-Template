export type GetUserInformationResponse = {
  id: string,
  name: string,
  profile_image: Record<'large' | 'medium' | 'small', string>
};

export type GetAccessTokenResponse = {
  access_token: string,
  token_type: string,
  scope: string,
  created_at: string
}
