import Image from "../../components/auth/login/Image"
import RegisterForm from "../../components/auth/register/registerForm"
// @ts-ignore
import AOS from 'aos';
import { useEffect } from "react";
import { useForm } from 'react-hook-form';

const Register = () => {
     const {
          register,
          handleSubmit,
     } = useForm();

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

                    {/* Register Form */}
                    <RegisterForm onSubmit={handleSubmit((data) => console.log(data))} register={register} />
               </section>
          </>
     )
}

export default Register