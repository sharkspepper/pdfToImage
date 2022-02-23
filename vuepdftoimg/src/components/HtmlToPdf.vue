<template>
   <div>
        <div class="biaoge_cont">
            <div class="biaoge_content" id="biaoge_pdf">
                <div class="biaoge_head">
                    <h2>交通事故调解协议书</h2>
                </div>
                <div class="biaoge_body">
                    <div class="biaoge">
                        <div class="biaoge_item border_bottom">
                            <table class="protable" cellspacing=0>
                                <tr>
                                        <td class="border_bottom">当事人姓名</td>
                                        <td class="border_left border_bottom">性别</td>
                                        <td class="border_left border_bottom">年龄</td>
                                        <td class="border_left border_bottom">身份证号码</td>
                                        <td class="border_left border_bottom">联系电话</td>
                                </tr>
                                <tr>
                                        <td class="border_bottom">甲：
                                            <span><input type="text" style="width: 55px;" v-model="protocolInfo.realname"></span>
                                        </td>
                                        <td class="border_left border_bottom"><span><input type="text" style="width: 30px;" v-model="protocolInfo.sex"></span></td>
                                        <td class="border_left border_bottom"><span><input type="text" style="width: 30px;" v-model="protocolInfo.age"></span></td>
                                        <td class="border_left border_bottom"><span><input type="text" style="width: 150px;" v-model="protocolInfo.idcard"></span></td>
                                        <td class="border_left border_bottom"><span><input type="text" style="width: 90px;" v-model="protocolInfo.mobile"></span></td>
                                </tr>
                                <tr>
                                        <td class="border_bottom">乙：
                                            <span><input type="text" style="width: 55px;" value="许青青"></span>
                                        </td>
                                        <td class="border_left border_bottom"><span><input type="text" style="width: 30px;" v-model="secondPerson.sex"></span></td>
                                        <td class="border_left border_bottom"><span><input type="text" style="width: 30px;" v-model="secondPerson.age"></span></td>
                                        <td class="border_left border_bottom"><span><input type="text" style="width: 150px;" v-model="secondPerson.idcard"></span></td>
                                        <td class="border_left border_bottom"><span><input type="text" style="width: 90px;" v-model="secondPerson.mobile"></span></td>
                                </tr>
                                <tr>
                                        <td>丙：
                                            <span><input type="text" style="width: 55px;" value=""></span>
                                        </td>
                                        <td class="border_left"><span><input type="text" style="width: 30px;" v-model="thirdPerson.sex"></span></td>
                                        <td class="border_left"><span><input type="text" style="width: 30px;" v-model="thirdPerson.age"></span></td>
                                        <td class="border_left"><span><input type="text" style="width: 150px;" v-model="thirdPerson.idcard"></span></td>
                                        <td class="border_left"><span><input type="text" style="width: 90px;" v-model="thirdPerson.mobile"></span></td>
                                </tr>
                            </table>
                        </div>
                        <div class="biaoge_item border_bottom" style="height:90px">
                            <p class="text_indent">上列当事人于
                                <span class="border_bottom"><input type="text" style="width: 30px;" v-model="protocolInfo.ac_year"></span>年
                                <span class="border_bottom"><input type="text" style="width: 15px;" v-model="protocolInfo.ac_month"></span>月
                                <span class="border_bottom"><input type="text" style="width: 15px;" v-model="protocolInfo.ac_day"></span>日在
                                <span class="border_bottom"><input type="text" style="width:200px" placeholder="（限制15个字符）" value=""></span>发生交通事故（车牌号:
                                <span class="border_bottom"><input type="text" style="width: 85px;" v-model="protocolInfo.licenseno"></span>），各方当事人对本次交通事故的责任认定无异议，并于
                                <span class="border_bottom"><input type="text" style="width: 30px;" v-model="protocolInfo.pro_year"></span>年
                                <span class="border_bottom"><input type="text" style="width: 15px;" v-model="protocolInfo.pro_month"></span>月
                                <span class="border_bottom"><input type="text" style="width: 15px;" v-model="protocolInfo.pro_day"></span>日达成一致赔偿调解协议如下：</p>
                            <p>一、各方当事人确认交通事故损失情况如下：</p>
                        </div>
                        <div class="biaoge_item border_bottom" style="height:179px;">
                            <div v-if="flag1">
                                <p><textarea v-model="projectText" type="text" placeholder="（限制310个字符）" rows="9" wrap="hard" maxlength="310" onchange="this.value=this.value.substring(0,310)" onkeydown="this.value=this.value.substring(0,310)" onkeyup="this.value=this.value.substring(0,310)"></textarea></p>
                            </div>
                            <div id="project" v-show="!flag1">
                                <span>{{projectText}}</span>
                            </div>
                        </div>
                        <div class="biaoge_item border_bottom">
                            <p class="text_weight">二、经和解（调解），各方当事人自愿达成以下协议：</p>
                            <p >甲方根据以上费用赔付乙方
                                <span class="border_bottom"><input type="text" style="width:70px" value=""></span>元，其中甲方已垫付
                                <span class="border_bottom"><input type="text" style="width:70px" value=""></span>元，还需支付乙方
                                <span class="border_bottom"><input type="text" style="width:70px" value=""></span>元。</p>
                            <p>车损情况：</p>
                                <div>
                                    <p v-if="flag2">
                                        <textarea v-model="contentText" type="text" placeholder="（限制120个字符）" rows="4" wrap="hard" maxlength="120" onchange="this.value=this.value.substring(0,120)" onkeydown="this.value=this.value.substring(0,120)" onkeyup="this.value=this.value.substring(0,120)"></textarea>
                                    </p>
                                    <p id="content" v-show="!flag2" style="height:64px">
                                        <span>{{contentText}}</span>
                                    </p>
                                </div>
                            <p style="text-align:right">以上费用需经保险公司审核通过后生效</p>
                        </div>
                        <div class="biaoge_item border_bottom" style="height:160px">
                            <p class="text_indent text_weight">各方当事人特别约定：本次事故经各方当事人协商达成一致，达成上述协议，今后各方无涉。</p>
                            <p class="text_weight">本协议履行方式： 
                                <span>
                                    <input type="text" style="width: 350px;" value="">
                                </span>
                            </p>
                            <p class="text_weight">本协议履行期限：</p>
                            <p class="text_indent text_weight">本协议为各方当事人的真实意愿表示，属于民事合同，受法律保护，当事人各方签字后即行生效。各方当事人应当按照协议书约定自觉和及时履行自己的义务，不得擅自变更或者解除本协议，否则将承担相应法律后果。</p>
                        </div>
                        <div class="biaoge_item text_weight" style="height:80px">
                            <p>当事人签名：</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="text-align:center;margin:10px 0px;">
            <el-button type="primary" @click="generate()">生成并上传</el-button>
        </div>
   </div>
