var count = 0;
var timer = setInterval(function() {
                            .function() {
                            console.log(count);
                            if (++count > 4) clearInterval(timer);
                            }
  console.log(count);
  if (++count > 4) clearInterval(timer);
    },300);

