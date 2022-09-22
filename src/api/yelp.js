import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer DBMHzuhc4KFxjsNy2FLKgm_oMJcWl1N-jetMzuAhYs7Th8Xcln_Po7blq596EzB4B-gxKLkcRYbUOvSHW5GgRC-tDybVMHImgwHLXI0c1wv1Je8WwHj34egs0o8qY3Yx",
  },
});
