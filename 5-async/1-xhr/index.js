function fetchData(url, successCallback, errorCallback) {
  const xhr = new XMLHttpRequest();
  // <-- start
  // TODO 21: 通过XMLHttpRequest实现异步请求
  xhr.open('POST', url, true);
  xhr.setRequestHeader('content-type', 'application/json');
  // eslint-disable-next-line func-names
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status <= 299) {
      successCallback(xhr);
    }
    if (xhr.readyState === 4 && (xhr.status < 200 || xhr.status > 299)) {
      errorCallback(xhr);
    }
  };
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(
  URL,
  result => {
    document.writeln(JSON.parse(result).name);
  },
  error => {
    console.error(error);
  }
);
