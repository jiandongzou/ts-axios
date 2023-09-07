<template>
  <a-form
  width="400"
    :model="formState"
    name="basic"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-form-item
      label="Username"
      name="username"
      :rules="[{ required: true, message: 'Please input your username!' }]"
    >
      <a-input v-model:value="formState.username" />
    </a-form-item>

    <a-form-item
      label="Password"
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password v-model:value="formState.password" />
    </a-form-item>
    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
import {login,getUserInfo,test} from "../api/user/index";

interface FormState {
  username: string,
  password: string
}

const formState = reactive<FormState>({
  username: '',
  password: ''
});
const onFinish = async(values: any) => {
  console.log('Success:', values);
  // const result=await login(values);
  // localStorage.setItem("token",result.token);
  // const data=await getUserInfo();
  // console.log(data);
  const res=await test();
  console.log(res);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
</script>

