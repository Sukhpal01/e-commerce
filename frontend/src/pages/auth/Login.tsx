import Image from "../../components/auth/login/Image"
import LoginForm from "../../components/auth/login/loginForm";
import 'aos/dist/aos.css';
// @ts-ignore
import AOS from 'aos';
import { useEffect } from "react";

const Login = () => {
     useEffect(() => {
          AOS.init({
               duration: 1200,
          });
     }, []);

     return (
          <>
               <section data-aos="fade-right" className="flex justify-between">
                    {/* Image  */}
                    <Image />

                    {/* Login Form */}
                    <LoginForm />
               </section>
          </>
     )
}

export default Login