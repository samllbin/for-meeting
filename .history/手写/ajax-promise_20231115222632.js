// promise 封装实现：
function getJSON(url) {
    // 创建一个 promise 对象
    let promise = new Promise(function(resolve, reject) {
      let xhr = new XMLHttpRequest();
      // 新建一个 http 请求
      xhr.open("GET", url, true);
      // 设置状态的监听函数
      xhr.onreadystatechange = function() {
        if (this.readyState !== 4) return;
        // 当请求成功或失败时，改变 promise 的状态
        if (this.status === 200) {
          resolve(this.response);
        } else {
          reject(new Error(this.statusText));
        }
      };
      // 设置错误监听函数
      xhr.onerror = function() {
        reject(new Error(this.statusText));
      };
      // 设置响应的数据类型
      xhr.responseType = "json";
      // 设置请求头信息
      xhr.setRequestHeader("Accept", "application/json");
      // 发送 http 请求
      xhr.send(null);
    });
    return promise;
  }
  
  作者：CUGGZ
  链接：https://juejin.cn/post/6946136940164939813
  来源：稀土掘金
  著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。