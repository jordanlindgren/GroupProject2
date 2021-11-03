const { Image } = require('../models');

const imageData = [
  {
    img_url: "https://res.cloudinary.com/da5i4rzq1/image/upload/v1635952742/group%20project/toiletface_rtdcbd.jpg",
  }, 
  {
    img_url: "https://res.cloudinary.com/da5i4rzq1/image/upload/v1635952739/group%20project/skeletonguy_tqrb3y.jpg",
  }, 
  {
    img_url: "https://res.cloudinary.com/da5i4rzq1/image/upload/v1635952737/group%20project/pineapple_jl0dnx.jpg",
  }, 
  {
    img_url: "https://res.cloudinary.com/da5i4rzq1/image/upload/v1635952733/group%20project/ouch_jqqrwk.jpg",
  }, 
  {
    img_url: "https://res.cloudinary.com/da5i4rzq1/image/upload/v1635952728/group%20project/goatteeth_xgexqc.jpg",
  }, 
  {
    img_url: "https://res.cloudinary.com/da5i4rzq1/image/upload/v1635952725/group%20project/frogdude_xmf19f.jpg",
  }, 
  {
    img_url: "https://res.cloudinary.com/da5i4rzq1/image/upload/v1635952708/group%20project/flyingguy_kfxaja.jpg",
  }, 
  {
    img_url: "https://res.cloudinary.com/da5i4rzq1/image/upload/v1635952698/group%20project/dogface_ilw9fj.jpg",
  }, 
  {
    img_url: "https://res.cloudinary.com/da5i4rzq1/image/upload/v1635952688/group%20project/creepymask_moe4sn.jpg",
  }, 
  {
    img_url: "https://res.cloudinary.com/da5i4rzq1/image/upload/v1635952688/group%20project/creepymask_moe4sn.jpg",
  }, 
  {
    img_url: "https://res.cloudinary.com/da5i4rzq1/image/upload/v1635955864/group%20project/hell1_dvqqmr.jpg",
  }, 
  {
    img_url: "https://res.cloudinary.com/da5i4rzq1/image/upload/v1635955859/group%20project/cliff1_iqz561.jpg",
  }, 
  {
    img_url: "https://res.cloudinary.com/da5i4rzq1/image/upload/v1635955856/group%20project/abovewater1_rqeui1.jpg",
  }, 
];

const seedProducts = () => Image.bulkCreate(imageData);

module.exports = seedProducts;
