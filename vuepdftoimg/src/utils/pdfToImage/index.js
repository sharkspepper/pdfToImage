// const pdfJs = require("pdfjs-dist");
// pdfJs.GlobalWorkerOptions.workerSrc =
// "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.5.207/pdf.worker.js";

import pdfJs from "pdfjs-dist"; //2.2.228 不要轻易该版本
pdfJs.GlobalWorkerOptions.workerSrc = "pdfjs-dist/build/pdf.worker.js";
// 一次返回所有pages
async function getAllPage(pdf) {
    const maxNum = pdf.numPages
    let result = [];
    for(var i=1;i <= maxNum; i++){
        var task = await dealOnePage(i, pdf)
        result.push(task)
    }
    return result;
}
function dealOnePage(index,pdf){
    return new Promise((resolve, reject)=>{
        pdf.getPage(index).then(async (page) => {
            const viewport = page.getViewport({ scale: 1.0 });
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.width = viewport.width;
            canvas.height = viewport.height;
            //渲染任务 
            const renderTask = page.render({
                canvasContext: context,
                viewport,
            })
            await renderTask.promise
            /* 方式一：事先定义好id为imgDiv元素,则可直接在视图显示 */
            // document.getElementById("imgDiv").append(canvas)
            /* 方式二:生成base64的图片(因为只需要生成的base64,所以不用渲染到界面) */
            return resolve(canvas.toDataURL())
        }).catch(function (err) {
            reject(err);
        })
    })
}

/**
 * 
 * @param {*} pdfUrl url或base64
 * @returns 
 */
export default async function pdfToImage(pdfUrl){
    let loadingTask = pdfJs.getDocument(pdfUrl);
    let pdf = await loadingTask.promise
    let results = await getAllPage(pdf) // pdf 生成了 base64图片
    return results
}