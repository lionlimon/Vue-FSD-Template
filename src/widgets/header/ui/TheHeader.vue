<template>
  <header class="header">
    <a
      v-if="!userModel.isAuth"
      class="header__login"
      :href="userModel.oAuthRedirectLink"
    >
      Войти
    </a>

    <UserAvatar
      v-else-if="userModel.userInfo"
      :image="userModel.userInfo.avatar"
      :name="userModel.userInfo.fullName"
    />

    <SearchPhoto class="header__search" />
  </header>
</template>

<script setup lang="ts">
import SearchPhoto from '@/features/search-photo/ui/SearchPhoto.vue';
import { useUserModel } from '@/entities/user';
import { UserAvatar } from '@/shared/ui/UserAvatar';

const userModel = useUserModel();
</script>

<style src="./TheHeader.scss" lang="scss" scoped></style>