</template>

<script>
import html2canvas from 'html2canvas'
import JsPDF from 'jspdf'
export default {
    name:"Protocol",
    data(){
        return{
            registno:"REGISTNO1234",
            protocolInfo:{ //甲
                claimId:"1",
                realname:"小黑",
                sex:"男",
                age:"21",
                idcard:"1321234234233323534",
                mobile:"142343434453",
                ac_year:"2020",
                ac_month:"12",
                ac_day:"12",
                pro_year:"2021",
                pro_month:"08",
                pro_day:"08",
            },
            secondPerson:{//乙
                "claimId":"1",
                "realname":"小明",
                "idcard":"123456789012345678",
                "mobile":"12345678901",
                "sex":"男",
                "age":"19"
            },
            thirdPerson:{//丙
                "claimId":"1",
                "realname":"小花",
                "idcard":"876543210987654321",
                "mobile":"10987654321",
                "sex":"女",
                "age":"20"
            },
            flag1:true,
            flag2:true,
            contentText:"协议内容",//协议内容
            projectText:"项目内容",//项目内容
        }
    },
    created(){

    },
    methods:{
        generate:function(){
            var target = document.getElementById("biaoge_pdf");
            var claimId = [];
            if(claimId.indexOf(this.protocolInfo.claimId) < 0 && this.protocolInfo.claimId){
                claimId.push(this.protocolInfo.claimId*1)
            }
            if(claimId.indexOf(this.secondPerson.claimId) < 0 && this.secondPerson.claimId){
                claimId.push(this.secondPerson.claimId*1)
            }
            if(claimId.indexOf(this.thirdPerson.claimId) < 0 && this.thirdPerson.claimId){
                claimId.push(this.thirdPerson.claimId*1)
            }
            claimId = JSON.stringify(claimId)
            var len1 = this.projectText.length;
            var len2 = this.contentText.length;
            if(len1 > 0){
                this.flag1 = false;
            }
            if(len2 > 0){
                this.flag2 = false;
            }
            this.$confirm('确认是否生成调解书?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                closeOnClickModal:false,
                closeOnPressEscape:false,
                closeOnHashChange:false,
                type: 'warning'
                }).then(() => {
                    this.utilpdf(target,claimId);
                    // this.$message({
                    //     type: 'success',
                    //     message: '生成成功!'
                    // });
                    this.flag1 = true;
                    this.flag2 = true;
                }).catch(() => {
                this.flag1 = true;
                this.flag2 = true;
                this.$message({
                    type: 'info',
                    message: '已取消'
                });          
            });
        },
        utilpdf:function(ele,claimId){
            let eleW = ele.offsetWidth;// 获得该容器的宽
            let eleH = ele.offsetHeight;// 获得该容器的高
            let eleOffsetTop = ele.offsetTop;  // 获得该容器到文档顶部的距离
            let eleOffsetLeft = ele.offsetLeft; // 获得该容器到文档最左的距离

            var canvas = document.createElement("canvas");
            var abs = 0;

            let win_in = document.documentElement.clientWidth || document.body.clientWidth; // 获得当前可视窗口的宽度（不包含滚动条）
            let win_out = window.innerWidth; // 获得当前窗口的宽度（包含滚动条）

            if(win_out>win_in){
                // abs = (win_o - win_i)/2;    // 获得滚动条长度的一半
                abs = (win_out - win_in)/2;    // 获得滚动条宽度的一半
                // console.log(a, '新abs');
            }

            var opts = {
                scale: 3, //设置可以解决导出模糊问题
                dpi: 300,
                // allowTaint: true,  //允许 canvas 污染， allowTaint参数要去掉，否则是无法通过toDataURL导出canvas数据的
                useCORS:true  //允许canvas画布内 可以跨域请求外部链接图片, 允许跨域请求。
            } 

            canvas.width = eleW * 8;    // 将画布宽&&高放大两倍
            canvas.height = eleH * 8;

            var context = canvas.getContext("2d");
            context.scale(2, 2);
            context.translate(-eleOffsetLeft -abs, -eleOffsetTop);
            // 这里默认横向没有滚动条的情况，因为offset.left(),有无滚动条的时候存在差值，因此
            // translate的时候，要把这个差值去掉
            html2canvas( ele, opts).then( (canvas)=>{
                var contentWidth = canvas.width;
                var contentHeight = canvas.height;
                //一页pdf显示html页面生成的canvas高度;
                var pageHeight = contentWidth / 592.28 * 841.89;
                //未生成pdf的html页面高度
                var leftHeight = contentHeight;
                //页面偏移
                var position = 0;
                //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
                var imgWidth = 595.28;
                var imgHeight = 595.28/contentWidth * contentHeight;
                var pageData = canvas.toDataURL('image/jpeg', 1.0);
                var pdf = new JsPDF('p', 'pt', 'a4');
                //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
                //当内容未超过pdf一页显示的范围，无需分页
                if (leftHeight < pageHeight) {
                    //在pdf.addImage(pageData, 'JPEG', 左，上，宽度，高度)设置在pdf中显示；
                    pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
                    // pdf.addImage(pageData, 'JPEG', 20, 40, imgWidth, imgHeight);
                } else {    // 分页
                    while(leftHeight > 0) {
                        pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight);
                        leftHeight -= pageHeight;
                        position -= 841.89;
                        //避免添加空白页
                        if(leftHeight > 0) {
                            pdf.addPage();
                        }
                    }
                }
                // 方式一:可动态生成
                var pdfName = "调解书.pdf";
                pdf.save(pdfName);


                // 方式二: 保存到服务器
                /*formData.append()语法
                File是Blob的子类型
                formData.append()处理Blob,设置文件名,需要加一个文件名，否则默认值为'blob'
                */

                /* 
                var datapdf = pdf.output("blob");
                var formData = new FormData();
                formData.append("file", datapdf,'调解书.pdf');
                formData.append("claimId", claimId);
                this.$axios.post('/Base/generatePdf',formData)
                .then(data => {
                    if (data.data.code == 200) {
                        this.$message({
                            type: "success",
                            message: "生成并上传成功"
                        });
                    } else {
                        this.$message.error(data.msg);
                    }
                })
                .catch(err => {
                    this.$message.error(err);
                }); 
                */
            })
        },
    }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
