var mixin = {
    data() {
        return {
            webTitle: '集团网站-马自达中国', // 需要更改网页标签头部内容时，this.webTitle = "xxx"就好
            reloadPage: true, // 页面重新加载 == F5
        }
    },
    watch: {
        webTitle: function () {
            this.changeWebTitle()
        }
    },
    created() {
        this.changeWebTitle()
    },
    methods: {
        // 更改网页标签内容
        changeWebTitle() {
            var title = document.getElementsByTagName("title")
            title[0].innerHTML = this.webTitle
        },
        // 刷新网页
        reload() {
            this.reloadPage = false
            this.$nextTick(function () {
                this.reloadPage = true
            })
        },
        // 路由跳转
        goRouter(path) {
            this.$router.push(path)
        }
    }
}
export default mixin