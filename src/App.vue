<template>
  <div id="app">
    <div class="container">
      <div style="width: 300px; position: fixed;">
        <ul id="tree" class="ztree" style="width:100%;"></ul>
      </div>
      <div class="markdown-body" style="margin-left: 300px;  max-width: 1200px;border-left: 1px solid #ccc;padding-left: 50px;">
        <div v-html="compileMarkdown" v-highlight></div>
        <vue-markdown :source="compileMarkdown" :toc="true" toc-class=".ztree" toc-id="#tree">this is the default slot</vue-markdown>
      </div>
    </div>
  </div>
</template>

<script>
import Marked from "marked";
import axios from "axios";
import VueMarkdown from 'vue-markdown-v2'
import "../node_modules/github-markdown-css/github-markdown.css";

let renderMd = new Marked.Renderer();

Marked.setOptions({
  renderer: renderMd,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
});

export default {
  components: {
    VueMarkdown,
  },
  data() {
    return {
      article: {
        content: "加载中...",
      },
    };
  },
  computed: {
    compileMarkdown() {
      return Marked(this.article.content, { sanitize: true });
    },
  },

  mounted() {
    const url = "./test.md";
    axios.get(url).then((response) => {
      this.article.content = response.data;
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
}
</style>
