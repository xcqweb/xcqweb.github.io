(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-b581f93e"],{"06f1":function(e,t,a){"use strict";a.r(t);var n=a("15b8"),r=a.n(n),s=(a("7f7f"),a("795b")),l=a.n(s),o=a("5f5c"),i=a.n(o),c={props:{beforeUpload:Function,onSuccess:Function},data:function(){return{loading:!1,excelData:{header:null,results:null}}},methods:{generateData:function(e){var t=e.header,a=e.results;this.excelData.header=t,this.excelData.results=a,this.onSuccess&&this.onSuccess(this.excelData)},handleDrop:function(e){if(e.stopPropagation(),e.preventDefault(),!this.loading){var t=e.dataTransfer.files;if(1===t.length){var a=t[0];if(!this.isExcel(a))return this.$Message.error("Only supports upload .xlsx, .xls, .csv suffix files"),!1;this.upload(a),e.stopPropagation(),e.preventDefault()}else this.$Message.error("Only support uploading one file!")}},handleDragover:function(e){e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="copy"},handleUpload:function(){this.$refs["excel-upload-input"].click()},handleClick:function(e){var t=e.target.files[0];t&&this.upload(t)},upload:function(e){this.$refs["excel-upload-input"].value=null,this.beforeUpload?this.beforeUpload(e)&&this.readerData(e):this.readerData(e)},readerData:function(e){var t=this;return this.loading=!0,new l.a(function(a,n){var r=new FileReader;r.onload=function(e){var n=e.target.result,r=i.a.read(n,{type:"array"}),s=r.SheetNames[0],l=r.Sheets[s],o=t.getHeaderRow(l),c=i.a.utils.sheet_to_json(l);t.generateData({header:o,results:c}),t.loading=!1,a()},r.readAsArrayBuffer(e)})},getHeaderRow:function(e){var t,a=[],n=i.a.utils.decode_range(e["!ref"]),r=n.s.r;for(t=n.s.c;t<=n.e.c;++t){var s=e[i.a.utils.encode_cell({c:t,r:r})],l="UNKNOWN "+t;s&&s.t&&(l=i.a.utils.format_cell(s)),a.push({title:l,key:l})}return a},isExcel:function(e){return/\.(xlsx|xls|csv)$/.test(e.name)}}},u=(a("e36f"),a("2877")),d={data:function(){return{tableData:[],tableHeader:[]}},components:{UploadExcel:Object(u.a)(c,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("input",{ref:"excel-upload-input",staticClass:"excel-upload-input",attrs:{type:"file",accept:".xlsx, .xls"},on:{change:e.handleClick}}),a("div",{staticClass:"drop",on:{drop:e.handleDrop,dragover:e.handleDragover,dragenter:e.handleDragover}},[e._v("\n    拖拽文件到此处或\n    "),a("i-button",{staticStyle:{"margin-left":"16px"},attrs:{loading:e.loading,size:"large",type:"primary"},on:{click:e.handleUpload}},[e._v("\n      点击上传预览\n    ")])],1)])},[],!1,null,"3b732a30",null).exports},methods:{beforeUpload:function(e){return!0},handleSuccess:function(e){var t=e.results,a=e.header;this.tableData=r()(t),this.tableHeader=r()(a)}}},p=Object(u.a)(d,function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("Upload-excel",{attrs:{"on-success":this.handleSuccess,"before-upload":this.beforeUpload}}),t("i-table",{staticStyle:{"margin-top":"20px"},attrs:{stripe:"",columns:this.tableHeader,data:this.tableData}})],1)},[],!1,null,"72cda21e",null);t.default=p.exports},3527:function(e,t,a){},e36f:function(e,t,a){"use strict";var n=a("3527");a.n(n).a}}]);