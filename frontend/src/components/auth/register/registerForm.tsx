import { Link } from "react-router-dom"
import logo from "../../../assets/bigcommerce-black.svg"

const RegisterForm = ({ onSubmit, register }: {onSubmit: any, register: any} ) => {
     return (
          <article className="w-[50vw] h-[100vh] px-10">
               <div className="flex items-center w-full h-full">
                    <div className="w-full">
                         <div className="flex justify-center">
                              <img src={logo} className="w-40" alt="logo" />
                         </div>
                         <div className="text-center my-7 font-semibold">
                              <p className="mt-1 text-[#e7c99d]">Please Sign up here</p>
                         </div>
                         <form onSubmit={onSubmit} className="flex justify-center px-10 flex-col space-y-8">
                              <div className="relative z-0 w-full">
                                   <input {...register('fullName')} type="text" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-600 focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder=" " />
                                   <label htmlFor="password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Full Name</label>
                              </div>

                              <div className="relative z-0 w-full">
                                   <input {...register('username')} type="text" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-600 focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder=" " />
                                   <label htmlFor="password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Username</label>
                              </div>

                              <div className="relative z-0 w-full">
                                   <input {...register('email')} type="text" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-600 focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder=" " />
                                   <label htmlFor="email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email</label>
                              </div>

                              <div className="relative z-0 w-full">
                                   <input {...register('password')} type="text" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-600 focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder=" " />
                                   <label htmlFor="password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Password</label>
                              </div>

                              <div className="relative z-0 w-full">
                                   <input type="text" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-600 focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder=" " />
                                   <label htmlFor="password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Confirm Password</label>
                              </div>

                              <button type="submit" className="bg-black py-2 rounded-lg text-white">Sign Up</button>
                         </form>

                         <div className="px-12">
                              <div className="flex items-center gap-2 mt-10 border-t pt-4 w-full justify-center text-sm px-10 font-semibold">
                                   <p className="text-stone-400">Already have a account ?</p>
                                   <Link to={"/"} className="text-white bg-black rounded-lg p-2">Sign in</Link>
                              </div>
                         </div>
                    </div>
               </div>
          </article>
     )
}

export default RegisterForm