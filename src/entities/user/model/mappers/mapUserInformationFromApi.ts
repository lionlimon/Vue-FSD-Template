import { GetUserInformationResponse } from '@/shared/api/userApi';
import { UserInfo } from '../types';

const mapUserInformationFromApi = (data: GetUserInformationResponse): UserInfo => ({
  id: data.id,
  avatar: data.profile_image.small,
  fullName: data.name,
});

export default mapUserInformationFromApi;
