<script lang="ts">
import { RouterLink } from 'vue-router';
import transfer from '../utils/transfer';
import read from '../utils/read';
import { defineComponent } from 'vue';

export default defineComponent({
  methods: {
    transfer(){
      transfer()
    },
    async uploadFile(e: Event){
      if((e.target as HTMLInputElement).files) await read((e.target as HTMLInputElement).files![0]);
    }
  },
});
</script>

<template>

  <body>
    <div class="container">
      <h2>GKD规则分享</h2>
      <textarea id="gkd-sub" rows="15" cols="100" placeholder="请输入GKD规则&#10;它应为订阅"></textarea>
      <button class="button" @click="transfer">获取订阅链接</button>
      <input class="button" type="file" accept=".json, .json5" @change="uploadFile">上传订阅文件</input>
      <p class="message" id="link" style="display: none;"></p>
      <p class="message" id="export-message">
        本网页使用教程：
        <RouterLink to="/tutoril">点此查看使用教程（施工中）</RouterLink>
      </p>
    </div>

    <footer>
      <p align="center">
        <b>
          点击查看<a href="https://github.com/adproqwq/GKD_sub_share" target="_blank"> Github </a>项目
          本页面由<a href="https://github.com/adproqwq" target="_blank"> Adpro-Team - adproqwq </a>进行维护
        </b>
      </p>
      <p align="center">
        <b>
          本页面根据 https://snoopy1866.github.io/LiTiaotiao-Custom-Rules/ 本人使用Vue重构并修改而来
          在此特别感谢<a href="https://github.com/FW27623"> FW27623 </a>
        </b>
      </p>
    </footer>
  </body>
</template>
