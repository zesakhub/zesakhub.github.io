/*
function getContent(datafirst, dataforcishu) {
  if (dataforcishu === 0) {
    console.log('2');
    return datafirst;
  }
  else{
    data = datafirst[0].content;
    if (dataforcishu === 1) {
      return data;
    }else{
      for (let thtime = 0; thtime < dataforcishu-1; thtime++) {
        data = data[0].content;
        console.log('1');
      }
      return data;
    }
  }
}
function suppercreate() {
  const buttonContainer = document.getElementById('button-container');
  const items = getContent(datafirst,clickaddonepage)
  items.forEach(item => { 
    function docjia() {
      const adoc = document.createElement('a');
      adoc.classList.add('firstm');
      const svgIcon = `<svg class="icondoc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21L3 21C2.45 21 2 20.55 2 20V4ZM10.5858 6L9.58579 5H4V7H9.58579L10.5858 6ZM4 9V19L20 19V7H12.4142L10.4142 9H4Z"></path></svg>`;
      adoc.innerHTML = "\u00A0"+ svgIcon +"\u00A0"+"\u00A0"+ item.name;
      adoc.setAttribute('onclick','firstmdocjiajumpz()',)
      buttonContainer.appendChild(adoc);
    }
    function docjiana() {
      const adoc = document.createElement('a');
      adoc.classList.add('first');
      const svgIcon = `<svg class="icondoc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 4H5V20H19V8H15V4ZM3 2.9918C3 2.44405 3.44749 2 3.9985 2H16L20.9997 7L21 20.9925C21 21.5489 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918ZM17.6569 12L14.1213 15.5355L12.7071 14.1213L14.8284 12L12.7071 9.87868L14.1213 8.46447L17.6569 12ZM6.34315 12L9.87868 8.46447L11.2929 9.87868L9.17157 12L11.2929 14.1213L9.87868 15.5355L6.34315 12Z"></path></svg>`;
      adoc.innerHTML = "\u00A0"+ svgIcon +"\u00A0"+"\u00A0"+ item.name;
      // 设置下载
      adoc.href = item.name;
      adoc.download = item.name;
      buttonContainer.appendChild(adoc);
    }
      if (item.type) {//判断是文件还是文件夹
        if (item.type === "file") {
          docjiana()
          console.log(`文件：${item.name}`);
        } else if (item.type === "folder") {
          docjia()
          console.log(`文件夹：${item.name}`); 
        }
      } else {
        console.log(`无法确定类型：${item.name}`);
      }
    
    //   const adoc = document.createElement('a');
    //   adoc.classList.add('first');
    //   const svgIcon = `<svg  class="icondoc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    //   <path d="M2 4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5H21C21.5523 5 22 5.44772 22 6V12.3604C21.0023 10.9408 19.3542 10 17.5 10C14.8979 10 12.7015 11.853 12.1394 14.2817C10.8512 15.1306 10 16.5894 10 18.25C10 19.2749 10.3246 20.2239 10.8766 21H3C2.44772 21 2 20.5523 2 20V4ZM14.0015 15.6031C12.8465 15.9291 12 16.9907 12 18.25C12 19.7688 13.2312 21 14.75 21H20.25C21.7688 21 23 19.7688 23 18.25C23 16.9907 22.1535 15.9291 20.9985 15.6031C21.0548 13.6578 19.4477 12 17.5 12C15.5523 12 13.9452 13.6578 14.0015 15.6031Z"></path>
    // </svg>`;
    //   adoc.href = './' + item.name;
    //   adoc.download = '';
    //   adoc.innerHTML = "\u00A0"+ svgIcon +"\u00A0"+"\u00A0"+ item.name;
    //   buttonContainer.appendChild(adoc);
  });
}
function firstmdocjiajumpz(){
  console.log('11111111');
  const aTag = document.querySelector('.firstm');

  if (aTag) {
    console.log('The element with class "firstm" was found.');
      const firstmLinks = document.querySelectorAll('a.firstm');

      // 遍历并删除每个元素
      firstmLinks.forEach(link => {
          link.remove();
      });
      const firstmLinks1 = document.querySelectorAll('a.first');

      // 遍历并删除每个元素
      firstmLinks1.forEach(link => {
          link.remove();
      });
      clickaddonepage+=1;
      suppercreate()
      console.log('1');

  } else {
    console.log('The element with class "firstm" was not found.');
  }
}

var clickaddonepage = 0

fetch('file_structure.json')
  .then((response) => response.json())
  .then((data) => {
    console.log(data.content);
    console.log(data);
    datafirst = data.content;
    // const items = getContent(data, 1);
    const items = getContent(datafirst,clickaddonepage)
    // const items = data.content; // 获取content属性的值
    console.log(items);
    suppercreate()
  })
  .catch(error => {
    console.error('Error:', error);
}
);
*/
function copycode(h2Text) {
  let textArea = document.createElement("textarea");
  textArea.value = h2Text;
  // 使text area不在viewport，同时设置不可见
  textArea.style.position = "absolute";
  textArea.style.opacity = 0;
  textArea.style.left = "-999999px";
  textArea.style.top = "-999999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  return new Promise((res, rej) => {
      // 执行复制命令并移除文本框
      document.execCommand('copy') ? res() : rej();
      textArea.remove();
      $('.alert').html('Copied Successfully!').addClass('alert-success').slideDown(400).show().delay(1000).fadeOut();
    });
}
function aa() {
  var h2Text = document.getElementById("ipv6").innerHTML;
  copycode(h2Text);
  // navigator.clipboard.writeText(h2Text); 
}
function bb() {
  var h2Text = document.getElementById("ipv4").innerHTML;
  copycode(h2Text);
}
function acn() {
  var h2Text = "3197529468@qq.com"
  copycode(h2Text);
}function psw() {
  var h2Text = "qqqwww111222"
  copycode(h2Text);
}

function pagetab1() {
  var page1 = document.getElementById("page1");
  var page2 = document.getElementById("page2");
  var page3 = document.getElementById('page3');
  console.log('1');
  page1.style.display = "";
  page2.style.display = 'none';
  page3.style.display = 'none';
}

function pagetab2() {
  var page1 = document.getElementById("page1");
  var page2 = document.getElementById("page2");
  var page3 = document.getElementById('page3');
  console.log('2');
  page1.style.display = "none";
  page2.style.display = '';
  page3.style.display = 'none';
}
function pagetab3() {
  var page1 = document.getElementById("page1");
  var page2 = document.getElementById("page2");
  var page3 = document.getElementById('page3');
  console.log('3');
  page1.style.display = "none";
  page2.style.display = 'none';
  page3.style.display = '';
  
}

