const si = require('systeminformation');

si.getStaticData().then((info) => {
  console.log(info);
})