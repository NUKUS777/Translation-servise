// import { useRef} from "react";
// import axios from "axios";
// import { useAuth } from "../../Hooks/useAuth";
// // import pass from "../../img/about_img.jpg"
// import styled from "styled-components";

// export const Login = () => {
//   const {token, setToken} = useAuth();
//   const elEmail = useRef();
//   const elPassword = useRef();
//   const handleUserLogin = (evt) => {
//     evt.preventDefault();
//     const formData = new FormData()
//     const [email,password] = evt.target.elements;
//     formData.append("email", email.value);
//     formData.append("password", password.value);
//     axios
//     .post("https://reqres.in/api/login", formData)
//     .then((data) =>setToken(data.data))
//     .then((data) =>console.log(token))
//     .catch((error) => console.log(error));
//   };

//   return(
//     <Div className='d-flex'>
//       <Left>
//         {/* <Img src={pass} /> */}
//       </Left>
//       <Wrapper>
//           <h2>Sign in</h2>
//           <Form onSubmit={handleUserLogin}  className="form d-flex flex-column">
//             <Input ref={elEmail} placeholder='Email' className="form-control mb-3 m-auto" type="email" name="tel" />
//             <Input ref={elPassword}  placeholder='Password' className="form-control mb-3 m-auto" type="password" name="password" autoComplete="on"/>
//             <Button type="submit">Next step</Button>
//           </Form>
//       </Wrapper>

//     </Div>
//   )
// }

// const Div = styled.div`
//   width: 1349px;
//   height: 100%
//   margin 0 auto;
// `;

// const Left = styled.div`
//   width: 50%;
//   height: 100%;
// 	background-color: #C9AC8C;
// `;

// const Wrapper = styled.div`
//   margin: 0 auto;
//   margin-top: 75px;
// 	height: 100%;
//   width: 330px;
// 	background-color: #fff;
// `;

// const Form = styled.form`
// 	width: 100%;
// `;

// const Input = styled.input`
// 	width: 330px;
//   height: 46px
// 	margin-bottom 16px;
//   background: #FFFFFF;
//   border: 1px solid #B4B4BB;
//   border-radius: 10px;
//   padding-top: 10px;
//   padding-left: 29px;
//   padding-bottom: 10px;
// `;

// const Button = styled.button`
//   background-color: #152540;
//   border-radius: 99px;
//   color: white;
//   width: 330px;
//   font-weight: 500;
//   font-size: 18px;
//   line-height: 36px;
//   border: none;
// `;

// // const Img = styled.img`
// //   width: 70%;
// //   height: auto;
// //   margin-left: 70px;
// //   margin-top: 100px;
// //   margin-bottom: 85px;
// // `;

import { useRef } from "react";
import axios from "axios";
import { useAuth } from "../../Hooks/useAuth";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const { token, setToken } = useAuth();
  const elEmail = useRef();
  const elPassword = useRef();

  const navigate = useNavigate();

  const handleUserLogin = (evt) => {
    evt.preventDefault();
    // const formData = new FormData();
    // const email = elEmail.current.value;
    // const password = elPassword.current.value;
    // formData.append("email", email);
    // formData.append("password", password);
    axios
      .post(
        "http://24.199.117.223:8080/api/v1/auth/authenticate",
        {
          phoneNum: elEmail.current.value,
          password: elPassword.current.value,
        }
      )
      .then(function (response) {
        if (response.data) {
          setToken(response.data);
          navigate("/");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <Div className="d-flex">
      <Left>{/* <Img src={pass} /> */}</Left>
      <Wrapper>
        <h2>Sign in</h2>
        <Form onSubmit={handleUserLogin} className="form d-flex flex-column">
          <Input
            ref={elEmail}
            placeholder="Email"
            className="form-control mb-3 m-auto"
            type="text"
            name="tel"
          />
          <Input
            ref={elPassword}
            placeholder="Password"
            className="form-control mb-3 m-auto"
            type="password"
            name="password"
            autoComplete="on"
          />
          <Button type="submit">Next step</Button>
        </Form>
        <Link to="/register">Register</Link>
      </Wrapper>
    </Div>
  );
};

const Div = styled.div`
  width: 1349px;
  height: 100%;
  margin: 0 auto;
`;

const Left = styled.div`
  width: 50%;
  height: 100%;
  background-color: #c9ac8c;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  margin-top: 75px;
  height: 100%;
  width: 330px;
  background-color: #fff;
`;

const Form = styled.form`
  width: 100%;
`;

const Input = styled.input`
  width: 330px;
  height: 46px;
  margin-bottom: 16px;
  background: #ffffff;
  border: 1px solid #b4b4bb;
  border-radius: 10px;
  padding: 10px 29px;
`;

const Button = styled.button`
  background-color: #152540;
  border-radius: 99px;
  color: white;
  width: 330px;
  font-weight: 500;
  font-size: 18px;
  line-height: 36px;
  border: none;
`;
