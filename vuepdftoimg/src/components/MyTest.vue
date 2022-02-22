<template>
    <div class="parent-container">
        <div class="child-container">
            <div class="urlPdf">
                <el-button type="primary" @click="testPdf()">pdfUrl转换成image(url)</el-button>
                <el-link :href="pdfUrl" style="margin:10px 0px;">pdf样例</el-link>
                <div class="imgList">
                    <el-image 
                        style="width:100px;height:100px;margin:5px;" 
                        v-for="(item,index) in imgs1"
                        :key="index"
                        :src="item"
                        :preview-src-list="[item]"
                    ></el-image>
                </div>
            </div>
            <div class="filePdf">
                <el-button type="primary" class="uploadPdf">请选择pdf(file)
                    <input type="file" accept="application/pdf" @change="uploadPdf">
                </el-button>
                <div class="imgList">
                    <el-image 
                        style="width:100px;height:100px;margin:5px;" 
                        v-for="(item,index) in imgs2"
                        :key="index"
                        :src="item"
                        :preview-src-list="[item]"
                    ></el-image>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import pdfToImage from "@/utils/pdfToImage/index"
import { fileToBase64 } from "@/utils/publicFun"
export default ({
    name:"testpdf",
    data(){
        return{
            // url:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
            pdfUrl:"http://58.49.28.22:9000/test/lc/011710394373ImagePDF.pdf",
            imgs1:[], //url
            imgs2:[], //files
        }
    },
    created(){

    },
    methods:{
        testPdf: async function(){
            const pdfUrl = this.pdfUrl;
            let result = await pdfToImage(pdfUrl)
            this.imgs1 = result
        },
        uploadPdf:async function(e){
            let file = e.currentTarget.files[0]
            let base64 = await fileToBase64(file)
            let result = await pdfToImage(base64)
            this.imgs2 = result
        }
    },
})
</script>
<style scoped>
    .parent-container{
        display: flex;
        justify-content: center;
        padding: 20px;
    }
    .child-container{
        width: 80%;
    }

    .urlPdf, .filePdf{
        margin-top: 10px;
        padding: 3px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #aaa;
    }    
    .imgList{
        height: 110px;
        text-align: center;
    }
    .uploadPdf{
        position: relative;
    }
    .uploadPdf input{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        opacity: 0;
    }
</style>
