<script lang="ts">
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
      <input class="button" type="file" accept=".json, .json5" @change="uploadFile"></input>
      <p class="message" id="link" style="display: none;"></p>
      <p class="message" id="export-message">
        本网页使用教程：
        <a href="https://mcnqj6ctiznc.feishu.cn/wiki/TwWFwhpNtiqSAskTTBscKzDNnmf">点此查看使用教程</a>
      </p>
    </div>

    <footer>
      <p align="center">
        <b>
          点击查看<a href="https://github.com/adproqwq/GKD_sub_share" target="_blank"> Github </a>项目<br>
          本页面由<a href="https://github.com/adproqwq" target="_blank"> adproqwq </a>进行维护
        </b>
      </p>
      <p align="center">
        <b>
          网页样式来自<a href="https://github.com/FW27623"> FW27623 </a><br>
          感谢他
        </b>
      </p>
    </footer>
  </body>
</template>
