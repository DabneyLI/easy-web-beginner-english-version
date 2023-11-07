document.getElementById('languageSelector').addEventListener('change', function () {
  var language = this.value;
  switch (language) {
    case 'en':
        window.location.href = './en/index_en.html'; // 设置为根目录下的 en 文件夹中的 index_en.html
        break;
    case 'de':
        window.location.href = 'index.html'; // 替换为德语页面的实际 URL
        break;
    case 'cn':
        window.location.href = './cn/index_cn.html'; // 替换为中文页面的实际 URL
        break;
    // 可以根据需要添加更多的 case
}
});