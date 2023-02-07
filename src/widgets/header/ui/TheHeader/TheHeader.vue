<template>
  <header class="header">
    <NavigationGroup>
      <NavigationItem
        v-if="!userModel.isAuth"
      >
        <a

          class="header__login"
          :href="userModel.oAuthRedirectLink"
        >
          Войти
        </a>
      </NavigationItem>

      <NavigationItem
        v-else-if="userModel.userInfo"
      >
        <UserAvatar
          :image="userModel.userInfo.avatar"
          :name="userModel.userInfo.fullName"
        />
      </NavigationItem>

      <NavigationItem
        v-if="userModel.isAuth"
      >
        <RouterLink
          to="/?filter=all"
        >
          Все
        </RouterLink>
      </NavigationItem>

      <NavigationItem
        v-if="userModel.isAuth"
      >
        <RouterLink
          to="/?filter=liked"
        >
          <SvgIcon
            color="red"
            name="like"
            width="16"
            height="16"
          />
        </RouterLink>
      </NavigationItem>
    </NavigationGroup>

    <SearchPhoto class="header__search" />
  </header>
</template>

<script setup lang="ts">
import { SearchPhoto } from '@/features/search-photo/';
import { useUserModel, UserAvatar } from '@/entities/user';
import SvgIcon from '@/shared/ui/SvgIcon';
import { NavigationGroup } from '../NavigationGroup';
import { NavigationItem } from '../NavigationItem';

const userModel = useUserModel();
</script>

<style src="./TheHeader.scss" lang="scss" scoped></style>