.biaoge_cont{
    width:700px;
    height:950px;
    background:#fff;
    margin:auto;
}
.biaoge_content{
    background: #fff;
    padding: 56px 100px 50px 100px;
}
.biaoge_head h2{
    text-align: center;
    font-weight: 600;
    font-size: 20px;
}
.biaoge{
    width: auto;
    /* height: 800px; */
    margin-top: 8px;
    border: 1px solid #000;
    font-size: 14px;
}
.biaoge p{
    padding: 3px;
}
.biaoge span{
    padding: 0 5px 0 5px;
}
.protable{
    width: 100%;
    height: auto;
    text-align: center;
}
td{
    width: auto;
    height: 34px;
}
.border_left{
    border-left: 1px solid #000;
}
.border_bottom{
    border-bottom: 1px solid #000;
}
.text_indent{
    text-indent:2em
}
.text_weight{
    font-weight: 800;
}
input{
    border: none;
    outline: none;
    text-align: center;
    height: 100%;
}
.biaoge select{
    border: none;
    padding: 2px;
    outline: none;
    -webkit-appearance:none;
    -moz-appearance:none;
    appearance:none; /*去掉下拉箭头*/
    /* text-align: center; */
}
.biaoge select::-ms-expand { 
    display: none; 
}
textarea{
    border: none;
    outline: none;
    resize: none; 
    font-size:14px;
    overflow: hidden;
    width:490px;
    /* height:66px; */
    display: block;
    /* text-align:left; */
    white-space: pre-wrap;
    word-wrap: break-word; 
    word-break: break-all;
}
#content span,#project span{
    padding: 0px;
    /* height: 66px; */
    text-indent:2em;
    white-space: pre-wrap;
    word-wrap: break-word; 
    word-break: break-all;
}
</style>