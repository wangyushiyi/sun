new Vue({
    el: '#app',
    data: {
        categories: [], // 存储所有分类数据
        today: new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' }) // 格式化当前日期
    },
    created() {
        fetch('data.json')
            .then(response => response.json())
            .then(data => {
                this.categories = data; // 存储所有从JSON文件加载的分类数据
            })
            .catch(error => console.error('Error loading the data:', error));
    }
});
