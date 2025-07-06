var posts=["2025/07/06/hello-world/","2025/07/06/test1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };