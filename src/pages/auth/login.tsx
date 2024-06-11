import {  AuthApi, FetchPostApi } from '@/constants/FetchApi'
import { GlobalNav } from '@/ui/global-nav'
import { Field, Formik } from 'formik'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { toast } from "react-toastify";
import { useCookies } from 'react-cookie';
import Link from 'next/link'

const Signin = ({ domain }) => {
  const router = useRouter()
  const [error, setError] = useState(null)
  /* const [cookiesToken, setCookieToken] = useCookies(['token']);
  const [cookiesUsername, setCookieUsername] = useCookies(['userName']);
  const [cookiesEmail, setCookieEmail] = useCookies(['email']);
  const [cookiesId, setCookieId] = useCookies(['userId']); */
  const [cookies, setCookies] = useCookies(['token','userName','email','userId']);
  return (
    <>
      <GlobalNav domain={domain} />
      <div className="lg:pl-60  bg-slate-900/70 border border-slate-700">
        <main className="px-2">
          <section className="py-8">
            <div className="flex flex-col items-center justify-start px-6 py-8 mx-auto md:h-screen lg:py-0">
              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-3 space-y-4 md:space-y-6">
                  <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={async (values, { setSubmitting }) => {
                    
                      const payload = {
                        username: values.email,
                        password: values.password,
                      }
                     // console.log(payload);
                      const res = await AuthApi('login', JSON.stringify(payload))
                      if (res && res.code=="00") {
                        //home
                        setCookies('token', res.accessToken);
                        setCookies('userName', res?.user?.user_name);
                        setCookies('email', res?.user?.email);
                        setCookies('userId',  res?.user?.user_id);

                       /*  setCookieToken('token', res.accessToken);
                        setCookieUsername('userName', res?.user?.user_name);
                        setCookieEmail('email', res?.user?.email);
                        setCookieId('userId',  res?.user?.user_id); */
                        //profine
                        router.push('/auth/profile');
                        //console.log("===>home");
                      } 
                      if (res && res.code=="01") {
                        toast.error("Invalid login information.");
                      }
                     
                      setSubmitting(false)
                    }}
                  >
                    {(formik) => (
                      <form className="space-y-4 md:space-y-6" onSubmit={formik.handleSubmit}>
                        <div>
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email/User Name</label>
                          <Field type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="manga@mangaglobal.com" required />
                        </div>
                        <div>
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                          <Field type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <button type="submit" className="w-full text-white bg-sky-800 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                          {formik.isSubmitting ? 'Please wait...' : 'Sign in'}
                        </button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                          Don’t have an account yet? <Link href="/auth/signup" className="font-medium text-sky-600 hover:underline dark:text-primary-500">Sign up</Link>
                        </p>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>

  )
}

export default Signin

export async function getServerSideProps(context) {
  const _domain = context.req.headers.host;

  let domain = "_";//'_';
  if (!_domain.includes('localhost')) {
    domain = domain + _domain.replace('www.', '').replace('-', '').replace('.', '');
  }
  return {
    props: {
      domain
    },
  }
}
