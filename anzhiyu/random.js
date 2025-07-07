var posts=["2025/07/06/hello-world/","2025/07/06/test1/","2025/07/07/test2/","2025/07/07/test3/","2025/07/07/test4/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };