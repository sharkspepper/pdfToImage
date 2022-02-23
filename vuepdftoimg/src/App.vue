<template>
	<div id="app">
		<PdfToImage></PdfToImage>
		<!-- <HtmlToPdf></HtmlToPdf> -->
	</div>
</template>

<script>
import PdfToImage from '@/components/PdfToImage.vue'
// import HtmlToPdf from '@/components/HtmlToPdf.vue'
export default {
	name: 'App',
	components: {
		PdfToImage,
		// HtmlToPdf
	}
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
