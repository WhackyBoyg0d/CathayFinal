import HomePage from "./Components/HomePage";
import Booking from "./Components/Booking";
import Explore from "./Components/Explore/Explore";
import Profile from "./Components/Profile";
import Stats from "./Components/Stats";
import Axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";




import "./App.css";
// const axios = require('axios');

function App() {

  const myHeaders = new Headers();
  myHeaders.append("apiKey", "0Ws2MAmAseTl39JZLohswZZgWLCxpZ1K");
  myHeaders.append("Cookie", "_abck=C1B0627000A4B7747C67A09F2FA9F716~-1~YAAQLBQgF/wLAQKTAQAAyvukAgwG9JuT2JutbL7Ik+HTXQGkOqR3jUwWcEoBriHvPwQIlyR6WpkozDJ1775NSy1rVHBq02rhthdAaJC/tGlDnsmEcY8Z8lh8wobtYyJ2F/Vv3gijVZ0Jk4Cr3mlf0ILjtGOP88rePn2iw5RXY4oABVgXRbnMfZJxhEd4+duMhBbmhuoJ65i+fkw75jpylIOlABK5xFFKG8P78imuG/Fe2wtYr0RsD8rhGbJYGqN3L6b+ED/gG0JQAb44f377LPDSP5vhSziwxS3Eoq2NrQMmHef+AaaDAdPknLgNRYfZ/Q1AWGKJ/VymM7kIlPJGWbqBM6zRk98iskvLZb5esooq4KNeT8BhC2tgpMqQXKL5qxd3KJKYf8IEeZ+uD5dPEGHcOrPTzDSMlWEYHAQiw+wi~-1~-1~-1; ak_bmsc=8FC38D9A55B7E7AC3298AFBF57A568B0~000000000000000000000000000000~YAAQLBQgF/0LAQKTAQAAyvukAhmfH6B2S/CTygVsvhmus3tS9UArHMpGjhZlgYX6myHJKvSlgCcOQMo2kcsInGcFoPYwNuNoRNWx94hln0axk/qggCLB/6JWto4KfbNxgHxOUYVezXG9BUA7oxQGObt12ymiv3RCO7IM7U0GaaNH1KvfZVdDpELxmlYYTdpRV/97Uvfiu4qzLoan0BGWbQDGuqBRoK31Oq7UsBpB1wGYdYEkicWpLawXhp+Z8/QpWQdrndGNiVBint3idgeralpgl+ttPVH8jrDszv975IN205BYNt8f1rr8cXJmDmcjJxapwpfuV2b+SscqtLEThlOfTc9rD5wD4yl5iGE7jBxP55c=; bm_sz=276091BC44C7EB6246C97A81133C4F43~YAAQLBQgF/4LAQKTAQAAyvukAhncCMTDJRf+pPpUJfTx29OsR/4/lNygKIE+8DiqpT4wfmYSYMhPnok2dVHDRdWnPLcfyZsbJJJatQmoL/uop9fCV7MPKC5RWABAvmLEeYZjVji2JAWN14O1xYz1Z46I/QY+IDQNdu2v5S2IjP9FY3dXxqRCTAV2YXcBWfwzaTChykfSva+aJhXR9tytfXwJPJDfGsgs0L0x8mqu0bBLvKx/xZkRObOpHvHj77f3P8vYdArDhA+CFlXiXZYsVIgJb8bko2Zht9uoZlnNp96/01EvXYkEYPSXgdwRSxI4ycE9WMhpG4sQPJ42nmwn2jogbMV+lBN4h9/UUn9YMRI9MEm4VnI=~3748409~3158068; 8bac6ca36dd7fb6e1a5df804509d965c=0c86393222528be065d396c1cb85b093; 91d1e5aa2d49f01a98ca619ad658207a=8a1d967d5717d68ece76a567f1b31bb0");
  
  

  let config = {
    method: 'get',
    mode: 'no-cors',
    maxBodyLength: Infinity,
    url: 'https://developers.cathaypacific.com/hackathon-apigw/hackathon-middleware/v1/airport/customers/6I4BVT/details',
    headers: { 
      'apiKey': '0Ws2MAmAseTl39JZLohswZZgWLCxpZ1K', 
      'Cookie': '_abck=6F78F255FE7D33EDF2AE1E503B0E6F0F~-1~YAAQFtgjF1n8Je6SAQAA7798AgxeDQSBfUfSClgcVnP+xD7DAJLi93TKSR6/Rkeyx83/sV+GClVJrctXdV9cKbO5B5+s+ndd8vgodVTup2/mTvOWsT99RR/9XrPXI8dcSA0RzXQlCno8lpH5OmWttGV6OcV9EB+YJUnpnNogS9jHZRXT4i9QU1V/tq5UIQUFvEOxnDu0eu0lApkGauOyyjbFR245ablIWLm/BUIws3yd1ud6KpmnY6HU9yAf2qBo6WH0Gh70qM128HhCQXIc860JkicGL8Lfv0lnU/2snzKPtsYU7cQ6jwpyqIxOst63h++QM2glJoksnkgEaHcapygbKa+yBwt5KX41FFH+WN8F80niBB1YbLKESum1GPEEKV3Ya1kz5LZldH2W9sCl+obDvdp8w0/ZnBLrJ0nMtQlorVPA09c4rpHaVuHpZZw=~-1~-1~-1; ak_bmsc=78C56C6C686D48F997609C63E3A200E4~000000000000000000000000000000~YAAQIwgsF8fH5fySAQAAPsOYAhkBJPHVGxb3yg5Zezipvpicndo6yQ+kLCsL2Jg+ohll18vtmcsRguy87rghwDh3IaB4JKep/K/CQI15Pk7rRvgrcQthWE5LVGWd/dMc/UbSXNvCe1HYdZmG3m0C5oUco5jQxJ05We2eo2F6xTZM6Ej4zTGn50yFRufqmjgpnGs0sC4lN/Mgt1BFbdhfkc/YZVLNlAWn3fJLQja3cPZ2ERL2Xx2Wck1mNTtbNCEGeS9kFPf4y0PEM4LrW0F3KcgQu+WRAp0Akx3ky3S9SQ7+T6Rklph5UPgt56kK8cXjgRGIRWcQ79/8WBY+GpIH0XbRlcCMrzfI2Fh1QqHF3UNAF+pHBPSg2Q==; bm_sv=D3B62D26DE9964F156DD04A67E7E997E~YAAQMwgsF0TOSwCTAQAAH6KtAhn3eRDZE8NpLq90Fm+3bllDyAXKYnIcClZorF4va69kayDycIeqZYvnjGvg1MTULBYa5S56tAssr1/soyU5w1rlQjyRcX8ppDF40NCXy2qkjASxwl0lZfu4N9ykUczosRwYsjV49rBcCORyLGl3MNvtIeM15ZGDW7sckbe4WiTnjW2/Qi45wzTTzBwKeReVyatGquAIU5sZLn5uaKuZ7J1uW5QkmrshNn/aUON89saEcFS5yA==~1; bm_sz=96A6A78968622289209569F630D0D2F1~YAAQFtgjF1v8Je6SAQAA7798Ahk/Pc2mVvLlmtdhRCWAu7zQeVqcpLulpatopLTuo/HCHd8lPB0OoEqJC1f4HFIQVr8GrjGN7deeYQTptTTJ5EbSODwXO4IlFV+lsFsb2+tQSULoWzXJPXcaJC0goKt+y2jMb6MTmTTSAtQd6cIhFBwVd3YF0Q675twcLPtC8Pu/QrpcU/CqDbqCJIBkyxZebuNHTXwdNw2lvzx//CU7JbErNlFuIZ+7y984bxb80wqP6O8WgFJbUry2Go5DgSAbBMe8sl89A6NPYjlInMaH+hhE6jCO5YaeRkzC4HIG/UVA8O/WmDtS4P3X4ACvq5RtA63glp4ziW6lsCX5b7UChR1vkw==~3224899~4600633; 2097dc05cd77cdee2c9085b76e00b8a6=fcdf097ec86e08b88790c117319d8305; 8bac6ca36dd7fb6e1a5df804509d965c=0c86393222528be065d396c1cb85b093; 91d1e5aa2d49f01a98ca619ad658207a=c710d1890bccd9887bff2a4cfbfed571'
    }
  };

  Axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });

  // const requestOptions = {
  //   method: "GET",
  //   headers: myHeaders,
  //   redirect: "follow",
  //   mode: 'no-cors'
  // };

  // fetch("https://developers.cathaypacific.com/hackathon-apigw/hackathon-middleware/v1/airport/customers/6I4CKI/details", requestOptions)
  //   .then((response) => response.text())
  //   .then((result) => console.log(result))
  //   .catch((error) => console.error(error));

  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/booking", element: <Booking /> },
    { path: "/profile", element: <Profile /> },
    { path: "/stats", element: <Stats /> },
    {
      path: "/explore",
      element: <Explore />,
    },
  ]);


  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
