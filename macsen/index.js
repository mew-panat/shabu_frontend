var app = new Vue({
  el: "#app",
  data: {
    message: "Testing Vue message!",
  },
});

var app2 = new Vue({
  el: "#app-2",
  data: {
    msg: "You loaded this page on " + new Date().toLocaleString(),
  },
});
