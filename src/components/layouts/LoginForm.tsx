import React from 'react'
import Title from '../ui/Title/Title'
import Form from 'next/form'
import { userLogin } from '@/Actions/UserLoginFormActions'
import GoogleLoginButton from './GoogleLoginButton'
import Link from 'next/link'

const LoginForm = () => {
  return (
    <div className='bg-zinc-900 w-full p-8 rounded-xl'>

        <div className='mb-5'>
            <Title title_content={'Welcome Again'} />
        </div>

        {/* login form section */}
        <div>

            {/* login form section */}
            <Form action={userLogin}>

                {/* user email address */}
                <div className="user-input">
                    <label htmlFor="user-email">Email Address</label>
                    <input type="email" name="user-email" placeholder='sample@sample.com' />
                </div>

                {/* user password section */}
                <div className="user-input">
                    <label htmlFor="user-password">User Password</label>
                    <input type="password" name="user-password" placeholder='Enter valid password' />

                    {/* forgor password link */}
                    <div className='flex justify-end mt-1 text-[12px] w-full'>
                        <Link href={'#'}>Forgot password ?</Link>
                    </div>

                </div>

                {/* form submission button */}
                <div className="form-submit mt-6">
                    <button type='submit' className='submit-btn'>Login</button>
                </div>

                <div className='flex mt-2 text-[12px]'>
                    <p className='text-zinc-400'>Already haven't an account : </p><Link href={'http://localhost:3000/Register'}>Register</Link>
                </div>
                
            </Form>
            
            {/* line breack */}
            <hr className='my-7 border-zinc-600' />        

            {/* google login section */}
            <div className="social-logins">
                <GoogleLoginButton />
            </div>
            

        </div>
        
    </div>
  )
}

export default LoginForm