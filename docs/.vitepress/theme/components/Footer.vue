<script setup>
import "../style.css";
</script>

<template>
  <Layout>
    <footer>
        <span>
            Released under the  <a href="https://github.com/senchabot-opensource/monorepo/blob/dev/LICENSE">GPL-3.0 License</a>
        </span>
        <span>
          Copyright © {{ new Date().getFullYear() }} <a href="https://github.com/senchabot-opensource">Senchabot</a>
        </span>
        <span>
            <a href="https://senchabot.app/terms" target="_blank" rel="noopener">Terms of Service</a>
             • 
            <a href="https://senchabot.app/privacy-policy" target="_blank" rel="noopener">Privacy Policy</a>
        </span>
    </footer>
  </Layout>
</template>
